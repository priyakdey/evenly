// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import AppLayout from "@/components/layout/app/AppLayout.tsx";
import ProtectedRoute from "@/components/route/ProtectedRoute.tsx";
import NotFoundPage from "@/page/404/NotFoundPage.tsx";
import DashboardPage from "@/page/dashboard/DashboardPage.tsx";
import LoginPage from "@/page/login/LoginPage.tsx";
import ProfileSettings from "@/page/profilesettings/ProfileSettings.tsx";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Protected routes */}
        <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/settings" element={<ProfileSettings />} />
        </Route>
        {/* Protected routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
