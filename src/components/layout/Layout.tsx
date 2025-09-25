import type { ReactNode  } from "react";
import { BackgroundRippleEffect } from "../ui/background-ripple-effect";
import { NavbarDemo } from "../Navbar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen  bg-black">
      {/* Background Ripple Effect - Global across all pages */}
      <BackgroundRippleEffect />
      
      {/* Navigation */}
      <NavbarDemo />
      
      {/* Page Content */}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};