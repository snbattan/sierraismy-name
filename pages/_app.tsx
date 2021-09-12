import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/global.css';

/*
 * const [isDarkTheme, setDarkTheme] = useState(true);
 * const invertTheme = () => setDarkTheme((wasDarkTheme) => !wasDarkTheme);
 */
const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Sierra Battan</title>
    </Head>
    <Header />
    <main className="bg-white tc-black">
      {/* add color preference here: l, m, or d */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </main>
    {/* <Footer /> */}
  </>
);

export default App;
