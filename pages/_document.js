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
          <meta name="description" content="Get free thumbnail image of any YouTube videos in Full HD(1080), HD (720), SD, and also in small size. Currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos." />
          <meta name="keywords" content="youtube thumbnail downloader, youtube thumbnail grabber, youtube thumbnail download, save youtube video thumbnail" />
          {/* CSS */}
          <link rel="stylesheet" href="/styles.css" />
          {/* Title */}
          <title>YouTube Thumbnail Downloader</title>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Multilingual Content */}
          <div id="multilingual-content">
            {/* English */}
            <div lang="en">
              <h2>How to Use the YouTube Thumbnail Downloader</h2>
              <p>Save free thumbnail images of any YouTube videos in Full HD (1080), HD (720), SD, and small sizes. Supported formats include YouTube (HD, HQ, 1080p, 4K) videos.</p>
              <h3>Usage Instructions:</h3>
              <ol>
                <li>Copy the URL of the YouTube video whose thumbnail you want to download.</li>
                <li>Paste the URL into the input box provided.</li>
                <li>The tool will automatically generate different sizes of thumbnails.</li>
                <li>Click on the thumbnail download button to download the image to your system.</li>
              </ol>
              <p>Please note that while downloading YouTube thumbnails is legal, it's essential to obtain permission from the video's owner if you plan to reuse the thumbnail.</p>
            </div>
            {/* Add content in other languages as needed */}
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
