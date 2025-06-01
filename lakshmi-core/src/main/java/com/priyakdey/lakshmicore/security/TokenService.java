/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.security;

/**
 * @author Priyak Dey
 */
public interface TokenService<T> {

    String generateToken(T payload);

    T decodeToken(String token);
}
