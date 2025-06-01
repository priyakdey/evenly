// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import useAuth from "@/hooks/useAuth.ts";
import * as React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRoutePropsType {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRoutePropsType) {
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return <span className="spinner">Loading....</span>;
  }

  return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
