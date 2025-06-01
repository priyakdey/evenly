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
    group_id        INT            NOT NULL,
    created_by      INT            NOT NULL,                                         -- profile who created this expense
    paid_by         INT            NOT NULL,                                         -- profile who paid this expense
    title           VARCHAR(255),
    notes           TEXT,
    amount          NUMERIC(10, 2) NOT NULL,
    paid_on         DATE           NOT NULL,
    created_at      TIMESTAMPTZ    NOT NULL DEFAULT (now() at time zone 'utc'),
    category_id     INT,
    payment_type_id INT,
    is_shared       BOOLEAN        NOT NULL,
    split_type_id   INT,
    PRIMARY KEY (id)
);

ALTER TABLE expense
    ADD CONSTRAINT fk_expense_group
        FOREIGN KEY (group_id) REFERENCES "group" (id)
            ON DELETE CASCADE;

ALTER TABLE expense
    ADD CONSTRAINT fk_expense_created_by
        FOREIGN KEY (created_by) REFERENCES profile (id);

ALTER TABLE expense
    ADD CONSTRAINT fk_expense_paid_by
        FOREIGN KEY (paid_by) REFERENCES profile (id);

ALTER TABLE expense
    ADD CONSTRAINT fk_expense_category_type
        FOREIGN KEY (category_id) REFERENCES expense_category_type (id);

ALTER TABLE expense
    ADD CONSTRAINT fk_expense_payment_type
        FOREIGN KEY (payment_type_id) REFERENCES payment_type (id);

ALTER TABLE expense
    ADD CONSTRAINT fk_expense_split_type
        FOREIGN KEY (split_type_id) REFERENCES split_type (id);

CREATE INDEX idx_expense_group_id ON expense (group_id);
CREATE INDEX idx_expense_created_by ON expense (created_by);
CREATE INDEX idx_expense_paid_by ON expense (paid_by);
CREATE INDEX idx_expense_paid_on ON expense (paid_on);
CREATE INDEX idx_expense_is_shared ON expense (is_shared);
