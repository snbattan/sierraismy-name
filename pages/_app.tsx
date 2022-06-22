import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/global.css';

/*
 * const [isDarkTheme, setDarkTheme] = useState(false);
 * const invertTheme = () => setDarkTheme((wasDarkTheme) => !wasDarkTheme);
 */
const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Sierra Battan</title>
      <link rel="canonical" href="https://sierraismy.name" />
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="Sierra Battan's personal website. Visit to view her journey as a senior full-stack software engineer." name="description" />
      <meta content="#80b0f8" name="theme-color" />
      <meta name="keywords" content="Sierra Battan, Software Engineer Personal Website, Full-Stack Software Engineer, React Software Engineer, JavaScript Software Engineer" />
      <meta name="author" content="Sierra Battan" />
      <meta property="og:type" content="website" />
      <meta name="title" property="og:title" content="Sierra Battan" />
      <meta property="og:type" content="website" />
      <meta name="description" property="og:description" content="Sierra Battan" />
      <meta name="publish_date" property="og:publish_date" content="2019-10-31T14:45:00-0700" />
      <meta name="update_date" property="og:update_date" content="2021-12-03T05:00:00-0700" />
      <meta name="theme-color" content="#80b0f8" />
      <meta property="og:site_name" content="Personal Website" />
      <meta name="image" property="og:image" content="https://sierraismy.name/s-icon.svg" />
      <meta property="og:url" content="https://sierraismy.name" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content="@sierrabattan" />
      <meta property="twitter:title" content="Sierra Battan" />
      <meta property="twitter:description" content="Sierra Battan's personal website. Visit to view her journey as a senior full-stack software engineer." />
    </Head>
    <Header />
    <main className="bg-white tc-dnavy">
      {/* add color preference here: l, m, or d */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
);

export default App;
