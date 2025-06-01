// SPDX-License-Identifier: MIT
// This file is copied from shadcn/ui (https://github.com/shadcn-ui/ui)
// License: MIT

import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
