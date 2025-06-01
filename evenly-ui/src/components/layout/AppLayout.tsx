// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import AppSidebar from "@/components/sidebar/AppSidebar.tsx";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import * as React from "react";

interface AppLayoutPropsType {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutPropsType) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}

export default AppLayout;
