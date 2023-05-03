import { allDocs } from "@/.contentlayer/generated";
import CourseHeader from "@/components/course-header";
import { Mdx } from "@/components/markdown/mdx-components";
import { notFound, usePathname } from "next/navigation";
import React from "react";

interface CoursePageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams(params: any) {
  const slug = params.slug?.join("/") || "";
  const doc = allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) {
    null;
  }

  return doc;
}

export async function generateStaticParams(): Promise<
  CoursePageProps["params"][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split("/"),
  }));
}

const CoursePage = async ({ params }: CoursePageProps) => {
  const doc = await getDocFromParams(params);

  if (!doc) {
    notFound();
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <CourseHeader title={doc.title} text={doc.description} />
        <Mdx code={doc.body.code} />
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
