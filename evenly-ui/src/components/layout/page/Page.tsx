// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import { Input } from "@/components/ui/input.tsx";
import { BellIcon } from "lucide-react";
import React from "react";
import "./Page.css";

interface PageContainerPropsType {
  title: string;
  headerClass?: string;
  contentClass?: string;
  children: React.ReactNode;
}

function Page({
                title,
                headerClass = "Page-header",
                contentClass = "Page-content",
                children
              }: PageContainerPropsType) {
  return (
    <div>
      <div className={headerClass}>
        <div className="Page-searchbar">
          <Input type="text" placeholder="Search..." />
        </div>
        <div className="Page-control">
          <BellIcon size={18} />
        </div>
      </div>
      <div className={contentClass}>
        <h3 className="Page-title">{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default Page;
