// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import { AuthContext } from "@/context/AuthContext.tsx";
import { useContext } from "react";

const useAuth = () => useContext(AuthContext)!;
export default useAuth;
