"use client";

import { allCourses } from "@/.contentlayer/generated/index.mjs";
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
    <div>
      <h1>Todo: add multiple files to test </h1>
      Docs page
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <Mdx code={course.body.code} />
    </div>
  );
};

export default CoursePage;
