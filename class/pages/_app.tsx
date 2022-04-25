import "antd/dist/antd.css";
// import '../styles/globals.css';
import { AppProps } from "next/app";
import Layout from "../src/components/units/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";

import ApolloSetting from "../src/components/commons/apollo";
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
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9d99a2f189c81d29d915f1ce22b73df7"
        ></script>
      </Head> */}
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}
// <Recoilroot>를 함으로써 나머지 폴더에서도 편하게 리코일루트를 편하게 저장해서 쓸수있다.

export default MyApp;
