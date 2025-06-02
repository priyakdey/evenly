// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import { GhostIcon } from "lucide-react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background text-foreground">
      <GhostIcon className="h-16 w-16 text-zinc-400 mb-4 animate-bounce" />
      <h1 className="text-5xl font-bold mb-2">404</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Uh-oh. You wandered off the financial map.
      </p>
      <Link
        to="/dashboard"
        className="px-4 py-2 bg-purple-500 hover:bg-purple-700 text-white rounded-md transition"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default NotFoundPage;
