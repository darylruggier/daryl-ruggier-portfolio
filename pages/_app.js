import { ThemeProvider } from "next-themes";
import "../styles/globals.scss";
import "react-notion-x/src/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
