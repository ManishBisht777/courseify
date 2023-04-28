import { DcosConfig } from "@/types";

export const docsConfig: DcosConfig = {
  mainNav: [
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Documentation",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Installation",
          href: "/docs",
        },
        {
          title: "Getting started",
          href: "/docs/getting-started",
        },
      ],
    },
    {
      title: "Documentation",
      items: [
        {
          title: "Components",
          href: "/docs/components",
        },
      ],
    },
  ],
};
