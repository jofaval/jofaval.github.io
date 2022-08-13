// Vendors
import React from "react";
// Layouts
import Page from "../layouts/Page";
import ErrorBoundary from "../libraries/error-boundary";
// Styles
import "../styles/globals.css";
import "../styles/home.page.css";

function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary
      fallbackComponent={
        <div className="error__container">
          Something went really wrong... Sorry!
        </div>
      }
    >
      <Page>
        <Component {...pageProps} />
      </Page>
    </ErrorBoundary>
  );
}

export default MyApp;
