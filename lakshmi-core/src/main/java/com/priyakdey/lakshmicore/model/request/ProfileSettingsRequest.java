/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.model.request;

import java.io.Serial;
import java.io.Serializable;

/**
 * @author Priyak Dey
 */
public class ProfileSettingsRequest implements Serializable {
    @Serial
    private static final long serialVersionUID = -753464804759586606L;

    private String timezone;

    private String currency;

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }
}
