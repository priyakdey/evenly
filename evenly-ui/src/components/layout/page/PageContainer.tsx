// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

// PageContainer.tsx
import React from "react";
import "./PageContainer.css";

interface PageContainerPropsType {
  title: string;
  headerClass?: string;
  contentClass?: string;
  children: React.ReactNode;
}

function PageContainer({
                      title,
                      headerClass = "Page-header",
                      contentClass = "Page-content",
                      children
                    }: PageContainerPropsType) {
  return (
    <div>
      <div className={headerClass}>
        {/* Placeholder */}
      </div>
      <div className={contentClass}>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}

export default PageContainer;
