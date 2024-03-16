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
            {/* Your existing content */}
            {/* ... */}
          </div>
          {/* Render the main content */}
          <Main />
          <NextScript />
          {/* Additional content */}
          <div style={{ width: "90%", maxWidth: "800px", padding: "20px", color: "white", fontSize: "16px", textAlign: "left" }}>
            {/* Thumbnail explanation */}
            {/* Your existing content */}
            {/* ... */}
          </div>
          {/* Privacy & Policy */}
          {/* Your existing content */}
          {/* ... */}
          {/* Affiliate link */}
          <div style={{ width: "90%", maxWidth: "800px", padding: "20px", color: "white", fontSize: "16px", textAlign: "left" }}>
            <h2 style={{ fontSize: "20px", marginTop: "20px" }}>Recommended Product:</h2>
            <p>Check out this amazing product that can enhance your experience!</p>
            <a href="https://www.wgmiacademy.io/?via=saasnocood" style={{ color: "white", textDecoration: "underline" }}>Click here to learn more</a>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
