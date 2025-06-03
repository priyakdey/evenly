// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import StatefulCard from "@/components/card/StatefulCard.tsx";
import useProfile from "@/hooks/useProfile.ts";
import { TREND_INDICATORS } from "@/util/visuals.ts";
import { useEffect, useState } from "react";


function TotalExpenseCard() {
  const [ data, setData ] = useState(null);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ isError, setIsError ] = useState<boolean>(false);

  const { currency } = useProfile();

  useEffect(() => {
    setIsLoading(true);

    new Promise<Response>((resolve, reject) => {
      setTimeout(() => {
        fetch("./total_expense.json1", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          credentials: "include"
        })
          .then(resolve)
          .catch(reject);
      }, 2000);
    })
      .then(response => {
        if (!response.ok) throw new Error();
        return response.json();
      })
      .then(data => {
        console.log(data);
        setIsError(false);
        setData(data);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);


  const renderContent = () => {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(data.amount);
  };

  const renderFooter = () => {
    if (isLoading || isError) return "";

    const change = data.change;
    const [ Icon, color ] = TREND_INDICATORS[Math.sign(change) + 1];
    return (
      <span style={{ color }}>
          <Icon size={14} />
        {Math.abs(change)}% from last month
        </span>
    );
  };

  return (
    <StatefulCard
      title="Total Expense"
      description=""
      isLoading={isLoading}
      isError={isError}
      renderContent={renderContent}
      renderFooter={renderFooter}
    />
  );
}

export default TotalExpenseCard;
