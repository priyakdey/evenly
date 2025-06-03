/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.controller;

import com.priyakdey.lakshmicore.model.dto.ProfileDto;
import com.priyakdey.lakshmicore.model.dto.ProfileSettingsDto;
import com.priyakdey.lakshmicore.model.response.ProfileResponse;
import com.priyakdey.lakshmicore.model.response.ProfileSettingsResponse;
import com.priyakdey.lakshmicore.service.ProfileService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

import static org.springframework.util.MimeTypeUtils.APPLICATION_JSON_VALUE;

/**
 * @author Priyak Dey
 */
@RestController
@RequestMapping(path = "/api/me", consumes = APPLICATION_JSON_VALUE,
        produces = APPLICATION_JSON_VALUE)
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping
    public ResponseEntity<ProfileResponse> getProfileDetails(Principal principal) {
        int profileId = Integer.parseInt(principal.getName());
        ProfileDto profileDto = profileService.getByProfileId(profileId);

        ProfileSettingsDto profileSettingsDto = profileDto.profileSettingsDto();
        ProfileSettingsResponse profileSettings =
                new ProfileSettingsResponse(profileSettingsDto.timezone(),
                        profileSettingsDto.currency());

        ProfileResponse profileResponse = new ProfileResponse(profileId, profileDto.name(),
                profileDto.email(), profileDto.profilePicUrl(), profileSettings);

        return ResponseEntity.ok(profileResponse);
    }

}
