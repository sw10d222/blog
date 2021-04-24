import "styles/index.scss";
import "react-toggle/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/agate.css";
import "nprogress/nprogress.css";
import { SWRConfig } from "swr";
import { ThemeProvider } from "context/theme-context";
import Router from "next/router";
import Nprogress from "nprogress";

Router.onRouteChangeStart = (url) => {
  console.log(url);
  Nprogress.start();
};

Router.onRouteChangeComplete = (url) => {
  Nprogress.done();
};
Router.onRouteChangeError = (url) => {
  Nprogress.done();
};
const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 60000,
        fetcher,
        onError: (error, key) => {
          if (error.status !== 403 && error.status !== 404) {
            // We can send the error to Sentry,
            // or show a notification UI.
            // alert("Алдаа");
          }
        },
      }}
    >
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
