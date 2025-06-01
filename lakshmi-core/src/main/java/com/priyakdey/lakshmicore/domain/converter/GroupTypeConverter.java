/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.domain.converter;

import com.priyakdey.lakshmicore.domain.GroupType;

/**
 * @author Priyak Dey
 */
public class GroupTypeConverter extends EnumWithIdConverter<GroupType> {

    public GroupTypeConverter() {
        super(GroupType.class);
    }
}
