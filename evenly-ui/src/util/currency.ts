// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

export const GROUPED_CURRENCIES: Record<string, {
  code: string;
  name: string
}[]> = {
  America: [
    { code: "BRL", name: "Brazilian Real" },
    { code: "CAD", name: "Canadian Dollar" },
    { code: "GBP", name: "British Pound" },
    { code: "USD", name: "US Dollar" }
  ],
  Asia: [
    { code: "AED", name: "UAE Dirham" },
    { code: "CNY", name: "Chinese Yuan" },
    { code: "INR", name: "Indian Rupee" },
    { code: "JPY", name: "Japanese Yen" },
    { code: "SGD", name: "Singapore Dollar" }
  ],
  Europe: [
    { code: "CHF", name: "Swiss Franc" },
    { code: "EUR", name: "Euro" },
    { code: "SEK", name: "Swedish Krona" }
  ],
  Other: [
    { code: "AUD", name: "Australian Dollar" },
    { code: "ZAR", name: "South African Rand" }
  ]
};
