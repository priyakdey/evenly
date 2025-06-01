/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.service;

import com.priyakdey.lakshmicore.model.dto.ProfileDto;

import java.net.URI;

/**
 * @author Priyak Dey
 */
public interface GoogleOAuthService {

    ProfileDto handleLogin(URI tokenUri);

}
