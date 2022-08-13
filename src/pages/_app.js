// Vendors
import React from "react";
// Layouts
import Page from "../layouts/Page";
// Styles
import "../styles/globals.css";
import "../styles/home.page.css";

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
