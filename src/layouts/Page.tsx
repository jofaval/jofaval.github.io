// Vendors
import React from "react";
// Components
import Head from "next/head";
// Layouts
import HeaderTabsList from "./HeaderTabs";
import Sidebar from "./Sidebar";

const Page: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <div className="page__container">
    <Head>
      <title>jofaval</title>
      <meta
        name="description"
        content="Web Software Engineer and Data Science beginner based in Valencia"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <HeaderTabsList />
    <Sidebar />

    <div className="page">
      <div className="page__content">{children}</div>
    </div>
  </div>
);

export default Page;
