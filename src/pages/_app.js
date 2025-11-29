import { ColorContextProvider } from "@/context/ColorContext";
import "@/styles/globals.css";

import Head from "next/head";
import { Onest } from "next/font/google"
import Chatbot from "@/components/Chatbot";

const onest = Onest({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <ColorContextProvider>
      <main className={`${onest.className} relative`}>
        <Head>
          <title>
            PARE
          </title>
        </Head>
        <Component {...pageProps} />

        <Chatbot />
      </main>
    </ColorContextProvider>
  );
}
