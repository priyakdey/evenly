// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright (C) 2025 Priyak Dey

import {
  Card as ShadCNCard,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card.tsx";
import React from "react";
import "./Card.css";

interface CardContainerPropsType {
  title: string;
  description: string;
  children: React.ReactNode;
}

function Card({
                title,
                description,
                children
              }: CardContainerPropsType) {
  return (
    <ShadCNCard className="Card">
      <CardHeader className="Card-header">
        <CardTitle className="Card-title">{title}</CardTitle>
        <CardDescription className="Card-description">
          {description}
        </CardDescription>
      </CardHeader>
      {children}
    </ShadCNCard>
  );
}

export default Card;
