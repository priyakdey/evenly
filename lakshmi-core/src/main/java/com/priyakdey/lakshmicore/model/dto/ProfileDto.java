/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.model.dto;

import com.priyakdey.lakshmicore.domain.Profile;

public record ProfileDto(Integer id, String name, String email, String profilePicUrl,
                         ProfileSettingsDto profileSettingsDto) {

    public static ProfileDto from(Profile profile, ProfileSettingsDto profileSettingsDto) {
        return new ProfileDto(profile.getId(), profile.getName(), profile.getEmail(),
                profile.getProfilePic(), profileSettingsDto);
    }

}
