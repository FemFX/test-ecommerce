"use client";
import { ThemeProvider } from "@gravity-ui/uikit";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Provider;
