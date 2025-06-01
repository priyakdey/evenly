/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.security.service;

import com.priyakdey.lakshmicore.configuration.properties.GoogleOAuthStateTokenProperties;
import com.priyakdey.lakshmicore.security.TokenAlgorithmStrategy;
import com.priyakdey.lakshmicore.security.TokenMetadata;
import com.priyakdey.lakshmicore.security.TokenService;

/**
 * @author Priyak Dey
 */
public class StateTokenService implements TokenService<String> {

    private final TokenAlgorithmStrategy<String> algorithm;
    private final TokenMetadata tokenMetadata;

    public StateTokenService(TokenAlgorithmStrategy<String> algorithm,
                             GoogleOAuthStateTokenProperties tokenProperties) {
        this.algorithm = algorithm;
        tokenMetadata = new TokenMetadata(tokenProperties.issuer(), tokenProperties.expiration());
    }

    @Override
    public String generateToken(String payload) {
        return algorithm.sign(payload, tokenMetadata);
    }

    @Override
    public String decodeToken(String token) {
        return algorithm.verify(token, tokenMetadata);
    }
}
