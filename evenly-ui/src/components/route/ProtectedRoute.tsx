// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import Spinner from "@/components/spinner/Spinner.tsx";
import useAuth from "@/hooks/useAuth.ts";
import * as React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRoutePropsType {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRoutePropsType) {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return (
      <div style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Spinner />
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
