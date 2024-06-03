import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { DateTime } from "luxon";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="grid h-full grid-cols-2 gap-8">
      <section id="left" className="flex flex-col justify-between">
        <section id="top" className="flex flex-col gap-4">
          <h1 className={"text-4xl font-semibold"}>
            <FontAwesomeIcon className="pr-4" icon={faUser}></FontAwesomeIcon>
            Charlie Thomson
          </h1>
          <p className="text-lg">I build things</p>
          <p className="text-lg">
            I work for&nbsp;
            <a
              href="https://velera.com"
              target="_blank"
              className="font-medium text-slate-500"
            >
              Velera
            </a>
            , primarily writing C# and React, currently focused on DevOps.&nbsp;
            <Link
              href={"#"}
              // href="/resume"
              className="font-medium text-slate-500 line-through"
              aria-disabled={true}
            >
              Read more about my experience
            </Link>
          </p>
          <p className="text-lg">
            I&apos;m working on some side projects as well 😁
          </p>
        </section>
        <section id="links" className="flex gap-4 justify-self-end">
          <a
            target="_blank"
            href="https://twitter.com/poetayetoe"
            className="flex size-12 items-center justify-center rounded-xl text-2xl text-slate-400 transition-all hover:bg-slate-300 hover:bg-opacity-40 hover:text-slate-600 "
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/charliecthomson/"
            className="flex size-12 items-center justify-center rounded-xl text-2xl text-slate-400 transition-all hover:bg-slate-300 hover:bg-opacity-40 hover:text-slate-600 "
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            target="_blank"
            href="mailto:charlie@thmsn.dev"
            className="flex size-12 items-center justify-center rounded-xl text-2xl text-slate-400 transition-all hover:bg-slate-300 hover:bg-opacity-40 hover:text-slate-600 "
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </section>
      </section>
      <section id="right" className="flex flex-col gap-8">
        <h3 className="text-right text-4xl font-extralight">Things</h3>
        <span className="w-full text-right text-lg font-extralight">
          hmmm... there doesn&apos;t seem to be anything here yet?
        </span>
        {/*<article className="rounded-lg bg-slate-100 px-4 py-2">*/}
        {/*  <h2 className="text-2xl font-light">On Modding</h2>*/}
        {/*  <div className="flex justify-between gap-8">*/}
        {/*    <span>*/}
        {/*      {DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)}*/}
        {/*    </span>*/}
        {/*    <span>4 minute read</span>*/}
        {/*  </div>*/}
        {/*</article>*/}
      </section>
    </main>
  );
}
