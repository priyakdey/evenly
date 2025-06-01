/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.security;

/**
 * @author Priyak Dey
 */
public interface TokenAlgorithmStrategy<T> {

    String sign(T payload, TokenMetadata tokenMetadata);

    T verify(String token, TokenMetadata metadata);
}
