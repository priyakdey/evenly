/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.controller;

import com.auth0.jwt.exceptions.JWTVerificationException;
import com.priyakdey.lakshmicore.configuration.properties.GoogleOAuthClientProviderProperties;
import com.priyakdey.lakshmicore.configuration.properties.GoogleOAuthClientRegistrationProperties;
import com.priyakdey.lakshmicore.model.dto.ProfileDto;
import com.priyakdey.lakshmicore.security.TokenService;
import com.priyakdey.lakshmicore.service.CookieService;
import com.priyakdey.lakshmicore.service.GoogleOAuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Map;
import java.util.UUID;

import static org.apache.tomcat.websocket.Constants.FOUND;

/**
 * @author Priyak Dey
 */
@RestController
@RequestMapping("/api/auth/google")
public class GoogleOAuthController {
    private static final Logger log =
            LoggerFactory.getLogger(GoogleOAuthController.class);

    private final GoogleOAuthClientProviderProperties providerProperties;
    private final GoogleOAuthClientRegistrationProperties registrationProperties;

    private final GoogleOAuthService googleOAuthService;
    private final TokenService<String> stateTokenService;
    private final TokenService<ProfileDto> authTokenService;
    private final CookieService<String> authCookieService;


    public GoogleOAuthController(GoogleOAuthClientProviderProperties providerProperties,
                                 GoogleOAuthClientRegistrationProperties registrationProperties,
                                 GoogleOAuthService googleOAuthService,
                                 TokenService<String> stateTokenService,
                                 TokenService<ProfileDto> authTokenService,
                                 CookieService<String> authCookieService) {
        this.providerProperties = providerProperties;
        this.registrationProperties = registrationProperties;
        this.googleOAuthService = googleOAuthService;
        this.stateTokenService = stateTokenService;
        this.authTokenService = authTokenService;
        this.authCookieService = authCookieService;
    }


    @GetMapping("/initiate")
    public ResponseEntity<Void> redirectToGoogleLogin() {
        String nonce = UUID.randomUUID().toString();
        String state = stateTokenService.generateToken(nonce);

        Map<String, Object> params = Map.of(
                "state", state,
                "client_name", registrationProperties.clientName(),
                "client_id", registrationProperties.clientId(),
                "redirect_uri", registrationProperties.redirectUri(),
                "response_type", "code",
                "scope", registrationProperties.scopes()
        );
        URI redirectUri = buildUri(registrationProperties.redirectUri(), params);

        return ResponseEntity.status(HttpStatus.FOUND).location(redirectUri)
                .build();
    }

    @GetMapping("/callback")
    public ResponseEntity<Void> handleCallback(@RequestParam("code") String code,
                                               @RequestParam("state") String state) {
        try {
            stateTokenService.decodeToken(state);
        } catch (JWTVerificationException e) {
            log.error("JWT verification failed: {}", e.getMessage());
            throw new RuntimeException("JWT verification failed");  // TODO: custom exceptions
        }

        Map<String, Object> params = Map.of(
                "client_name", registrationProperties.clientName(),
                "client_id", registrationProperties.clientId(),
                "client_secret", registrationProperties.clientSecret(),
                "redirect_uri", registrationProperties.redirectUri(),
                "code", code,
                "grant_type", "authorization_code"
        );

        URI uri = buildUri(providerProperties.tokenUri(), params);

        ProfileDto profileDto = googleOAuthService.handleLogin(uri);

        String bearerToken = authTokenService.generateToken(profileDto);
        ResponseCookie cookie = authCookieService.create(bearerToken);

        // TODO: env driven
        URI location = UriComponentsBuilder.fromUriString(
                        "http://localhost:5173/dashboard")
                .build()
                .toUri();

        return ResponseEntity.status(FOUND).location(location)
                .header(HttpHeaders.SET_COOKIE, cookie.toString()).build();
    }

    private URI buildUri(String uri, Map<String, Object> params) {
        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(uri);

        for (Map.Entry<String, Object> entry : params.entrySet()) {
            String key = entry.getKey();
            Object value = entry.getValue();
            builder.queryParam(key, value);
        }

        return builder.build(true).toUri();
    }

}
