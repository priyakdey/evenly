/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.service;

import com.priyakdey.lakshmicore.model.dto.ProfileDto;
import com.priyakdey.lakshmicore.model.dto.ProfileSettingsDto;

/**
 * @author Priyak Dey
 */
public interface ProfileService {

    boolean existsByGoogleId(String googleId);

    ProfileDto getByProfileId(int profileId);

    ProfileDto getByGoogleId(String googleId);

    ProfileDto createProfile(String googleId, String name, String email, String profilePic);

    void updateProfileSettings(int profileId, ProfileSettingsDto profileSettingsDto);
}
