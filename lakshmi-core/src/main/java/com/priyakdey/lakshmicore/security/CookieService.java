/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.security;

import org.springframework.http.ResponseCookie;

/**
 * @author Priyak Dey
 */
public interface CookieService<T> {

    ResponseCookie create(T t);

}
