// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import "./TotalExpenseCard.css";
import CardContainer from "@/components/card/CardContainer.tsx";
import { CardContent, CardFooter } from "@/components/ui/card.tsx";
import useProfile from "@/hooks/useProfile.ts";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  type LucideIcon
} from "lucide-react";

const data = {
  amount: 9022000.00,
  change: 0.1
};

const map: [ LucideIcon, string ][] = [
  [ ArrowDownRight, "#EC5A5E" ],
  [ ArrowRight, "#7E7B7B" ],
  [ ArrowUpRight, "#59E16C" ]
];


function TotalExpenseCard() {
  const { currency } = useProfile();

  const amount = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    compactDisplay: "long"
  }).format(data.amount);

  const change = data.change;
  const index = Math.sign(change) + 1;
  const Icon = map[index][0];
  const color = map[index][1];

  return (
    <CardContainer title="Total Expense" description="Description">
      <CardContent>
        {amount}
      </CardContent>
      <CardFooter className="Card-footer">
          <span style={{ color: color }}>
            <Icon size={14} />
            {Math.abs(change)}%
          </span>
        &nbsp;from last month
      </CardFooter>
    </CardContainer>
  );
}

export default TotalExpenseCard;
