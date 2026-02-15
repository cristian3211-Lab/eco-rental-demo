"use client";

import { useQuote } from "@/components/QuoteContext";
import type { ReactNode } from "react";

export default function QuoteButton({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { openQuote } = useQuote();

  return (
    <button onClick={() => openQuote()} className={`cursor-pointer ${className}`}>
      {children}
    </button>
  );
}
