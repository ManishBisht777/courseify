import { allPreps } from "@/.contentlayer/generated";
// import { DocsHeader } from "@/components/docs-header";
import { Mdx } from "@/components/markdown/mdx";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string[];
  };
};

async function getDocFromParams(params: any) {
  const slug = params.slug?.join("/") || "";

  const prep = allPreps.find((prep) => prep.slugAsParams === slug);

  if (!prep) {
    null;
  }

  return prep;
}

export default async function page({ params }: Props) {
  const prep = await getDocFromParams(params);

  if (!prep) {
    notFound();
  }

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        {/* <DocsHeader title={batch.title} text={batch.description} /> */}
        <Mdx code={prep.body.code} />
        <hr className="my-4 md:my-6" />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          table of contents
        </div>
      </div>
    </main>
  );
}
