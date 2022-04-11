import "antd/dist/antd.css";
// import '../styles/globals.css';
import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/components/units/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
import { RecoilRoot } from "recoil";

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDs1YvmiRstnwx2wxeBVKeKHjFMdHXpyc",
    authDomain: "projectbean-54aa5.firebaseapp.com",
    projectId: "projectbean-54aa5",
    storageBucket: "projectbean-54aa5.appspot.com",
    messagingSenderId: "453409820013",
    appId: "1:453409820013:web:a7db1cc59d6696ccc31e64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
    const uploadLink = createUploadLink({
        uri: "http://backend06.codebootcamp.co.kr/graphql",
    });

    const client = new ApolloClient({
        link: ApolloLink.from([uploadLink]),
        // uri: "http://backend06.codebootcamp.co.kr/graphql",
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <RecoilRoot>
                <Global styles={globalStyles} />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </RecoilRoot>
        </ApolloProvider>
    );
}

export default MyApp;
