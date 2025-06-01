--liquibase formatted sql

-- ===============================
-- Lookup tables
-- ===============================

-- changeset priyakdey:expense-category-001
CREATE TABLE expense_category_type
(
    id    INT          NOT NULL,
    type  VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)

);

INSERT INTO expense_category_type (id, type)
VALUES (1, 'Food'),
       (2, 'Groceries'),
       (3, 'Utilities'),
       (4, 'Rent'),
       (5, 'Travel'),
       (6, 'Entertainment'),
       (99, 'Other');


CREATE TABLE payment_type
(
    id   INT,
    type VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO payment_type (id, type)
VALUES (1, 'Cash'),
       (2, 'UPI'),
       (3, 'Credit Card'),
       (4, 'Debit Card'),
       (5, 'Bank Transfer'),
       (99, 'Other');


CREATE TABLE split_type
(
    id   INT,
    type VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO split_type (id, type)
VALUES (1, 'Even'),
       (2, 'Percentage'),
       (3, 'Custom');

CREATE TABLE group_type
(
    id   INT         NOT NULL,
    type VARCHAR(50) NOT NULL UNIQUE,
    PRIMARY KEY (id)
);

INSERT INTO group_type (id, type)
VALUES (1, 'Personal'),
       (2, 'Couple');