// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select.tsx";
import { GROUPED_TIMEZONES } from "@/util/timezone.ts";

interface SelectTimezonePropsType {
  timezone: string;
  setTimezone: (timezone: string) => void;
}

function SelectTimezone({ timezone, setTimezone }: SelectTimezonePropsType) {
  return (
    <Select name="profile-timezone" value={timezone}
            onValueChange={setTimezone}
    >
      <SelectTrigger className="ProfileSettings-dropdown">
        <SelectValue placeholder={timezone} />
      </SelectTrigger>
      <SelectContent>
        {
          Object.entries(GROUPED_TIMEZONES).map(([ region, zones ]) => (
            <SelectGroup key={region}>
              <SelectLabel>{region}</SelectLabel>
              {zones.map((zone) => (
                <SelectItem key={zone} value={zone}>
                  {zone}
                </SelectItem>
              ))}
            </SelectGroup>
          ))}
      </SelectContent>
    </Select>
  );
}

export default SelectTimezone;
