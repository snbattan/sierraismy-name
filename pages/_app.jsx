import Head from 'next/head';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const invertTheme = () => setDarkTheme((wasDarkTheme) => !wasDarkTheme);

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" href="s-icon.svg" />
        <link rel="canonical" href="https://sierraismy.name" />
        <link rel="icon" href="https://sierraismy.name/s-icon.svg" />
        <link rel="shortcut icon" href="https://sierraismy.name/s-icon.svg" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
        <link rel="stylesheet" type="text/css" display="swap" href="https://fonts.googleapis.com/css2?family=Shadows Into Light Two&family=Montserrat:wght@200" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Sierra Battan" />
        <meta name="description" property="og:description" content="Sierra Battan's personal website. Visit to view her journey as a senior full-stack software engineer." />
        <meta name="image" property="og:image" content="https://sierraismy.name/s.png" />
        <meta name="keywords" content="Sierra Battan, Software Engineer Personal Website, Full-Stack Software Engineer, React Software Engineer, JavaScript Software Engineer" />
        <meta name="publish_date" property="og:publish_date" content="2019-10-31T14:45:00-0700" />
        <meta name="theme-color" content="#80b0f8" />
        <meta property="og:site_name" content="Personal Website" />
        <meta name="title" property="og:title" content="Sierra Battan" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content="@sierrabattan" />
        <meta property="twitter:title" content="Sierra Battan" />
        <meta property="twitter:description" content="Sierra Battan's personal website. Visit to view her journey as a senior full-stack software engineer." />
        <meta property="og:type" content="website" />
        <meta name="update_date" property="og:update_date" content="2021-12-03T05:00:00-0700" />
        <meta property="og:url" content="https://sierraismy.name" />
        <title>Sierra Battan</title>
      </Head>
      <main className={isDarkTheme ? 'dark' : 'light'}>
        <Header invertTheme={invertTheme} />
        <article className="center">
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </article>
        <Footer />
      </main>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  pageProps: PropTypes.shape().isRequired,
};

export default App;
