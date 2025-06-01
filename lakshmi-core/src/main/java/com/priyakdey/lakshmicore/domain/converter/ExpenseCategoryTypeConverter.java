/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.domain.converter;

import com.priyakdey.lakshmicore.domain.ExpenseCategoryType;
import jakarta.persistence.Converter;

/**
 * @author Priyak Dey
 */
@Converter(autoApply = false)
public class ExpenseCategoryTypeConverter extends EnumWithIdConverter<ExpenseCategoryType> {

    public ExpenseCategoryTypeConverter() {
        super(ExpenseCategoryType.class);
    }
}
