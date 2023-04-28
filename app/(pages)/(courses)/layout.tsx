import { Icons } from "@/components/Icons";
import { Footer } from "@/components/layout/Footer";
import MainNav from "@/components/layout/MainNav";
import { SidebarNav } from "@/components/layout/SidebarNav";
import { DocsSearch } from "@/components/search";
import { courseConfig } from "@/config/course";
import Link from "next/link";
import React from "react";

interface CourseRootLayoutProps {
  children: React.ReactNode;
}

const CourseRootLayout = ({ children }: CourseRootLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={courseConfig.mainNav}>
            <SidebarNav items={courseConfig.sidebarNav} />
          </MainNav>
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0">
              <DocsSearch />
            </div>
            <nav className="flex space-x-4">
              <Link href="/" target="_blank" rel="noreferrer">
                <Icons.gitHub className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1">{children}</div>
      <Footer className="border-t" />
    </div>
  );
};

export default CourseRootLayout;
