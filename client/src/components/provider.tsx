"use client";
import { ThemeProvider } from "@gravity-ui/uikit";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme="light">{children}</ThemeProvider>;
};

export default Provider;
