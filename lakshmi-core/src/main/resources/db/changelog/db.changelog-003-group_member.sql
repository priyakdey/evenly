--liquibase formatted sql

-- ===============================
-- Group Member Table & Sequence
-- ===============================

-- changeset priyakdey:expense-001
CREATE SEQUENCE seq_group_member_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE CACHE 1;

CREATE TABLE group_member
(
    id         INT                  DEFAULT nextval('seq_group_member_id'),
    group_id   INT         NOT NULL,
    profile_id INT         NOT NULL,
    is_owner   BOOLEAN     NOT NULL DEFAULT false,
    joined_at  TIMESTAMPTZ NOT NULL DEFAULT (now() at time zone 'utc'),
    PRIMARY KEY (id)
);

ALTER TABLE group_member
    ADD CONSTRAINT fk_group_member_group
        FOREIGN KEY (group_id) REFERENCES "group" (id)
            ON DELETE CASCADE;

ALTER TABLE group_member
    ADD CONSTRAINT fk_group_member_profile
        FOREIGN KEY (profile_id) REFERENCES profile (id)
            ON DELETE CASCADE;

ALTER TABLE group_member
    ADD CONSTRAINT uq_group_profile UNIQUE (group_id, profile_id);

CREATE INDEX idx_group_member_group_id ON group_member (group_id);
CREATE INDEX idx_group_member_profile_id ON group_member (profile_id);
