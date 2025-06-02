// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import useProfile from "@/hooks/useProfile.ts";

function DashboardPage() {
  const { name } = useProfile();

  return (
    <>
      Welcome to Application {name}
    </>
  );
}

export default DashboardPage;
