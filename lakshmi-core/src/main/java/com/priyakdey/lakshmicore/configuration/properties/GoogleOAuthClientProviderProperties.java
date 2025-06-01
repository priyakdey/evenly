/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.configuration.properties;

/**
 * @author Priyak Dey
 */
public record GoogleOAuthClientProviderProperties(String authorizationUri,
                                                  String tokenUri) {
}
