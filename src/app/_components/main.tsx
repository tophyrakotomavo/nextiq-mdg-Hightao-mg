"use client";

import { SessionProvider } from "next-auth/react";
import { type ReactNode } from "react";

export const Main = ({ children }: { children: ReactNode }) => (
  <SessionProvider>
    <main>{children}</main>
  </SessionProvider>
);
