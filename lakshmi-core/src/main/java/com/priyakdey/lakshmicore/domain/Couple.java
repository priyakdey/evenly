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
public class Couple {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator =
            "couple_id_gen")
    @SequenceGenerator(name = "couple_id_gen", sequenceName = "seq_couple_id",
            allocationSize = 1)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_one_id", nullable = false)
    private Profile partnerOne;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "partner_two_id", nullable = false)
    private Profile partnerTwo;

    @Column(nullable = false, updatable = false)
    private Instant createdAt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Profile getPartnerOne() {
        return partnerOne;
    }

    public void setPartnerOne(Profile partnerOne) {
        this.partnerOne = partnerOne;
    }

    public Profile getPartnerTwo() {
        return partnerTwo;
    }

    public void setPartnerTwo(Profile partnerTwo) {
        this.partnerTwo = partnerTwo;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }
}
