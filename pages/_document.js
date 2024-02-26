import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          {/* Other meta tags */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Your website description" />
          <meta name="keywords" content="keyword1, keyword2, keyword3" />
          {/* CSS */}
          <link rel="stylesheet" href="/styles.css" />
          {/* Title */}
          <title>Your Website Title</title>
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
