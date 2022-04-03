import "antd/dist/antd.css";
import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
// import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/libraries/styles/globalstyles";

function MyApp({ Component, pageProps }: AppProps) {
    const client = new ApolloClient({
        uri: "http://backend06.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <Global styles={globalStyles} />
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;