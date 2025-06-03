// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

export interface ProfileSettingsRequest {
  timezone: string;
  currency: string;

}

export interface ProfileSettingsResponse {
  timezone: string;
  currency: string;
}

export interface ProfileResponse {
  id: number;
  name: string;
  email: string;
  profilePicUrl: string | null;
  profileSettings: ProfileSettingsResponse;
}

