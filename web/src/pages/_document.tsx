import { Navbar } from "@/components/navbar/navbar";
import { ColorModeScript, theme } from "@chakra-ui/react";
import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";
import { useState } from "react";
import { SelectedPage } from "./shared/types";

export default function Document() {
  const route = useRouter();
  const [selectedPage, setSelectedPage] = useState(SelectedPage.Home);
  return (
    <>
      <Navbar
        isTopOfPage={true}
        setSelectedPage={setSelectedPage}
        selectedPage={selectedPage}
        children={undefined}
      />
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  );
}
