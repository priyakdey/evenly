--liquibase formatted sql

-- ===============================
-- Expense Split Table
-- ===============================

-- changeset priyakdey:expense-split-001
CREATE TABLE expense_split
(
    expense_id INT            NOT NULL,
    owed_by    INT            NOT NULL, -- who owes part of the expense
    amount     NUMERIC(10, 2) NOT NULL, -- what they owe (to paid_by)
    PRIMARY KEY (expense_id, owed_by),
    FOREIGN KEY (expense_id) REFERENCES expense (id),
    FOREIGN KEY (owed_by) REFERENCES profile (id)
);

CREATE INDEX idx_expense_split_owed_by ON expense_split (owed_by);
