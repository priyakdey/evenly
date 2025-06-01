--liquibase formatted sql

-- ===============================
-- Group Table & Sequences
-- ===============================

-- changeset priyakdey:couple-001
CREATE SEQUENCE seq_group_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE CACHE 1;

CREATE TABLE "group"
(
    id         INT                  DEFAULT nextval('seq_group_id'),
    group_type INT         NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT (now() at time zone 'utc'),
    PRIMARY KEY (id),
    FOREIGN KEY (group_type) REFERENCES group_type (id)
);

CREATE INDEX idx_group_type ON "group" (group_type);