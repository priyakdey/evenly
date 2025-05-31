/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2024 Priyak Dey
 */

package com.priyakdey.lakshmicore.domain;

import jakarta.persistence.*;

import java.time.Instant;

/**
 * @author Priyak Dey
 */
@Entity
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator =
            "profile_id_gen")
    @SequenceGenerator(name = "profile_id_gen", sequenceName = "seq_profile_id",
            allocationSize = 1)
    private Integer id;

    @Column(nullable = false)
    private String googleId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    private String profilePic;

    @Column(nullable = false, updatable = false)
    private Instant createdAt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getGoogleId() {
        return googleId;
    }

    public void setGoogleId(String googleId) {
        this.googleId = googleId;
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

    public String getProfilePic() {
        return profilePic;
    }

    public void setProfilePic(String profilePic) {
        this.profilePic = profilePic;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}
