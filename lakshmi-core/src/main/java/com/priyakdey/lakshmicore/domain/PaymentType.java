/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.domain;

/**
 * @author Priyak Dey
 */
public enum PaymentType implements BaseEnumWithId {
    CASH(1),
    UPI(2),
    CREDIT_CARD(3),
    DEBIT_CARD(4),
    BANK_TRANSFER(5),
    OTHER(99);

    private final int id;

    PaymentType(int id) {
        this.id = id;
    }

    @Override
    public int getId() {
        return id;
    }

    public static PaymentType fromId(int id) {
        for (PaymentType type : values()) {
            if (type.id == id) return type;
        }

        throw new IllegalArgumentException("Invalid PaymentType id: " + id);
    }
}
