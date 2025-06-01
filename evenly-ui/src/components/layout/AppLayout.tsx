// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import AppSidebar from "@/components/sidebar/AppSidebar.tsx";
import { SidebarProvider } from "@/components/ui/sidebar";
import * as React from "react";
import "./AppLayout.css";

interface AppLayoutPropsType {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutPropsType) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        {children}
      </main>
    </SidebarProvider>
  );
}

export default AppLayout;
