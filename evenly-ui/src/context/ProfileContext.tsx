// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import useAuth from "@/hooks/useAuth.ts";
import { getProfileDetails } from "@/service/profileService.ts";
import * as React from "react";
import { createContext, useEffect, useState } from "react";

interface ProfileContextType {
  name: string;
  email: string;
  profilePicUrl: string | null;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProfileContext = createContext<ProfileContextType | null>(null);

interface ProfileProviderPropsType {
  children: React.ReactNode;
}

function ProfileProvider({ children }: ProfileProviderPropsType) {
  const [ name, setName ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ profilePicUrl, setProfilePicUrl ] = useState<string | null>(null);

  const { setIsLoading, setIsAuthenticated } = useAuth();

  useEffect(() => {
    setIsLoading(true);

    getProfileDetails()
      .then(data => {
        setName(data.name);
        setEmail(data.email);
        setProfilePicUrl(data.profilePicUrl);
        setIsAuthenticated(true);
      })
      .catch(err => {
        console.error(err);
        setIsAuthenticated(false);
      })
      .finally(() => setIsLoading(false));

  }, []);

  return (
    <ProfileContext.Provider
      value={{ name, email, profilePicUrl }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileProvider;
