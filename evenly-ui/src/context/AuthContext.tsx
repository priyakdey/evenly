// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import * as React from "react";
import { createContext, useState } from "react";

interface AuthContextType {
  isLoading: boolean;
  setIsLoading: (what: boolean) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (what: boolean) => void;
  logout: () => Promise<void>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderPropsType {
  children: React.ReactNode;
}

function AuthProvider({ children }: AuthProviderPropsType) {
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ isAuthenticated, setIsAuthenticated ] = useState<boolean>(false);

  const logout = async () => {
    // TODO: implement true logout
    console.log("logout");
    return Promise.resolve();
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

export default AuthProvider;
