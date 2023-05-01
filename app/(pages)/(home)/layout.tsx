import { Footer } from "@/components/layout/Footer";
import MainNav from "@/components/layout/MainNav";
import { buttonVariants } from "@/components/ui/button";
import { navbarConfig } from "@/config/navbar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface MarketingLayout {
  children: React.ReactNode;
}

export default async function MarketingLayout({ children }: MarketingLayout) {
  return (
    <div className="min-h-screen flex-col flex">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={navbarConfig.mainNav} />
          <nav>
            <Link
              className={cn(buttonVariants({ size: "sm" }), "px-4")}
              href="/"
            >
              Login
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
