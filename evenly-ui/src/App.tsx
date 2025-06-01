// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import ProtectedRoute from "@/components/route/ProtectedRoute.tsx";
import DashboardPage from "@/page/dashboard/DashboardPage.tsx";
import LoginPage from "@/page/login/LoginPage.tsx";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
