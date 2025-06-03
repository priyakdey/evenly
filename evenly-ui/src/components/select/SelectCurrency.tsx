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
import { GROUPED_CURRENCIES } from "@/util/currency.ts";

interface SelectCurrencyPropsType {
  currency: string;
  setCurrency: (currency: string) => void;
}

function SelectCurrency({ currency, setCurrency }: SelectCurrencyPropsType) {
  return (
    <Select name="profile-timezone" value={currency}
            onValueChange={setCurrency}
    >
      <SelectTrigger className="ProfileSettings-dropdown">
        <SelectValue placeholder={currency} />
        <SelectContent>
          {
            Object.entries(GROUPED_CURRENCIES).map(([ region, currencies ]) => (
              <SelectGroup key={region}>
                <SelectLabel>{region}</SelectLabel>
                {currencies.map(({ code, name }) => (
                  <SelectItem key={code} value={code}>
                    {code} — {name}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
        </SelectContent>
      </SelectTrigger>
    </Select>
  );
}

export default SelectCurrency;
