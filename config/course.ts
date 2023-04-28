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
          href: "/courses/js",
        },
        {
          title: "Basics",
          href: "/courses/js/basics",
        },
        {
          title: "Intermediate",
          href: "/courses/js/basics",
          disabled: true,
        },
        {
          title: "Advance",
          href: "/courses/js/basics",
          disabled: true,
        },
      ],
    },
  ],
};
