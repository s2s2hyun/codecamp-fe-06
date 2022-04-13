import "antd/dist/antd.css";
// import '../styles/globals.css';
import { AppProps } from "next/app";
import Layout from "../src/components/units/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { ApolloProvider } from "@apollo/client";
import ApolloSetting from "../src/components/units/commons/apollo";
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
    return (
        <RecoilRoot>
            <ApolloSetting>
                <Global styles={globalStyles} />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloSetting>
        </RecoilRoot>
    );
}

export default MyApp;
