// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar.tsx";
import useAuth from "@/hooks/useAuth.ts";
import useProfile from "@/hooks/useProfile.ts";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  ChevronsUpDownIcon,
  LogOutIcon,
  SettingsIcon,
  UserCircle2Icon
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AppSidebarFooter.css";

function AppSidebarFooter() {
  const [ imgError, setImgError ] = useState<boolean>(false);
  const { name, email, profilePicUrl } = useProfile();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const showFallback = imgError || !profilePicUrl;

  const openSettingsPage = () => {
    navigate("/settings", { replace: false });
  };

  return (
    <SidebarFooter className="AppSidebarFooter">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="AppSidebarFooter-MenuButton">
                <div className="AppSidebarFooter-profile-container">
                  {
                    !showFallback ? (
                      <img
                        src={profilePicUrl}
                        className="AppSidebarFooter-profile-pic"
                        alt="Profile Picture"
                        onError={() => setImgError(true)}
                      />
                    ) : (
                      <div>
                        <UserCircle2Icon
                          className="AppSidebarFooter-profile-pic"
                        />
                      </div>
                    )
                  }
                  <div className="AppSidebarFooter-profile-details">
                    <span
                      className="AppSidebarFooter-profile-name">{name}</span>
                    <span
                      className="AppSidebarFooter-profile-email">{email}</span>
                  </div>
                </div>
                <ChevronsUpDownIcon />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="AppSidebarFooter-menu">
              <DropdownMenuItem
                className="AppSidebarFooter-menu-item"
                onClick={openSettingsPage}
              >
                <SettingsIcon />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="AppSidebarFooter-menu-item"
                onClick={logout}
              >
                <LogOutIcon />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>

    </SidebarFooter>
  );
}

export default AppSidebarFooter;
