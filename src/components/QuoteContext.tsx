"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import QuoteModal from "@/components/QuoteModal";

type QuoteContextType = {
  openQuote: (machineName?: string) => void;
};

const QuoteContext = createContext<QuoteContextType>({
  openQuote: () => {},
});

export function useQuote() {
  return useContext(QuoteContext);
}

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledMachine, setPrefilledMachine] = useState("");

  const openQuote = (machineName?: string) => {
    if (machineName) setPrefilledMachine(machineName);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setPrefilledMachine("");
  };

  return (
    <QuoteContext.Provider value={{ openQuote }}>
      {children}
      <QuoteModal
        isOpen={isOpen}
        onClose={handleClose}
        prefilledMachine={prefilledMachine}
      />
    </QuoteContext.Provider>
  );
}
