/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.configuration;

import com.priyakdey.lakshmicore.configuration.properties.GoogleOAuthStateTokenProperties;
import com.priyakdey.lakshmicore.configuration.properties.JwtAuthTokenProperties;
import com.priyakdey.lakshmicore.model.dto.ProfileDto;
import com.priyakdey.lakshmicore.security.TokenAlgorithmStrategy;
import com.priyakdey.lakshmicore.security.TokenService;
import com.priyakdey.lakshmicore.security.algorithm.Hmac256TokenAlgorithmStrategy;
import com.priyakdey.lakshmicore.security.service.AuthTokenService;
import com.priyakdey.lakshmicore.security.service.StateTokenService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Map;

/**
 * @author Priyak Dey
 */
@Configuration
public class TokenServiceConfiguration {

    @Bean
    public TokenService<ProfileDto> authTokenService(JwtAuthTokenProperties tokenProperties) {
        TokenAlgorithmStrategy<ProfileDto> algorithm = new Hmac256TokenAlgorithmStrategy<>(
                tokenProperties.secret(),
                profileDto -> Map.of(
                        "sub", profileDto.id(),
                        "name", profileDto.name(),
                        "email", profileDto.email()
                ),
                token -> new ProfileDto(
                        token.getClaim("sub").asInt(),
                        token.getClaim("name").asString(),
                        token.getClaim("email").asString(),
                        null
                )
        );

        return new AuthTokenService(algorithm, tokenProperties);
    }

    @Bean
    public TokenService<String> stateTokenService(GoogleOAuthStateTokenProperties tokenProperties) {
        TokenAlgorithmStrategy<String> algorithm = new Hmac256TokenAlgorithmStrategy<>(
                tokenProperties.secret(),
                nonce -> Map.of("nonce", nonce),
                token -> token.getClaim("nonce").asString()
        );

        return new StateTokenService(algorithm, tokenProperties);
    }

}
