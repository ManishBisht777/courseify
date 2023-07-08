// import { CommandMenu } from "@/components/command-menu";
import { Icons } from "@/components/icons";
import MainNav from "@/components/layout/main-nav";
import { DocsSidebarNav } from "@/components/layout/sidebar-nav";
import { prepConfig } from "@/config/prep";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BatchRootLayoutProps {
  children: React.ReactNode;
}

const CourseRootLayout = ({ children }: BatchRootLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <MainNav items={prepConfig.mainNav}>
            <DocsSidebarNav items={prepConfig.sidebarNav} />
          </MainNav>

          <div className="flex flex-1 items-center space-x-4 sm:justify-end">
            <nav className="flex space-x-4 items-center">
              {/* <div className=" px-3 hidden md:flex">
                <CommandMenu />
              </div> */}
              <Link href="/" target="_blank" rel="noreferrer">
                <Icons.gitHub className="h-7 w-7" />
                <span className="sr-only">GitHub</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <div className="container flex-1 md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r">
          <ScrollArea className="h-full py-6 pl-8 pr-6 lg:py-8">
            <DocsSidebarNav items={prepConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  );
};

export default CourseRootLayout;
