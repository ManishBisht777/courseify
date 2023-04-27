import { CourseConfig } from "@/types";

export const courseConfig: CourseConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs",
    },
    {
      title: "Couses",
      href: "/courses",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/courses",
        },
      ],
    },
    {
      title: "Javascript",
      items: [
        {
          title: "Introduction",
          href: "/courses/js-zero-to-hero",
        },
        {
          title: "Basics",
          href: "/courses/js-zero-to-hero/basics",
        },
        {
          title: "Components",
          href: "/docs/documentation/components",
          disabled: true,
        },
        {
          title: "Code Blocks",
          href: "/docs/documentation/code-blocks",
          disabled: true,
        },
        {
          title: "Style Guide",
          href: "/docs/documentation/style-guide",
          disabled: true,
        },
        {
          title: "Search",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Blog",
      items: [
        {
          title: "Introduction",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Build your own",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Writing Posts",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
};
