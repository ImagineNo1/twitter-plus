import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TweetContextProvider } from "../context/tweetsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TweetContextProvider>
      <Component {...pageProps} />
    </TweetContextProvider>
  );
}
