import {
  IconArrowNarrowRightDashed,
  IconBook,
  IconPlayerPlay,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" font-sans  ">
      <main className="container py-20 px-4 ">
        <Image
          src="/compass.png"
          alt="Annu Learns SQL"
          width={150}
          height={150}
        />
        <div className="   ">
          <h3 className=" text-3xl font-semibold  text-white">
            Annu's SQL Starter Pack
          </h3>
          <p className="mt-4 text-lg  text-neutral-400">
            A small crash course to learn SQL. I’ve added a few chapters to help
            you get started. This won’t cover complete SQL, just enough to give
            you a basic understanding.
          </p>
        </div>
        <div className="mt-10">
          <h4 className=" text-2xl font-semibold  text-white">Chapters</h4>
          <ul className="mt-4 text-lg  text-neutral-400 flex flex-col gap-2">
            <Link
              href="/chapters/how-to-think-about-database"
              className="border-2 border-neutral-800 p-4 flex items-center justify-between gap-2 rounded-lg hover:border-neutral-600 transition-colors"
            >
              <span className="flex items-center gap-3">
                <IconBook className="w-5 h-5" />
                How to think about database
              </span>
              <IconArrowNarrowRightDashed className="w-6 h-6" />
            </Link>
            <Link
              href="https://sqlbolt.com/"
              target="_blank"
              className="border-2 border-neutral-800 p-4 flex items-center justify-between gap-2 rounded-lg hover:border-neutral-600 transition-colors"
            >
              <span className="flex items-center gap-3">
                <IconBook className="w-5 h-5" />
                Understanding SQL via practice
              </span>
              <IconArrowNarrowRightDashed className="w-6 h-6" />
            </Link>
          </ul>
        </div>

        <div className="mt-10">
          <h4 className=" text-2xl font-semibold  text-white">Videos</h4>
          <p className="text-neutral-400 mt-2">
            I have added few videos of people describing how the work as
            business analysts looks like.
          </p>
          <ul className="mt-4 text-lg  text-neutral-400 flex flex-col gap-2">
            <Link
              href="https://youtu.be/pLon_Mit7sk?si=l5ILBMHdXyMftgwp"
              target="_blank"
              className="border-2 border-neutral-800 p-4 flex items-center justify-between gap-2 rounded-lg hover:border-neutral-600 transition-colors"
            >
              <span className="flex items-center gap-3">
                <IconPlayerPlay className="w-5 h-5" />
                Day in the life of a Business Analyst
              </span>
              <IconArrowNarrowRightDashed className="w-6 h-6" />
            </Link>
            <Link
              href="https://youtu.be/7-ayLOgrrcU?si=c3-05YybgrO_59YQ"
              target="_blank"
              className="border-2 border-neutral-800 p-4 flex items-center justify-between gap-2 rounded-lg hover:border-neutral-600 transition-colors"
            >
              <span className="flex items-center gap-3">
                <IconPlayerPlay className="w-5 h-5" />
                Roadmap of how I became a BA
              </span>
              <IconArrowNarrowRightDashed className="w-6 h-6" />
            </Link>
          </ul>
        </div>
      </main>
    </div>
  );
}
