// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import TotalExpenseCard from "@/components/card/expense/TotalExpenseCard.tsx";
import PageContainer from "@/components/layout/page/PageContainer.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card.tsx";
import "./Dashboard.css";


function DashboardPage() {

  return (
    <PageContainer title="Dashboard">
      <div className="Dashboard-subtext">
        This is your overview dashboard for this month
      </div>
      <div className="Dashboard-wrapper">
        {/* First Row: Totals */}
        <div className="Dashboard-grid-4">
          <TotalExpenseCard />
        </div>

        {/* Second Row: Charts */}
        <div className="Dashboard-grid-2">
          <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
              <CardTitle>Expense Breakdown</CardTitle>
              <CardDescription>Personal Expense Breakdown</CardDescription>
            </CardHeader>
          </Card>


          <Card>
            <CardHeader>
              <CardTitle>Equity Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="Dashboard-placeholder">[ Line Chart ]</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Mutual Funds Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="Dashboard-placeholder">[ Line Chart ]</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Other Investments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="Dashboard-placeholder">[ Summary ]</div>
            </CardContent>
          </Card>
        </div>

        {/* Third Row: Financial Tools */}
        <div className="Dashboard-grid-4">
          <Card>
            <CardHeader>
              <CardTitle>Credit Card Bills</CardTitle>
              <CardDescription
                className="Dashboard-value">₹ 22,000</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Liquid Assets</CardTitle>
              <CardDescription
                className="Dashboard-value">₹ 1,10,000</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recurring Bills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="Dashboard-placeholder">[ List ]</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Split Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="Dashboard-placeholder">
                [ You 55% / Partner 45% ]
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

    </PageContainer>
  )
    ;
}

export default DashboardPage;
