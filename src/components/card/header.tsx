'use client';

import { JSX } from "react";

type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardHeader({ children, className}: CardHeaderProps): JSX.Element {
  return <div className={`border-b pb-2 mb-2 text-lg font-semibold ${className}`}>{children}</div>;
}
