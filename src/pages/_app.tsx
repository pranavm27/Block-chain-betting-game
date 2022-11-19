import "../styles/global.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import { MetaMaskProvider } from "../hooks/useMeta";
import { provider } from "web3-core";

function getLibrary(provider: provider, connector: any) {
  return new Web3(provider);
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider enableSystem={true} attribute="class">
    <Web3ReactProvider getLibrary={getLibrary}>
      <MetaMaskProvider>
        <Component {...pageProps} />
      </MetaMaskProvider>
    </Web3ReactProvider>
  </ThemeProvider>
);

export default MyApp;
