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
    className: `link text-decoration-underline color-blue flex-initial flex span.home-page__main-link`,
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
      <div className="home-page__main-links flex gap-0.5">
        {mainHeaderLinks?.map(renderMainLink)}
      </div>
    </div>
  );

const HomePage: React.FC = () => {
  return (
    <div className="home-page__container">
      <div className="home-page">
        <header className="home-page__header">
          <h1 className="home-page__title text-2xl">Pepe Fabra Valverde</h1>
          <h2 className="home-page__subtitle text-lg">Software Engineer</h2>
        </header>
        <main className="home-page__content">
          <p className="home-page__description">
            Welcome to my portfolio page, it's main focus is to describe my
            journey, experience and skillset as a web and software developer.
          </p>

          <HomeMainLinks />
        </main>
      </div>
    </div>
  );
};

export default HomePage;
