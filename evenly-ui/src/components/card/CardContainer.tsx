// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card.tsx";
import React from "react";
import "./CardContainer.css";

interface CardContainerPropsType {
  title: string;
  description: string;
  children: React.ReactNode;
}

function CardContainer({
                         title,
                         description,
                         children
                       }: CardContainerPropsType) {
  return (
    <Card className="Card">
      <CardHeader className="Card-header">
        <CardTitle className="Card-title">{title}</CardTitle>
        <CardDescription className="Card-description">
          {description}
        </CardDescription>
      </CardHeader>
      {children}
    </Card>
  );
}

export default CardContainer;
