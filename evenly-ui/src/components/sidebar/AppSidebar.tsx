// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar.tsx";

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        Header
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroupLabel>Group 1</SidebarGroupLabel>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>
                MENU 1
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        FOOTER
      </SidebarFooter>
    </Sidebar>
  );
}

export default AppSidebar;
