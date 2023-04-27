"use client";

import { allCourses } from "@/.contentlayer/generated";
import CourseHeader from "@/components/course-header";
import { Mdx } from "@/components/markdown/mdx-components";
import { notFound, usePathname } from "next/navigation";
import React from "react";

interface CoursePageProps {}

async function getDocFromParams(slug: any) {
  const course = allCourses.find((course) => course.slug === slug);
  if (!course) {
    null;
  }
  return course;
}

const CoursePage = async ({}: CoursePageProps) => {
  const pathName = usePathname();
  const course = await getDocFromParams(pathName);

  if (!course) {
    notFound();
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <CourseHeader title={course.title} text={course.description} />
        <Mdx code={course.body.code} />
        <hr className="my-4 md:my-6" />
        {/* <DocsPager doc={doc} /> */}
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          {/* <DashboardTableOfContents toc={toc} /> */}
          table of contents
        </div>
      </div>
    </main>
  );
};

export default CoursePage;
