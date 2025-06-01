/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.configuration.properties;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.bind.ConstructorBinding;

/**
 * @author Priyak Dey
 */
@ConfigurationProperties(prefix = "evenly.jwt.state")
public record GoogleOAuthStateTokenProperties(String secret, String issuer, int expiration) {

    @ConstructorBinding
    public GoogleOAuthStateTokenProperties {
    }

}
