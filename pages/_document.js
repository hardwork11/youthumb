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
          {/* Language Selection */}
          <div>
            <p>Select Language:</p>
            <ul>
              <li><a href="/en">English</a></li>
              <li><a href="/es">Spanish</a></li>
              <li><a href="/fr">French</a></li>
              {/* Add more languages as needed */}
            </ul>
          </div>

          {/* Main content */}
          <Main />
          {/* Next.js scripts */}
          <NextScript />

          {/* Copyright notice with red background */}
          <div style={{ backgroundColor: 'red', color: 'white', textAlign: 'center' }}>
            <p>Copyright 2024 © youtubthumbnaildownload.com</p>
            <p>Add this word to this symbol in a good way in half the background</p>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
