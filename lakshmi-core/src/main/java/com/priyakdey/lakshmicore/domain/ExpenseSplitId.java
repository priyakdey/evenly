/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2025 Priyak Dey
 */

package com.priyakdey.lakshmicore.domain;

import java.io.Serializable;

/**
 * @author Priyak Dey
 */
public class ExpenseSplitId implements Serializable {

    private Long expenseId;
    private Integer owedBy;

    public ExpenseSplitId() {
    }

    public ExpenseSplitId(Long expenseId, Integer owedBy) {
        this.expenseId = expenseId;
        this.owedBy = owedBy;
    }

    public Long getExpenseId() {
        return expenseId;
    }

    public void setExpenseId(Long expenseId) {
        this.expenseId = expenseId;
    }

    public Integer getOwedBy() {
        return owedBy;
    }

    public void setOwedBy(Integer owedBy) {
        this.owedBy = owedBy;
    }
}
