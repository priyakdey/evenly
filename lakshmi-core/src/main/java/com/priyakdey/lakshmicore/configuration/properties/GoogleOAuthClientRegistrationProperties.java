/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.configuration.properties;

/**
 * @author Priyak Dey
 */
public record GoogleOAuthClientRegistrationProperties(String clientName, String clientId,
                                                      String clientSecret,
                                                      String scopes,
                                                      String redirectUri) {
}
