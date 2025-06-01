/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.domain;

/**
 * @author Priyak Dey
 */
public enum SplitType implements BaseEnumWithId {
    EVEN(1),
    PERCENTAGE(2),
    CUSTOM(3);

    private final int id;

    SplitType(int id) {
        this.id = id;
    }

    @Override
    public int getId() {
        return id;
    }

    public static SplitType fromId(int id) {
        for (SplitType type : values()) {
            if (type.id == id) return type;
        }
        throw new IllegalArgumentException("Invalid SplitType id: " + id);
    }
}
