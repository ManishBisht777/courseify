import { allCourses } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import React from "react";

interface CoursePageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams(params: any) {
  const slug = params.slug?.join("/") || "";
  const course = allCourses.find((course) => course.slugAsParams === slug);

  if (!course) {
    null;
  }

  return course;
}

const CoursePage = async ({ params }: CoursePageProps) => {
  const course = await getDocFromParams(params);

  if (!course) {
    notFound();
  }

  return (
    <div>
      Docs page
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
};

export default CoursePage;
