"use client";
import { ThemeProvider } from "@gravity-ui/uikit";
import { ReactNode } from "react";

const GravityProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme="light">{children}</ThemeProvider>;
};

export default GravityProvider;
