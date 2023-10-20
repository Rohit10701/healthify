'use client';
import { SessionProvider } from "next-auth/react";
import { Toaster } from "./ui/toaster";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <SessionProvider>
        {children}
        <Toaster />
      </SessionProvider>
  )
}

export default Layout