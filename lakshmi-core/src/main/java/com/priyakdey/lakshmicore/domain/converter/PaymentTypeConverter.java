/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.domain.converter;

import com.priyakdey.lakshmicore.domain.PaymentType;
import jakarta.persistence.Converter;

/**
 * @author Priyak Dey
 */
@Converter(autoApply = false)
public class PaymentTypeConverter extends EnumWithIdConverter<PaymentType> {

    public PaymentTypeConverter() {
        super(PaymentType.class);
    }
}
