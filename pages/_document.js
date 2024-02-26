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
        <body style={{ backgroundColor: "red", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* Text content */}
          <div style={{ width: "90%", maxWidth: "800px", padding: "20px", color: "white", fontSize: "16px", textAlign: "left" }}>
            {/* How to use section */}
            <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>How to Use:</h2>
            <p>I have shared some screenshots to guide you on how to use this YouTube downloader website. It's quite easy:</p>
            <ol>
              <li>Copy any YouTube link whose thumbnail you want.</li>
              <li>Paste the URL in the input box. It will automatically generate different sizes of thumbnails.</li>
              <li>Click on the thumbnail download button to download it to your system.</li>
            </ol>
            <p>If you are using an Android phone, you need to save the images. For iPhones, the process may vary.</p>
            {/* Render the main content */}
            <Main />
            <NextScript />
            {/* Copyright */}
            <h2 style={{ fontSize: "20px", marginTop: "20px" }}>Copyright Information:</h2>
            <p>Whatever YouTube screenshot you download is copyrighted by the respective owner of the videos. Always ask for permission before using it in your work.</p>
            {/* SEO */}
            <h2 style={{ fontSize: "20px", marginTop: "20px" }}>SEO Considerations:</h2>
            <p>Reusing YouTube thumbnails may not be SEO-friendly as most thumbnails on YouTube are indexed by Google. Adding unique effects using software like Photoshop can make them unique again and improve SEO friendliness.</p>
            {/* Website information */}
            <p style={{ fontSize: "14px", marginTop: "20px" }}><strong>YouTubThumbnailDownload.com - Copyright 2024</strong></p>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
