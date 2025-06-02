// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

export async function logoutUser(): Promise<void> {
  const url = import.meta.env.VITE_LOGOUT_URL;
  const response = await fetch(url, {
    method: "POST",
    credentials: "include"
  });

  if (!response.ok) {
    // TODO: error handling
    throw new Error(response.statusText);
  }

  return Promise.resolve();
}
