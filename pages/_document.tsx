
import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link
            href='https://fonts.googleapis.com/css?family=Noto+Sans+Mono&display=optional'
            rel='stylesheet'
          />
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
