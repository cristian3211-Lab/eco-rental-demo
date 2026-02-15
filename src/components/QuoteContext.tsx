"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import QuoteModal from "@/components/QuoteModal";

const QuoteContext = createContext<{ openQuote: () => void }>({
  openQuote: () => {},
});

export function useQuote() {
  return useContext(QuoteContext);
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <QuoteContext.Provider value={{ openQuote: () => setIsOpen(true) }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </QuoteContext.Provider>
  );
}
