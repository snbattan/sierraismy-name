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
        <link href="s-icon.svg" rel="shortcut icon" />
        <link href="s-icon.svg" rel="icon" />
        <link href="s-icon.svg" rel="apple-touch-icon" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css2?family=Shadows Into Light Two&family=Montserrat:wght@200" rel="stylesheet" type="text/css" />
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Sierra Battan's personal website" name="description" />
        <meta content="#80b0f8" name="theme-color" />
        <meta name="keywords" content="Sierra Battan, Software Engineer Personal Website, Full-Stack Software Engineer" />
        <meta name="author" content="Sierra Battan" />
        <meta property="og:type" content="website" />
        <meta name="title" property="og:title" content="Sierra Battan" />
        <meta name="description" property="og:description" content="Sierra Battan's personal website. Visit to view her journey as a full-stack, cloud platform Software Engineer." />
        <meta property="og:site_name" content="Personal Website" />
        <meta name="image" property="og:image" content="https://sierraismy.name/s-icon.svg" />
        <meta property="og:url" content="https://sierraismy.name" />
        <meta property="og:image" content="/s-icon.svg" />
        <meta name="publish_date" property="og:publish_date" content="2019-10-31T14:45:00-0700" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:creator" content="@sierrabattan" />
        <meta property="twitter:title" content="Sierra Battan" />
        <meta property="twitter:description" content="Sierra Battan's personal website. Visit to view her journey as a full-stack, cloud platform Software Engineer." />
        <title>Sierra Battan</title>
        <link rel="canonical" href="https://sierraismy.name" />
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
