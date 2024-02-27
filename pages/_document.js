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
          </div>
          {/* Render the main content */}
          <Main />
          <NextScript />
          {/* Additional content */}
          <div style={{ width: "90%", maxWidth: "800px", padding: "20px", color: "white", fontSize: "16px", textAlign: "left" }}>
            {/* Thumbnail explanation */}
            <h2 style={{ fontSize: "20px", marginTop: "20px" }}>About Thumbnails:</h2>
            <p>Thumbnails play a crucial role in attracting viewers' attention on platforms like YouTube. They serve as a preview of the video content and can significantly impact the click-through rate (CTR) of your videos.</p>
            <p>Having visually appealing and informative thumbnails can increase the likelihood of users clicking on your videos, thereby improving your video's performance and reach.</p>
            {/* Tool benefits */}
            <h2 style={{ fontSize: "20px", marginTop: "20px" }}>How Our Tool Can Help:</h2>
            <p>Our YouTube Thumbnail Downloader tool simplifies the process of obtaining high-quality thumbnails from YouTube videos. By providing direct access to these thumbnails, our tool empowers content creators, marketers, and designers to:</p>
            <ul>
              <li>Create eye-catching thumbnails for their own videos</li>
              <li>Analyze competitors' thumbnails for inspiration and research</li>
              <li>Use thumbnails for presentations, social media posts, and other promotional materials</li>
            </ul>
            <p>With a wide range of applications, our tool aims to streamline the thumbnail acquisition process and enhance the overall content creation experience for users.</p>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
