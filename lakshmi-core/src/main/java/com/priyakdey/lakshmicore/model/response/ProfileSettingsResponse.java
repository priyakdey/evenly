/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.model.response;

import java.io.Serial;
import java.io.Serializable;

/**
 * @author Priyak Dey
 */
public class ProfileSettingsResponse implements Serializable {
    @Serial
    private static final long serialVersionUID = -9143735763386321841L;

    private String timezone;
    private String currency;

    public ProfileSettingsResponse() {
    }

    public ProfileSettingsResponse(String timezone, String currency) {
        this.timezone = timezone;
        this.currency = currency;
    }

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
