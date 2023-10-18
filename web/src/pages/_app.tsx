import { Navbar } from "@/components/navbar/navbar";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";

import { Client, Provider, cacheExchange, fetchExchange } from "urql";
import { SelectedPage } from "./shared/types";
import { Footer } from "@/components/navigation/footer";

const client = new Client({
  url: "http://127.0.0.1:8000/graphql",
  exchanges: [cacheExchange, fetchExchange],
});

export default function App({ Component, pageProps }: AppProps) {
  const route = useRouter();
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  return (
   
      <Provider value={client}>
        <ChakraProvider>
          <Navbar
            isTopOfPage={true}
            setSelectedPage={setSelectedPage}
            selectedPage={selectedPage}
            children={undefined}
          />
          <Component {...pageProps} />
          <Footer/>
        </ChakraProvider>
      </Provider>
  );
}
