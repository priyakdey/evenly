// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import logo from "@/assets/logo.png";
import { SidebarHeader } from "@/components/ui/sidebar.tsx";
import "./AppSidebarHeader.css";

function AppSidebarHeader() {
  return (
    <SidebarHeader className="AppSidebarHeader">
      <img src={logo} className="AppSidebarHeader-logo" alt="Evenly logo" />
    </SidebarHeader>

  );
}

export default AppSidebarHeader;
