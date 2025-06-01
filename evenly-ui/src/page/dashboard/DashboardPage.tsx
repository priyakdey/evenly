// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import AppLayout from "@/components/layout/AppLayout.tsx";
import useProfile from "@/hooks/useProfile.ts";

function DashboardPage() {
  const { name } = useProfile();

  return (
    <AppLayout>
      Welcome to Application {name}
    </AppLayout>
  );
}

export default DashboardPage;
