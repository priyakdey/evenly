/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.service.impl;

import com.auth0.jwt.JWT;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.priyakdey.lakshmicore.model.dto.ProfileDto;
import com.priyakdey.lakshmicore.model.response.GoogleTokenResponse;
import com.priyakdey.lakshmicore.service.GoogleOAuthService;
import com.priyakdey.lakshmicore.service.ProfileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.net.URI;
import java.util.Map;

import static org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED_VALUE;

/**
 * @author Priyak Dey
 */
@Service
public class GoogleOAuthServiceImpl implements GoogleOAuthService {
    private static final Logger log = LoggerFactory.getLogger(GoogleOAuthServiceImpl.class);

    private final ProfileService profileService;

    private final RestClient restClient;

    public GoogleOAuthServiceImpl(ProfileService profileService, RestClient restClient) {
        this.profileService = profileService;
        this.restClient = restClient;
    }

    @Override
    public ProfileDto handleLogin(URI tokenUri) {
        ResponseEntity<GoogleTokenResponse> response = restClient.post()
                .uri(tokenUri)
                .header(HttpHeaders.CONTENT_TYPE,
                        APPLICATION_FORM_URLENCODED_VALUE)
                .retrieve()
                .toEntity(GoogleTokenResponse.class);

        HttpStatusCode statusCode = response.getStatusCode();
        if (!statusCode.is2xxSuccessful() || response.getBody() == null) {
            log.error("Failed to exchange code for token for google. Response code: {}",
                    statusCode);
            // TODO: custom exception
            throw new RuntimeException("Failed to exchange code for token for google. Response " +
                    "code: " + statusCode);
        }

        String idToken = response.getBody().getIdToken();
        DecodedJWT decodedJWT = JWT.decode(idToken);
        String googleId = decodedJWT.getSubject();

        ProfileDto profileDto;
        if (!profileService.existsByGoogleId(googleId)) {
            String name = decodedJWT.getClaim("name").asString();
            String email = decodedJWT.getClaim("email").asString();
            String profilePic = decodedJWT.getClaim("picture").asString();
            profileDto = profileService.createProfile(googleId, name, email, profilePic);
        } else {
            profileDto = profileService.getByGoogleId(googleId);
        }

        return profileDto;
    }
}
