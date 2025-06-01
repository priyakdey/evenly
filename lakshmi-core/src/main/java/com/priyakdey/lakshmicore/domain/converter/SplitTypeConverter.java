/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.domain.converter;

import com.priyakdey.lakshmicore.domain.SplitType;

/**
 * @author Priyak Dey
 */
public class SplitTypeConverter extends EnumWithIdConverter<SplitType> {

    public SplitTypeConverter() {
        super(SplitType.class);
    }
}
