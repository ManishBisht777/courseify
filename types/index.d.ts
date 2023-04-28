import { Icons } from "@/components/Icons";

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type NavbarConfig = {
  mainNav: MainNavItem[];
};

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  icon?: keyof typeof Icons;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: NavLink[];
    }
);

export type CourseConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};


export type DcosConfig={
  mainNav:MainNavItem[];
  sidebarNav:SidebarNavItem[];
}