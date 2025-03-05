'use client';

import { JSX } from "react";

type CardTitleProps = {
  children: React.ReactNode;
  className?: string;
};


export function CardTitle({ children, className }: CardTitleProps): JSX.Element {
  return <h2 className={`text-xl font-bold text-center text-gray-700 ${className}`}>{children}</h2>;
}
