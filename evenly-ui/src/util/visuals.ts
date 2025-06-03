// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  type LucideIcon
} from "lucide-react";

export const TREND_INDICATORS: [ LucideIcon, string ][] = [
  [ ArrowDownRight, "#EC5A5E" ],    // bear
  [ ArrowRight, "#7E7B7B" ],        // no change
  [ ArrowUpRight, "#59E16C" ]       // bull
];
