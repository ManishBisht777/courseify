import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import Link from "next/link";
import React from "react";
import { Icons } from "../Icons";

interface MobileNavProps {
  items: NavItem[];
  children?: React.ReactNode;
}

const MobileNav = ({ items, children }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "animate-in slide-in-from-bottom-80 fixed inset-0 top-16 z-50 grid grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md md:hidden"
      )}
    >
      <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo />
          <span className="font-bold">Courseify</span>
        </Link>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium text-foreground/60 hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        {children}
      </div>
    </div>
  );
};

export default MobileNav;
