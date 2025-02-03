"use client";
import { MantineProvider } from "@mantine/core";
import { ReactNode } from "react";
import "@mantine/core/styles.css";
import { ToastContainer } from "react-toastify";
import { MantineThemeConfig } from "@/config/theme/ThemeConfig";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
      <MantineProvider theme={MantineThemeConfig}>
          <ToastContainer />
          {children}
      </MantineProvider>
  );
}
