/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.security;

/**
 * @author Priyak Dey
 */
public record TokenMetadata(String issuer, int expiration) {
}
