/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.domain;

/**
 * @author Priyak Dey
 */
public enum ExpenseCategoryType implements BaseEnumWithId {
    FOOD(1),
    GROCERIES(2),
    UTILITIES(3),
    RENT(4),
    TRAVEL(5),
    ENTERTAINMENT(6),
    OTHER(99);

    private final int id;

    ExpenseCategoryType(int id) {
        this.id = id;
    }

    @Override
    public int getId() {
        return id;
    }

    public static ExpenseCategoryType fromId(int id) {
        for (ExpenseCategoryType type : values()) {
            if (type.id == id) return type;
        }

        throw new IllegalArgumentException("Invalid ExpenseCategoryType id: " + id);
    }

}
