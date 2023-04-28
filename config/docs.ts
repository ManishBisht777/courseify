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
          title: "Introduction",
          href: "/docs",
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
