/*
 * SPDX-License-Identifier: AGPL-3.0-or-later
 * Copyright (C) 2024 Priyak Dey
 */

package com.priyakdey.lakshmicore.domain;

import jakarta.persistence.*;

import java.math.BigDecimal;

/**
 * @author Priyak Dey
 */
@Entity
@IdClass(ExpenseSplitId.class)
public class ExpenseSplit {

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "expense_id", nullable = false)
    private Expense expense;

    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "owed_by", nullable = false)
    private Profile owedBy;

    @Column(nullable = false)
    private BigDecimal amount;

    public Expense getExpense() {
        return expense;
    }

    public void setExpense(Expense expense) {
        this.expense = expense;
    }

    public Profile getOwedBy() {
        return owedBy;
    }

    public void setOwedBy(Profile owedBy) {
        this.owedBy = owedBy;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }
}
