-- liquibase formatted sql

-- ===============================
-- Profile Table & Sequences
-- ===============================

-- changeset priyakdey:profile-001
CREATE SEQUENCE seq_profile_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE CACHE 1;

CREATE TABLE profile
(
    id          INT          NOT NULL DEFAULT nextval('seq_profile_id'),
    google_id   VARCHAR(100) NOT NULL,
    name        VARCHAR(100) NOT NULL,
    email       VARCHAR(254) NOT NULL,
    profile_pic TEXT,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT (now() at time zone 'utc'),
    PRIMARY KEY (id)
);

CREATE UNIQUE INDEX idx_profile_email ON profile (email);
CREATE INDEX idx_profile_google_id ON profile (google_id);

