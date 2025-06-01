// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import type { ProfileDto } from "@/types/api.types.ts";

export async function getProfileDetails(): Promise<ProfileDto> {
  const url = import.meta.env.VITE_GET_PROFILE_DETAILS_URL;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    credentials: "include"
  });

  if (!response.ok) {
    // TODO: error handling
    throw new Error(response.statusText);
  }

  return await response.json() as ProfileDto;
}
