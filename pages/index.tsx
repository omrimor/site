import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const companies = [
  { name: "Microsoft", url: "https://www.microsoft.com/" },
  { name: "Cwt", url: "https://www.cwt.com/" },
  { name: "Healthy.io", url: "https://www.healthy.io/" },
  { name: "Lemonade", url: "https://www.lemonade.com/" },
  { name: "Balance", url: "https://www.balance.com/" },
];

const Home: NextPage = () => {
  return (
    <div className="bg-white dark:bg-slate-800 flex min-h-screen flex-col justify-center py-2">
      <Head>
        <title>Hi, I'm Omri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col justify-center px-12">
        <section>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white font-serif">
            Hi, I'm Omri
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-sans">
            I've been making websites for close to 15 years.
          </p>
        </section>
        <section className="mt-5">
          <h2 className="text-2xl text-slate-900 dark:text-white font-bold tracking-tight font-serif">
            Work
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-sans">
            I started off as a visual designer but have gradually been shifting
            towards development and code.
          </p>
          <p className="text-slate-500 dark:text-slate-400 font-sans break-words">
            I've had the opportunity to help folks at{" "}
            {companies.map((company) => (
              <a
                key={company.name}
                className="text-slate-900 dark:text-white hover:underline px-1"
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {company.name}
              </a>
            ))}
          </p>
        </section>
        <section className="mt-5">
          <h2 className="text-2xl text-slate-900 dark:text-white font-bold tracking-tight font-serif">
            Links
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-sans">
            Say hi at{" "}
            <a
              href="https://www.theschool.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            Or find me on{" "}
            <a
              href="https://www.theschool.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.theschool.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.theschool.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribble
            </a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
