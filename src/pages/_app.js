// Vendors
import React from "react";
// Styles
import "../styles/globals.css";
// Layouts
import Page from "../layouts/Page";

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
