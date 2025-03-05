'use client';

import { JSX } from "react";

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardContent({ children, className }: CardContentProps): JSX.Element {
  return <div className={`mt-2 ${className}`}>{children}</div>;
}