// SPDX-License-Identifier: MIT
// This file is copied from shadcn/ui (https://github.com/shadcn-ui/ui)
// License: MIT

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
