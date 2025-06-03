// SPDX-License-Identifier: MIT
// Adapted from shadcn/ui (https://github.com/shadcn-ui/ui)
// Original license: MIT
// Modifications © 2025 Priyak Dey

import { useTheme } from "next-themes";
import React from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
