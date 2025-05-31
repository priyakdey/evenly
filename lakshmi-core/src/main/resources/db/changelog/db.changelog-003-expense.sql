--liquibase formatted sql

-- ===============================
-- Expense Table & Sequence
-- ===============================

-- changeset priyakdey:expense-001
CREATE SEQUENCE seq_expense_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE CACHE 1;

CREATE TABLE expense
(
    id              BIGINT                  DEFAULT nextval('seq_expense_id'),
    couple_id       INT            NOT NULL,
    paid_by         INT            NOT NULL,              -- profile.id
    title           VARCHAR(255),                         -- optional label
    notes           TEXT,                                 -- optional details
    amount          NUMERIC(10, 2) NOT NULL,
    paid_on         DATE           NOT NULL,              -- logical date
    created_at      TIMESTAMPTZ    NOT NULL DEFAULT (now() at time zone 'utc'),
    category_id     INT,                                  -- FK to expense_category
    payment_type_id INT,                                  -- FK to payment_type
    is_shared       BOOLEAN        NOT NULL DEFAULT true, -- personal/shared
    split_type_id   INT,                                  -- FK to split_type (if shared)
    PRIMARY KEY (id),
    FOREIGN KEY (couple_id) REFERENCES couple (id),
    FOREIGN KEY (paid_by) REFERENCES profile (id),
    FOREIGN KEY (category_id) REFERENCES expense_category (id),
    FOREIGN KEY (payment_type_id) REFERENCES payment_type (id),
    FOREIGN KEY (split_type_id) REFERENCES split_type (id)
);

CREATE INDEX idx_expense_couple_id ON expense (couple_id);
CREATE INDEX idx_expense_paid_by ON expense (paid_by);
CREATE INDEX idx_expense_paid_on ON expense (paid_on);
CREATE INDEX idx_expense_is_shared ON expense (is_shared);
CREATE INDEX idx_expense_category_id ON expense (category_id);
CREATE INDEX idx_expense_payment_type_id ON expense (payment_type_id);
