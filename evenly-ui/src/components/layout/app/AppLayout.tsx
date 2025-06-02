// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import AppSidebar from "@/components/sidebar/AppSidebar.tsx";
import { SidebarProvider } from "@/components/ui/sidebar.tsx";
import { Outlet } from "react-router-dom";
import "./AppLayout.css";


function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

export default AppLayout;
