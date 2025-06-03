/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.controller;

import com.priyakdey.lakshmicore.model.dto.ProfileSettingsDto;
import com.priyakdey.lakshmicore.model.request.ProfileSettingsRequest;
import com.priyakdey.lakshmicore.model.response.ProfileSettingsResponse;
import com.priyakdey.lakshmicore.service.ProfileService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

/**
 * @author Priyak Dey
 */
@RestController
@RequestMapping(path = "/api/me/settings", consumes = APPLICATION_JSON_VALUE,
        produces = APPLICATION_JSON_VALUE)
public class ProfileSettingsController {

    private final ProfileService profileService;

    public ProfileSettingsController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @PutMapping
    public ResponseEntity<ProfileSettingsResponse> updateProfileSettings(
            Principal principal, @RequestBody ProfileSettingsRequest profileSettingsRequest) {
        // TODO: add validations for input
        int profileId = Integer.parseInt(principal.getName());
        String timezone = profileSettingsRequest.getTimezone();
        String currency = profileSettingsRequest.getCurrency();

        profileService.updateProfileSettings(profileId, new ProfileSettingsDto(timezone, currency));

        ProfileSettingsResponse profileSettingsResponse = new ProfileSettingsResponse(timezone,
                currency);
        return ResponseEntity.ok(profileSettingsResponse);
    }

}
