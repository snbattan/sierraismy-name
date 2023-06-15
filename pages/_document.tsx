import Document, {
  DocumentContext, Html, Head, Main, NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static getInitialProps = async (ctx: DocumentContext) => Document.getInitialProps(ctx)

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
