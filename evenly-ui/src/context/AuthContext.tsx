// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import { logoutUser } from "@/service/authService.ts";
import * as React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  isLoading: boolean;
  setIsLoading: (what: boolean) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (what: boolean) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderPropsType {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderPropsType) {
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(false);
  const navigate = useNavigate();

  const logout = async () => {
    logoutUser()
      .then(() => {
        setIsAuthenticated(false);
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        setIsLoading,
        isAuthenticated,
        setIsAuthenticated,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export {
  AuthContext,
  AuthProvider
};
