-- liquibase formatted sql

-- ===============================
-- Profile Setting Table & Sequences
-- ===============================

-- changeset priyakdey:profile-settings-001
CREATE TABLE profile_settings
(
    profile_id INT PRIMARY KEY REFERENCES profile (id) ON DELETE CASCADE,
    currency   VARCHAR(3)  NOT NULL DEFAULT 'INR',
    timezone   TEXT        NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT (now() at time zone 'utc'),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT (now() at time zone 'utc')
);

