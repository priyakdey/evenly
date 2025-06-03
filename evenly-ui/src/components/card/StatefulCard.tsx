// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import Card from "@/components/card/Card.tsx";
import Spinner from "@/components/spinner/Spinner.tsx";
import { Button } from "@/components/ui/button.tsx";
import { CardContent, CardFooter } from "@/components/ui/card.tsx";
import { RefreshCcwIcon } from "lucide-react";
import React from "react";
import "./StatefulCard.css";

interface StatefulCardPropsType {
  title: string;
  description: string;
  isLoading: boolean;
  isError: boolean;
  renderContent: () => React.ReactNode;
  renderFooter: () => React.ReactNode;
}

function StatefulCard({
                        title,
                        description,
                        isLoading,
                        isError,
                        renderContent,
                        renderFooter
                      }: StatefulCardPropsType) {
  let content;
  if (isLoading) {
    content = <Spinner />;
  } else if (isError) {
    content = (
      <Button variant="ghost" onClick={console.log} className="Card-error">
        <RefreshCcwIcon size={50} color="#EC5A5E" />
      </Button>
    );
  } else {
    content = renderContent();
  }

  return (
    <Card title={title} description={description}>
      <CardContent className="Card-content">{content}</CardContent>
      <CardFooter className="Card-footer">{renderFooter()}</CardFooter>
    </Card>
  );
}

export default StatefulCard;
