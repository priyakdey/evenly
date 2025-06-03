/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.model.dto;

import com.priyakdey.lakshmicore.domain.ProfileSettings;

/**
 * @author Priyak Dey
 */
public record ProfileSettingsDto(String timezone, String currency) {

    public static ProfileSettingsDto from(ProfileSettings profileSettings) {
        return new ProfileSettingsDto(profileSettings.getTimezone(), profileSettings.getCurrency());
    }

}
