// Vendors
import React from "react";
// Components
import Image from "next/image";
import Link from "next/link";

const mainHeaderLinks = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "github/jofaval",
    href: "https://github.com/jofaval",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png",
  },
  {
    label: "/in/jofaval",
    href: "https://linkedin.com/in/jofaval",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
  },
];

const ICON_IMG_SIZE = 25;

const renderMainLink: (value: any, index: number) => JSX.Element = (
  { icon = null, href, label },
  index
) => {
  const linkProps: { [key: string]: any } = {
    className: [
      "link",
      "text-decoration-underline",
      "color-blue",
      "flex-initial",
      "flex",
      "gap-0.5",
      "home-page__main-link",
      "underline",
      "text-zinc-900",
    ].join(" "),
  };
  if (href.startsWith("http")) {
    linkProps["target"] = "_blank";
  }

  return (
    <Link href={href} key={index}>
      <a {...linkProps}>
        {icon && (
          <Image src={icon} width={ICON_IMG_SIZE} height={ICON_IMG_SIZE} />
        )}
        <span className="home-page__main-link__content">{label}</span>
      </a>
    </Link>
  );
};

const HomeMainLinks: React.FC = () =>
  !Array.isArray(mainHeaderLinks) ? null : (
    <div className="home-page__main-links__container p-1">
      <div className="space-y-1">&nbsp;</div>
      <div className="home-page__main-links flex justify-center gap-3">
        {mainHeaderLinks?.map(renderMainLink)}
      </div>
      <div className="space-y-1">&nbsp;</div>
    </div>
  );

const HomePage: React.FC = () => {
  return (
    <div className="home-page__container text-justify">
      <div className="home-page">
        <header className="home-page__header">
          <h1 className="home-page__title text-4xl font-bold">
            Pepe <span className="hidden md:inline-block">(José)</span> Fabra
            Valverde
          </h1>
          <h2 className="home-page__subtitle text-lg">
            <span className="text-neutral-500">(he/him/his)</span> Software
            Engineer
          </h2>
        </header>
        <main className="home-page__content container m-auto">
          <p className="home-page__description text-center">
            Welcome to my portfolio page, it's main focus is to describe my
            journey, experience and skillset as a web and software developer.
          </p>

          <HomeMainLinks />

          <div className="home-page__whoami">
            <h3 className="home-page__whoami__title text-2xl font-bold">
              Who am I?
            </h3>
            <p className="home-page__whoami__content">
              I'm a developer, currently software engineering as my day (and
              only) job.
              <br />
              <br />
              I've studied Computer Networks and Protocols, Computer's
              Architecture, the State and Fundamentals of IT, Software
              development, Web Development and, as of, recently a masters in
              Artificial Intelligence and Big Data.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
