// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import {
  BanknoteIcon, BarChart2Icon, Building2Icon,
  CreditCardIcon,
  GemIcon,
  HeartPulseIcon,
  LayoutDashboardIcon, LibraryIcon,
  LineChartIcon,
  ListIcon,
  PiggyBankIcon,
  RepeatIcon, ShieldIcon,
  TagsIcon, TargetIcon,
  UmbrellaIcon
} from "lucide-react";

export const SIDEBAR_MENU = {
  Overview: [
    {
      label: "Dashboard",
      icon: LayoutDashboardIcon,
      href: "/dashboard",
      enabled: true
    }
  ],
  Expenses: [
    {
      label: "All Expenses",
      icon: ListIcon,
      href: "/expenses",
      enabled: false
    },
    {
      label: "Categories",
      icon: TagsIcon,
      href: "/expenses/categories",
      enabled: false
    },
    {
      label: "Recurring",
      icon: RepeatIcon,
      href: "/expenses/recurring",
      enabled: false
    }
  ],
  Accounts: [
    {
      label: "Bank Accounts",
      icon: BanknoteIcon,
      href: "/accounts/bank",
      enabled: false
    },
    {
      label: "Credit Cards",
      icon: CreditCardIcon,
      href: "/accounts/credit-cards",
      enabled: false
    }
  ],
  Investments: [
    {
      label: "Overview",
      icon: BarChart2Icon,
      href: "/investments",
      enabled: false
    },
    {
      label: "Stocks",
      icon: LineChartIcon,
      href: "/investments/stocks",
      enabled: false
    },
    {
      label: "Mutual Funds",
      icon: PiggyBankIcon,
      href: "/investments/mutual-funds",
      enabled: false
    },
    {
      label: "FDs / RDs",
      icon: LibraryIcon,
      href: "/investments/fds-rds",
      enabled: false
    },
    {
      label: "PPF / NPS / Bonds",
      icon: Building2Icon,
      href: "/investments/ppf-nps-bonds",
      enabled: false
    },
    {
      label: "Real Estate / Gold",
      icon: GemIcon,
      href: "/investments/real-estate-gold",
      enabled: false
    }
  ],
  Insurance: [
    {
      label: "Life",
      icon: ShieldIcon,
      href: "/insurance/life",
      enabled: false
    },
    {
      label: "Health",
      icon: HeartPulseIcon,
      href: "/insurance/health",
      enabled: false
    },
    {
      label: "Other",
      icon: UmbrellaIcon,
      href: "/insurance/other",
      enabled: false
    }
  ],
  Goals: [
    {
      label: "Goals",
      icon: TargetIcon,
      href: "/goals",
      enabled: false
    }
  ]
};
