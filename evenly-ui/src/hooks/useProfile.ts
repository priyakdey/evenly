// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import { ProfileContext } from "@/context/ProfileContext.tsx";
import { useContext } from "react";

const useProfile = () => useContext(ProfileContext)!;
export default useProfile;
