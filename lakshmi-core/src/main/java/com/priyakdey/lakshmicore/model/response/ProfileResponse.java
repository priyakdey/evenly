/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.model.response;

import java.io.Serial;
import java.io.Serializable;

/**
 * @author Priyak Dey
 */
public class ProfileResponse implements Serializable {
    @Serial
    private static final long serialVersionUID = -2079273329253750294L;

    private int profileId;

    private String name;

    private String email;

    private String profilePicUrl;

    private ProfileSettingsResponse profileSettings;

    public ProfileResponse() {
    }

    public ProfileResponse(int profileId, String name, String email, String profilePicUrl,
                           ProfileSettingsResponse profileSettings) {
        this.profileId = profileId;
        this.name = name;
        this.email = email;
        this.profilePicUrl = profilePicUrl;
        this.profileSettings = profileSettings;
    }

    public int getProfileId() {
        return profileId;
    }

    public void setProfileId(int profileId) {
        this.profileId = profileId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getProfilePicUrl() {
        return profilePicUrl;
    }

    public void setProfilePicUrl(String profilePicUrl) {
        this.profilePicUrl = profilePicUrl;
    }

    public ProfileSettingsResponse getProfileSettings() {
        return profileSettings;
    }

    public void setProfileSettings(ProfileSettingsResponse profileSettings) {
        this.profileSettings = profileSettings;
    }
}
