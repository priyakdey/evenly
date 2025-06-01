/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.service.impl;

import com.priyakdey.lakshmicore.domain.Profile;
import com.priyakdey.lakshmicore.model.dto.ProfileDto;
import com.priyakdey.lakshmicore.respository.ProfileRepository;
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

    public ProfileServiceImpl(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public boolean existsByGoogleId(String googleId) {
        return profileRepository.findByGoogleId(googleId).isPresent();
    }

    @Override
    public ProfileDto getByGoogleId(String googleId) {
        // TODO: custom exception
        Profile profile = profileRepository.findByGoogleId(googleId)
                .orElseThrow(() -> new RuntimeException(googleId));
        return new ProfileDto(profile.getId(), profile.getName(), profile.getEmail(),
                profile.getProfilePic());
    }

    @Override
    @Transactional
    public ProfileDto createProfile(String googleId, String name, String email,
                                    String profilePic) {
        Profile profile = new Profile(googleId, name, email, profilePic);
        profile = profileRepository.save(profile);
        return new ProfileDto(profile.getId(), name, email, profilePic);
    }
}
