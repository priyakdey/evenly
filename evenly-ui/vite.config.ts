// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [ react(), tailwindcss() ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
