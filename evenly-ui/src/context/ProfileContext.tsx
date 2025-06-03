// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import useAuth from "@/hooks/useAuth.ts";
import {
  getProfileDetails,
  updateProfileSettings
} from "@/service/profileService.ts";
import * as React from "react";
import { createContext, useEffect, useState } from "react";

interface ProfileContextType {
  name: string;
  email: string;
  profilePicUrl: string | null;
  timezone: string;
  currency: string;
  setProfileSettings: (timezone: string, currency: string) => Promise<void>;
}

const ProfileContext = createContext<ProfileContextType | null>(null);

interface ProfileProviderPropsType {
  children: React.ReactNode;
}

function ProfileProvider({ children }: ProfileProviderPropsType) {
  const [ name, setName ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ profilePicUrl, setProfilePicUrl ] = useState<string | null>(null);
  const [ timezone, setTimezone ] = useState<string>("");
  const [ currency, setCurrency ] = useState<string>("");

  const { setIsLoading, setIsAuthenticated } = useAuth();

  useEffect(() => {
    setIsLoading(true);

    getProfileDetails()
      .then(data => {
        setName(data.name);
        setEmail(data.email);
        setProfilePicUrl(data.profilePicUrl);

        // TODO: have a way for default timezone and currency if api fails.
        setTimezone(data.profileSettings?.timezone);
        setCurrency(data.profileSettings?.currency);

        setIsAuthenticated(true);
      })
      .catch(err => {
        console.error(err);
        setIsAuthenticated(false);
      })
      .finally(() => setIsLoading(false));

  }, []);

  const setProfileSettings = async (timezone: string, currency: string): Promise<void> => {
    setIsLoading(true);
    updateProfileSettings({ timezone, currency })
      .then(data => {
        setTimezone(data.timezone);
        setCurrency(data.currency);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return Promise.resolve();
  };

  return (
    <ProfileContext.Provider
      value={{
        name,
        email,
        profilePicUrl,
        timezone,
        currency,
        setProfileSettings
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export {
  ProfileContext,
  ProfileProvider
};
