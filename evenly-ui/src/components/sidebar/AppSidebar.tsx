// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import AppSidebarFooter from "@/components/sidebar/footer/AppSidebarFooter.tsx";
import AppSidebarHeader from "@/components/sidebar/header/AppSidebarHeader.tsx";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar.tsx";
import {
  BanknoteIcon,
  BarChart2Icon,
  LayoutDashboardIcon,
  ListIcon,
  PieChartIcon,
  ReceiptTextIcon,
  RepeatIcon,
  ShieldIcon,
  TrendingUpIcon
} from "lucide-react";
import "./AppSidebar.css";

// TODO: This needs to be scaled.
// Need to think and support all these, but not at one go.
// Lets start with Accounts - liquid cash + CC + Expense + Income Tracking
// Reference can also be taken from IND Money
// Group: Accounts
// Bank Accounts
// Credit Cards
//
// Group: Investments
// Overview
// Stocks
// MFs
// FDs / RDs
// PPF / NPS / Bonds
// Real Estate / Gold
//
// Group: Insurance
// Life
// Health
// Other
//
// Group: Goals
//
// Group: Expenses

function AppSidebar() {
  return (
    <Sidebar className="AppSidebar">
      <AppSidebarHeader />
      <SidebarContent>
        <nav aria-label="Main sidebar navigation">

          <SidebarGroup>
            <SidebarGroupLabel>Overview</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <LayoutDashboardIcon />
                    Dashboard
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Expense</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <PieChartIcon />
                    Summary
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <ReceiptTextIcon />
                    All Expenses
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <ListIcon />
                    Categories
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <RepeatIcon />
                    Recurring
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Investments</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <BarChart2Icon />
                    Summary
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>

              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <TrendingUpIcon />
                    Stocks & MFs
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>

              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <BanknoteIcon />
                    Fixed Deposits
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>

              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <ShieldIcon />
                    PPF / NPS
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

        </nav>
      </SidebarContent>
      <AppSidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;
