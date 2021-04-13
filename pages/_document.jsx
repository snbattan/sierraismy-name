import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link href="s.png" rel="shortcut icon" />
          <link href="s.png" rel="icon" />
          <link href="s.png" rel="apple-touch-icon" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Shadows Into Light Two" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
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
