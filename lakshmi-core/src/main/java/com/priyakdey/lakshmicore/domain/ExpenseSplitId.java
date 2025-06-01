/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.domain;

import java.io.Serializable;

/**
 * @author Priyak Dey
 */
public record ExpenseSplitId(Long expense, Integer owedBy) implements Serializable {
}
