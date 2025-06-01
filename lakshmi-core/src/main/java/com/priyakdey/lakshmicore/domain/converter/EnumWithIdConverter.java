/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.domain.converter;

import com.priyakdey.lakshmicore.domain.BaseEnumWithId;
import jakarta.persistence.AttributeConverter;

/**
 * @author Priyak Dey
 */
public abstract class EnumWithIdConverter<E extends Enum<E> & BaseEnumWithId>
        implements AttributeConverter<E, Integer> {

    private final Class<E> clazz;

    protected EnumWithIdConverter(Class<E> clazz) {
        this.clazz = clazz;
    }

    @Override
    public Integer convertToDatabaseColumn(E attribute) {
        return attribute != null ? attribute.getId() : null;
    }

    @Override
    public E convertToEntityAttribute(Integer dbData) {
        if (dbData == null) return null;
        for (E e : clazz.getEnumConstants()) {
            if (e.getId() == dbData) return e;
        }

        throw new IllegalArgumentException("Unknown id for enum " + clazz.getSimpleName() + ": " + dbData);
    }

}
