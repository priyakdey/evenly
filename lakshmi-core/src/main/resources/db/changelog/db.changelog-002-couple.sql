--liquibase formatted sql

-- ===============================
-- Couple Table & Sequences
-- ===============================

-- changeset priyakdey:couple-001
CREATE SEQUENCE seq_couple_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE CACHE 1;

CREATE TABLE couple
(
    id             INT                  DEFAULT nextval('seq_couple_id'),
    partner_one_id INT         NOT NULL,
    partner_two_id INT         NOT NULL,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT (now() at time zone 'utc'),
    PRIMARY KEY (id),
    FOREIGN KEY (partner_one_id) REFERENCES profile (id),
    FOREIGN KEY (partner_two_id) REFERENCES profile (id)
);

ALTER TABLE couple
    ADD CONSTRAINT chk_profile_ids CHECK (partner_one_id <> partner_two_id);

CREATE INDEX idx_couple_partner_one ON couple (partner_one_id);
CREATE INDEX idx_couple_partner_two ON couple (partner_two_id);