/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.service.impl;

import com.priyakdey.lakshmicore.domain.Profile;
import com.priyakdey.lakshmicore.domain.ProfileSettings;
import com.priyakdey.lakshmicore.model.dto.ProfileDto;
import com.priyakdey.lakshmicore.model.dto.ProfileSettingsDto;
import com.priyakdey.lakshmicore.respository.ProfileRepository;
import com.priyakdey.lakshmicore.respository.ProfileSettingsRepository;
import com.priyakdey.lakshmicore.service.ProfileService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

/**
 * @author Priyak Dey
 */
@Service
public class ProfileServiceImpl implements ProfileService {
    private static final Logger log = LoggerFactory.getLogger(ProfileServiceImpl.class);

    private final ProfileRepository profileRepository;
    private final ProfileSettingsRepository profileSettingsRepository;

    public ProfileServiceImpl(ProfileRepository profileRepository,
                              ProfileSettingsRepository profileSettingsRepository) {
        this.profileRepository = profileRepository;
        this.profileSettingsRepository = profileSettingsRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public boolean existsByGoogleId(String googleId) {
        return profileRepository.findByGoogleId(googleId).isPresent();
    }

    @Override
    @Transactional(readOnly = true)
    public ProfileDto getByProfileId(int profileId) {
        Optional<Profile> profileOptional = profileRepository.findById(profileId);
        if (profileOptional.isEmpty()) {
            // TODO: custom exceptions
            throw new RuntimeException("Profile not found");
        }
        Profile profile = profileOptional.get();
        ProfileSettings profileSettings = getProfileSettings(profileId);
        ProfileSettingsDto profileSettingsDto = ProfileSettingsDto.from(profileSettings);
        return ProfileDto.from(profile, profileSettingsDto);
    }

    @Override
    @Transactional(readOnly = true)
    public ProfileDto getByGoogleId(String googleId) {
        // TODO: custom exception
        Profile profile = profileRepository.findByGoogleId(googleId)
                .orElseThrow(() -> new RuntimeException(googleId));

        return ProfileDto.from(profile, null);
    }

    @Override
    @Transactional
    public ProfileDto createProfile(String googleId, String name, String email,
                                    String profilePic) {
        Profile profile = new Profile(googleId, name, email, profilePic);
        profile = profileRepository.save(profile);

        // TODO: do not hardcode, we need a way to take this decision
        ProfileSettings profileSettings = new ProfileSettings("Asia/Kolkata", "INR");
        profileSettings.setProfile(profile);
        profileSettingsRepository.save(profileSettings);

        ProfileSettingsDto profileSettingsDto = ProfileSettingsDto.from(profileSettings);
        return ProfileDto.from(profile, profileSettingsDto);
    }

    private ProfileSettings getProfileSettings(int profileId) {
        Optional<ProfileSettings> profileSettingsOptional =
                profileSettingsRepository.findById(profileId);
        if (profileSettingsOptional.isEmpty()) {
            // Should never happen, if it is happening, something is fucked, so
            // a different error with 500 should be thrown
            // TODO: custom exceptions
            throw new RuntimeException("Profile Settings not found");
        }

        return profileSettingsOptional.get();
    }
}
