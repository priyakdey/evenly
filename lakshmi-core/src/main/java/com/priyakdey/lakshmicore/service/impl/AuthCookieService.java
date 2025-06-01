/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.service.impl;

import com.priyakdey.lakshmicore.configuration.properties.JwtAuthTokenProperties;
import com.priyakdey.lakshmicore.service.CookieService;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Service;

/**
 * @author Priyak Dey
 */
@Service
public class AuthCookieService implements CookieService<String> {

    private final JwtAuthTokenProperties tokenProperties;

    public AuthCookieService(JwtAuthTokenProperties tokenProperties) {
        this.tokenProperties = tokenProperties;
    }

    @Override
    public ResponseCookie create(String token) {
        return ResponseCookie.from("token", token)
                .path("/")
                .httpOnly(true)
                .secure(false)      // TODO: env driven
                .sameSite("Lax")    // TODO: depends on secure
                .maxAge(tokenProperties.expiration())
                .build();
    }
}
