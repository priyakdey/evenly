// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import AppSidebarFooter from "@/components/sidebar/footer/AppSidebarFooter.tsx";
import AppSidebarHeader from "@/components/sidebar/header/AppSidebarHeader.tsx";
import AppSidebarMenuItem
  from "@/components/sidebar/menu/AppSidebarMenuItem.tsx";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu
} from "@/components/ui/sidebar.tsx";
import { SIDEBAR_MENU } from "@/util/menu.ts";
import "./AppSidebar.css";

function AppSidebar() {
  return (
    <Sidebar className="AppSidebar">
      <AppSidebarHeader />
      <SidebarContent>
        <nav aria-label="Main sidebar navigation">
          {Object.entries(SIDEBAR_MENU).map(([ groupLabel, items ]) => (
            <SidebarGroup key={groupLabel}>
              <SidebarGroupLabel>{groupLabel}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {
                    items.map((item) => (
                      <AppSidebarMenuItem key={item.label} {...item} />
                    ))
                  }
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </nav>
      </SidebarContent>
      <AppSidebarFooter />
    </Sidebar>
  );
}

export default AppSidebar;
