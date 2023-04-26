import { Icons } from "@/components/Icons";
import MainNav from "@/components/layout/MainNav";
import { navbarConfig } from "@/config/navbar";
import Link from "next/link";
import React from "react";

interface CourseLayoutProps {
  children: React.ReactNode;
}

const CourseLayout = ({ children }: CourseLayoutProps) => {
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={navbarConfig.mainNav} />
          {/* <DocsSidebarNav items={docsConfig.sidebarNav} /> */}
          {/* </MainNav> */}
          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <div className="flex-1 sm:grow-0">
              {/* <DocsSearch /> */}
              Search
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
    </>
  );
};

export default CourseLayout;
