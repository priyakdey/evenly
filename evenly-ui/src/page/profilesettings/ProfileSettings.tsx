// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import PageContainer from "@/components/layout/page/PageContainer.tsx";
import SelectCurrency from "@/components/select/SelectCurrency.tsx";
import SelectTimezone from "@/components/select/SelectTimezone.tsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label";
import useProfile from "@/hooks/useProfile.ts";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import "./ProfileSettings.css";


function ProfileSettingsPage() {
  const {
    name,
    email,
    timezone: initialTimezone,
    currency: initialCurrency,
    setProfileSettings
  } = useProfile();

  const [ timezone, setTimezone ] = useState<string>(initialTimezone);
  const [ currency, setCurrency ] = useState<string>(initialCurrency);
  const [ isDirty, setIsDirty ] = useState<boolean>(false);
  const [ partnerEmail, setPartnerEmail ] = useState<string>("");
  const [ friendEmail, setFriendEmail ] = useState<string>("");

  useEffect(() => {
    setIsDirty(timezone !== initialTimezone || currency !== initialCurrency);
  }, [ timezone, currency, initialTimezone, initialCurrency ]);

  const handleOnClick = () => {
    setProfileSettings(timezone, currency)
      .then(() => {
        toast.success("Successfully updated your preference");
      })
      .catch(() => {
        toast.error("Something went wrong", { description: "We are working on it" });
      });
  };

  return (
    <PageContainer title="Profile Settings">
      <div className="ProfileSettings-content">

        {/* Details */}
        <section id="profile-details" className="ProfileSettings-section">
          Details
          <div className="ProfileSettings-section-content">
            <div className="ProfileSettings-section-input">
              <Label htmlFor="profile-name">Name</Label>
              <Input type="text" name="profile-name" value={name}
                     disabled={true}
              />
            </div>
            <div className="ProfileSettings-section-input">
              <Label htmlFor="profile-email">Email</Label>
              <Input type="text" name="profile-email" value={email}
                     disabled={true}
              />
            </div>
          </div>
        </section>

        {/* Preferences */}
        <section id="profile-preference" className="ProfileSettings-section">
          Preferences
          <div className="ProfileSettings-section-content">
            <div className="ProfileSettings-section-input">
              <Label htmlFor="profile-timezone">Timezone</Label>
              <SelectTimezone timezone={timezone} setTimezone={setTimezone} />
            </div>
            <div className="ProfileSettings-section-input">
              <Label htmlFor="profile-currency">Currency</Label>
              <SelectCurrency currency={currency} setCurrency={setCurrency} />
            </div>
            <div className="ProfileSettings-save-button-container">
              <Button
                type="button"
                variant="default"
                onClick={handleOnClick}
                disabled={!isDirty}
              >
                Save Changes
              </Button>
            </div>
          </div>
        </section>

        {/* Invites */}
        <section id="profile-invites" className="ProfileSettings-section">
          Invites
          <div className="ProfileSettings-section-content">
            <div className="ProfileSettings-invite-container">
              <Label htmlFor="invite-partner">Invite Partner</Label>
              <div className="ProfileSettings-invite-input-container">
                <Input type="email" name="invite-partner"
                       placeholder="johndoe@example.com" value={partnerEmail}
                       autoComplete="email"
                       onChange={(e) => setPartnerEmail(e.target.value)}
                />
                <Button type="button" variant="secondary"
                        disabled={partnerEmail === ""}
                        onClick={() => console.log(partnerEmail)}
                >
                  Send Invite
                </Button>
              </div>
            </div>
            <div className="ProfileSettings-invite-container">
              <Label htmlFor="invite-friend">
                Invite a friend to use this application
              </Label>
              <div className="ProfileSettings-invite-input-container">
                <Input type="email" name="invite-friend"
                       placeholder="johndoe@example.com" value={friendEmail}
                       autoComplete="email"
                       onChange={(e) => setFriendEmail(e.target.value)}
                />
                <Button type="button" variant="secondary"
                        disabled={friendEmail === ""}
                        onClick={() => console.log(friendEmail)}
                >
                  Send Invite
                </Button>
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </PageContainer>
  );
}

export default ProfileSettingsPage;
