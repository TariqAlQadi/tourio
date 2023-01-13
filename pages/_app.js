import Header from "@/components/Header";
import GlobalStyle from "../styles";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Header />
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
