--liquibase formatted sql

-- ===============================
-- Expense Split Table
-- ===============================

-- changeset priyakdey:expense-split-001
CREATE TABLE expense_split
(
    expense_id BIGINT         NOT NULL,
    owed_by    INT            NOT NULL,
    amount     NUMERIC(10, 2) NOT NULL,
    PRIMARY KEY (expense_id, owed_by)
);

ALTER TABLE expense_split
    ADD CONSTRAINT fk_expense_split_expense
        FOREIGN KEY (expense_id) REFERENCES expense (id)
            ON DELETE CASCADE;

ALTER TABLE expense_split
    ADD CONSTRAINT fk_expense_split_owed_by
        FOREIGN KEY (owed_by) REFERENCES profile (id);

CREATE INDEX idx_expense_split_expense_id ON expense_split (expense_id);
CREATE INDEX idx_expense_split_owed_by ON expense_split (owed_by);
