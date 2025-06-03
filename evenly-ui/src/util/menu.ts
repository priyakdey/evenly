// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import {
  LayoutDashboardIcon,
  ListIcon,
  RepeatIcon,
  TagsIcon
} from "lucide-react";

export const SIDEBAR_MENU = {
  Overview: [
    {
      label: "Dashboard",
      icon: LayoutDashboardIcon,
      href: "/dashboard"
    }
  ],
  Expenses: [
    {
      label: "All Expenses",
      icon: ListIcon,
      href: "/expenses"
    },
    {
      label: "Categories",
      icon: TagsIcon,
      href: "/expenses/categories"
    },
    {
      label: "Recurring",
      icon: RepeatIcon,
      href: "/expenses/recurring"
    }
  ],
  // Accounts: [
  //   {
  //     label: "Bank Accounts",
  //     icon: BanknoteIcon,
  //     href: "/accounts/bank"
  //   },
  //   {
  //     label: "Credit Cards",
  //     icon: CreditCardIcon,
  //     href: "/accounts/credit-cards"
  //   }
  // ],
  // Investments: [
  //   {
  //     label: "Overview",
  //     icon: BarChart2Icon,
  //     href: "/investments"
  //   },
  //   {
  //     label: "Stocks",
  //     icon: LineChartIcon,
  //     href: "/investments/stocks"
  //   },
  //   {
  //     label: "Mutual Funds",
  //     icon: PiggyBankIcon,
  //     href: "/investments/mutual-funds"
  //   },
  //   {
  //     label: "FDs / RDs",
  //     icon: LibraryIcon,
  //     href: "/investments/fds-rds"
  //   },
  //   {
  //     label: "PPF / NPS / Bonds",
  //     icon: Building2Icon,
  //     href: "/investments/ppf-nps-bonds"
  //   },
  //   {
  //     label: "Real Estate / Gold",
  //     icon: GemIcon,
  //     href: "/investments/real-estate-gold"
  //   }
  // ],
  // Insurance: [
  //   {
  //     label: "Life",
  //     icon: ShieldIcon,
  //     href: "/insurance/life"
  //   },
  //   {
  //     label: "Health",
  //     icon: HeartPulseIcon,
  //     href: "/insurance/health"
  //   },
  //   {
  //     label: "Other",
  //     icon: UmbrellaIcon,
  //     href: "/insurance/other"
  //   }
  // ],
  // Goals: [
  //   {
  //     label: "Goals",
  //     icon: TargetIcon,
  //     href: "/goals"
  //   }
  // ]
};
