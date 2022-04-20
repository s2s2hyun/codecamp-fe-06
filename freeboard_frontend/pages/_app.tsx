import "antd/dist/antd.css";
import "../styles/globals.css";
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/libraries/styles/globalstyles";
import { createUploadLink } from "apollo-upload-client";

// const firebaseConfig = {
//     apiKey: "AIzaSyDDs1YvmiRstnwx2wxeBVKeKHjFMdHXpyc",
//     authDomain: "projectbean-54aa5.firebaseapp.com",
//     projectId: "projectbean-54aa5",
//     storageBucket: "projectbean-54aa5.appspot.com",
//     messagingSenderId: "453409820013",
//     appId: "1:453409820013:web:a7db1cc59d6696ccc31e64",
// };

// export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
    const uploadLink = createUploadLink({
        uri: "http://backend06.codebootcamp.co.kr/graphql",
    });

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <Global styles={globalStyles} />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    );
}

export default MyApp;
