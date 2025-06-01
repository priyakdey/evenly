// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import googleLogo from "@/assets/google.svg";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import "./LoginPage.css";

function LoginPage() {

  const redirectToGoogleLogin = () => {
    window.location.href = import.meta.env.VITE_LOGIN_URL;
  };

  return (
    <div className="LoginPage">
      <div className="LoginPage-glass-card">
        <img src={logo} className="LoginPage-evenly-logo" alt="evenly logo" />
        <h2 className="LoginPage-subtext">
          Your open-source finance partner
        </h2>
        <Button type="button" variant="outline" className="LoginPage-login-btn"
                onClick={redirectToGoogleLogin}
        >
          <img src={googleLogo} className="LoginPage-google-logo"
               alt="google logo"
          />
          Login with Google
        </Button>
      </div>
    </div>
  );
}

export default LoginPage;
