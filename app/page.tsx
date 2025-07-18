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

export default function Page() {
  return (
    <section>
      <h1 className="text-4xl font-medium font-serif">Hi, I'm Omri 👋</h1>
      <p className="mt-3 text-stone-500 dark:text-stone-400 text-lg">
        I've been making websites for the last 12 years.
        <br /> I'm a frontend developer with a passion for all things web,
        interaction and typography.
      </p>
      <div className="mt-12">
        <h2 className="text-2xl font-medium tracking-tight font-serif">Work</h2>
        <p className="mt-3 text-stone-500 dark:text-stone-400 text-lg">
          I started as a product designer and later on transitioned into
          practicing user centric design thinking in development and code.
        </p>
        <p className="mt-2 text-stone-500 dark:text-stone-400 text-lg">
          I've had the opportunity to help people ship great experiences at{" "}
          {companies.map((company, index) => (
            <a
              key={company.name}
              className="inline-block text-stone-900 dark:text-white hover:dark:bg-white hover:dark:text-stone-900 hover:bg-stone-900 hover:text-white mr-1 last:mr-0"
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {company.name}
              {index === companies.length - 1 ? "" : ","}
            </a>
          ))}{" "}
          and more.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-medium tracking-tight font-serif">
          Links
        </h2>
        <p className="mt-3 text-stone-500 dark:text-stone-400 break-words text-lg">
          Find me on&nbsp;
          {links.map((link, index) => (
            <a
              key={link.name}
              className="inline-block text-stone-900 dark:text-white hover:dark:bg-white hover:dark:text-stone-900 hover:bg-stone-900 hover:text-white whitespace-nowrap mr-1 last:mr-0"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.name}
              {index === links.length - 1 ? "" : ","}
            </a>
          ))}
        </p>
      </div>
    </section>
  );
}
