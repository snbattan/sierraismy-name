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
          <link href="s-icon.svg" rel="shortcut icon" />
          <link href="s-icon.svg" rel="icon" />
          <link href="s-icon.svg" rel="apple-touch-icon" />
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Shadows Into Light Two&family=Montserrat:wght@200&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" crossOrigin="true" />
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="Sierra Battan's personal website" name="description" />
          <meta content="#80b0f8" name="theme-color" />
          <meta name="keywords" content="Sierra Battan, Software Engineer" />
          <meta name="author" content="Sierra Battan" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Sierra Battan" />
          <meta property="og:description" content="Sierra Battan" />
          <meta property="og:site_name" content="Personal Website" />
          <meta property="og:image" content="s-icon.svg" />
          <meta property="og:url" content="https://sierraismy.name" />
          <meta property="og:image" content="/s-icon.svg" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:creator" content="@sierrabattan" />
          <meta property="twitter:title" content="Sierra Battan" />
          <meta property="twitter:description" content="Sierra Battan's personal website" />
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
