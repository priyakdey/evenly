// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import TotalExpenseCard from "@/components/card/expense/TotalExpenseCard.tsx";
import Page from "@/components/layout/page/Page.tsx";
import {
  Card as ShadCNCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card.tsx";
import "./Dashboard.css";


function DashboardPage() {

  return (
    <Page title="Dashboard">
      <div className="Dashboard-subtext">
        This is your overview dashboard for this month
      </div>
      <div className="Dashboard-wrapper">
        {/* First Row: Totals */}
        <div className="Dashboard-grid-5">
          <TotalExpenseCard />
          <TotalExpenseCard />
          <TotalExpenseCard />
          <TotalExpenseCard />
          <TotalExpenseCard />
        </div>

        {/* Second Row: Charts */}
        <div className="Dashboard-grid-2">
          <ShadCNCard className="flex flex-col">
            <CardHeader className="items-center pb-0">
              <CardTitle>Expense Breakdown</CardTitle>
              <CardDescription>Personal Expense Breakdown</CardDescription>
            </CardHeader>
          </ShadCNCard>


          <ShadCNCard>
            <CardHeader>
              <CardTitle>Equity Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="Dashboard-placeholder">[ Line Chart ]</div>
            </CardContent>
          </ShadCNCard>
          <ShadCNCard>
            <CardHeader>
              <CardTitle>Mutual Funds Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="Dashboard-placeholder">[ Line Chart ]</div>
            </CardContent>
          </ShadCNCard>
          <ShadCNCard>
            <CardHeader>
              <CardTitle>Other Investments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="Dashboard-placeholder">[ Summary ]</div>
            </CardContent>
          </ShadCNCard>
        </div>

        {/* Third Row: Financial Tools */}
        <div className="Dashboard-grid-4">
          <ShadCNCard>
            <CardHeader>
              <CardTitle>Credit Card Bills</CardTitle>
              <CardDescription
                className="Dashboard-value">₹ 22,000</CardDescription>
            </CardHeader>
          </ShadCNCard>
          <ShadCNCard>
            <CardHeader>
              <CardTitle>Liquid Assets</CardTitle>
              <CardDescription
                className="Dashboard-value">₹ 1,10,000</CardDescription>
            </CardHeader>
          </ShadCNCard>
          <ShadCNCard>
            <CardHeader>
              <CardTitle>Recurring Bills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="Dashboard-placeholder">[ List ]</div>
            </CardContent>
          </ShadCNCard>
          <ShadCNCard>
            <CardHeader>
              <CardTitle>Split Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="Dashboard-placeholder">
                [ You 55% / Partner 45% ]
              </div>
            </CardContent>
          </ShadCNCard>
        </div>
      </div>

    </Page>
  )
    ;
}

export default DashboardPage;
