import { PrepConfig } from "@/types";

export const prepConfig: PrepConfig = {
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/batch",
        },
      ],
    },
    {
      title: "Revision",
      items: [
        {
          title: "Html",
          items: [
            {
              title: "baisc",
              href: "/batch/learn/html/basic",
            },
          ],
        },
        {
          title: "Javascript",
          items: [
            {
              title: "basic",
              href: "/batch/learn/js/intro",
            },
            {
              title: "DOM",
              href: "/batch/learn/js/dom",
            },
            {
              title: "Google Keep",
              href: "/batch/learn/js/google-keep",
            },
            {
              title: "Wack a mole",
              href: "/batch/learn/js/wack-a-mole",
            },
            {
              title: "Github Wrapper",
              href: "/batch/learn/js/github-wrapper",
            },
          ],
        },
        {
          title: "CSS",
          items: [
            {
              title: "basic",
              href: "/batch/learn/css/basic",
            },
            {
              title: "Flex",
              href: "/batch/learn/css/flex",
            },
            {
              title: "Grid",
              href: "/batch/learn/css/grid",
            },
          ],
        },
      ],
    },
    {
      title: "Machine Coding",
      items: [
        {
          title: "React js",
          items: [
            {
              title: "Fundamentals",
              href: "/batch/build/react/fundamentals",
            },
            {
              title: "Todo App",
              href: "/batch/build/react/todo",
            },
            {
              title: "Quiz App",
              href: "/batch/build/react/quiz",
            },
          ],
        },
      ],
    },
  ],
  mainNav: [
    {
      title: "about",
      href: "/",
    },
    {
      title: "join",
      href: "/batch",
    },
    {
      title: "docs",
      href: "/docs",
    },
  ],
};
