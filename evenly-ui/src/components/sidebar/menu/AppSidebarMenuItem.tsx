// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import {
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar.tsx";
import type { LucideProps } from "lucide-react";
import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface AppSidebarMenuItemPropsType {
  label: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  href: string;
}

function AppSidebarMenuItem({
                              label,
                              icon: Icon,
                              href
                            }: AppSidebarMenuItemPropsType) {

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <SidebarMenuItem key={label}>
      <SidebarMenuButton
        isActive={location.pathname === href}
        onClick={() => navigate(href, { replace: false })}
      >
        <Icon />
        {label}
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export default AppSidebarMenuItem;
