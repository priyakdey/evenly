/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.domain;

/**
 * @author Priyak Dey
 */
public enum GroupType implements BaseEnumWithId {
    PERSONAL(1),
    COUPLE(2);


    private final int id;

    GroupType(int id) {
        this.id = id;
    }

    @Override
    public int getId() {
        return id;
    }

    public static GroupType fromId(int id) {
        for (GroupType type : values()) {
            if (type.id == id) return type;
        }

        throw new IllegalArgumentException("Invalid GroupType id: " + id);
    }

}
