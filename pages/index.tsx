import type { NextPage } from "next";
import Head from "next/head";

const companies = [
  { name: "Microsoft", url: "https://powerbi.microsoft.com/" },
  { name: "Cwt", url: "https://www.mycwt.com/" },
  { name: "Healthy.io", url: "https://healthy.io/" },
  { name: "Lemonade", url: "https://www.lemonade.com/" },
  { name: "Balance", url: "https://www.getbalance.com/" },
];

const links = [
  { name: "Email", url: "mailto:omrimorr@gmail.com" },
  { name: "Twitter", url: "https://twitter.com/omrimorr" },
  { name: "Github", url: "https://github.com/omrimor" },
  { name: "Dribble", url: "https://dribbble.com/omri" },
];

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 flex min-h-screen flex-col justify-center py-2">
      <Head>
        <title>Hi, I'm Omri | עמרי מור</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col justify-center px-12 lg:px-20">
        <section className="max-w-2xl">
          <h1 className="text-4xl font-medium text-stone-900 dark:text-white font-serif">
            Hi, I'm Omri 👋
          </h1>
          <p className="mt-3 text-stone-500 dark:text-stone-400 font-sans text-lg">
            I've been making websites for the last 12 years.
          </p>
        </section>
        <section className="mt-12 max-w-2xl">
          <h2 className="text-2xl text-stone-900 dark:text-white font-medium tracking-tight font-serif">
            Work
          </h2>
          <p className="mt-4 text-stone-500 dark:text-stone-400 font-sans text-lg">
            I'm a frontend developer (past product designer) with a passion for
            all things web, interaction and typography.
          </p>
          <p className="mt-3 text-stone-500 dark:text-stone-400 font-sans break-words text-lg">
            I've had the opportunity to help folks ship great experiences
            at&nbsp;
            {companies.map((company, index) => (
              <a
                key={company.name}
                className="text-stone-900 dark:text-white hover:dark:bg-white hover:dark:text-stone-900 hover:bg-stone-900 hover:text-white whitespace-nowrap mr-1 last:mr-0"
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.name}
                {index === companies.length - 1 ? "" : ","}
              </a>
            ))}
            &nbsp;and more.
          </p>
        </section>
        <section className="mt-12 max-w-2xl">
          <h2 className="text-2xl text-stone-900 dark:text-white font-medium tracking-tight font-serif">
            Links
          </h2>
          <p className="mt-3 text-stone-500 dark:text-stone-400 font-sans break-words text-lg">
            Find me on&nbsp;
            {links.map((link, index) => (
              <a
                key={link.name}
                className="text-stone-900 dark:text-white hover:dark:bg-white hover:dark:text-stone-900 hover:bg-stone-900 hover:text-white whitespace-nowrap mr-1 last:mr-0"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
                {index === links.length - 1 ? "" : ","}
              </a>
            ))}
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
