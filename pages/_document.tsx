import Document, {
  DocumentContext, Html, Head, Main, NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static getInitialProps = async (ctx: DocumentContext) => Document.getInitialProps(ctx)

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="https://sierraismy.name/s-icon.svg" />
          <link rel="canonical" href="https://sierraismy.name" />
          <link rel="icon" href="https://sierraismy.name/s-icon.svg" />
          <link rel="shortcut icon" href="https://sierraismy.name/s-icon.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Shadows Into Light Two&family=Montserrat:wght@200&display=swap" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@100&family=Italiana&family=Julius+Sans+One&family=Lexend+Deca:wght@200&family=Montserrat:wght@200&family=Poiret+One&family=Shadows+Into+Light+Two&display=swap" rel="stylesheet" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" crossOrigin="true" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
