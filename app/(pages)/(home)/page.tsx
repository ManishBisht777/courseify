import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/images/home.svg";

export default function Home() {
  return (
    <>
      <section className="space-y-6 md:pt-2 lg:py-4 min-h-screen">
        <div className="container flex max-w-[64rem] flex-col gap-4 text-center justify-center items-center">
          <Image src={hero} width={250} alt="Hero image" priority />
          <h1 className="text-2xl font-bold text-foreground leading-[1.1] tracking-tighter sm:text-3xl md:text-5xl">
            What&apos;s going on here?
          </h1>
          <p className="max-w-[42rem] md:text-lg leading-normal text-slate-700 sm:text-lg sm:leading-8">
            I&apos;m building a web app with Next.js 13 and open sourcing
            everything. Follow along as we figure this out together.
          </p>
          <div className="flex gap-4 mt-3">
            <Link href="/auth/login" className={cn(buttonVariants(), "px-4")}>
              Get Started
            </Link>
            <Link
              href="https://github.com/ManishBisht777/megatron"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "px-4")}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      <section id="features" className="space-y-6 md:pt-2 lg:py-4 ">
        <div className="container flex max-w-[64rem] flex-col gap-4 text-center justify-center items-center">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-foreground text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Features
            </h2>
            <p className="max-w-[42rem] md:text-lg leading-normal text-slate-700 sm:text-lg sm:leading-8">
              This project is an experiment to see how a modern app, with
              features like auth, subscriptions, API routes, and static pages
              would work in Next.js 13 app dir.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-6">
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                logo
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js 13</h3>
                  <p className="text-sm text-muted-foreground">
                    App dir, Routing, Layouts, Loading UI and API routes.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                logo
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js 13</h3>
                  <p className="text-sm text-muted-foreground">
                    App dir, Routing, Layouts, Loading UI and API routes.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                logo
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js 13</h3>
                  <p className="text-sm text-muted-foreground">
                    App dir, Routing, Layouts, Loading UI and API routes.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                logo
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js 13</h3>
                  <p className="text-sm text-muted-foreground">
                    App dir, Routing, Layouts, Loading UI and API routes.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                logo
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js 13</h3>
                  <p className="text-sm text-muted-foreground">
                    App dir, Routing, Layouts, Loading UI and API routes.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-2">
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                logo
                <div className="space-y-2">
                  <h3 className="font-bold">Next.js 13</h3>
                  <p className="text-sm text-muted-foreground">
                    App dir, Routing, Layouts, Loading UI and API routes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center">
          <h2 className="font-bold text-foreground text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Community
          </h2>
          <p className="max-w-[42rem] md:text-lg leading-normal text-slate-700 sm:text-lg sm:leading-8">
            Taxonomy is open source and powered by open source software. <br />{" "}
            The code is available on{" "}
            <div className="flex gap-4 mt-3 justify-center">
              <Link href="/auth/login" className={cn(buttonVariants(), "px-4")}>
                <Icons.star className="mr-2 w-4 " />
                Github Stars
              </Link>
              <Link
                href="https://github.com/ManishBisht777/megatron"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants(), "px-4")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="mr-2 w-4"
                >
                  <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                </svg>
                Discord
              </Link>
            </div>
          </p>
        </div>
      </section>
    </>
  );
}
