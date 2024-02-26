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
          {/* Main content */}
          <Main />
          {/* Next.js scripts */}
          <NextScript />

          {/* Multilingual instructions */}
          <div id="instructions">
            {/* English */}
            <div lang="en">
              <h2>How to Use the Tools</h2>
              <p>This section provides instructions on how to use the tools.</p>
            </div>
            {/* Spanish */}
            <div lang="es">
              <h2>Cómo Usar las Herramientas</h2>
              <p>Esta sección proporciona instrucciones sobre cómo utilizar las herramientas.</p>
            </div>
            {/* French */}
            <div lang="fr">
              <h2>Comment Utiliser les Outils</h2>
              <p>Cette section fournit des instructions sur l'utilisation des outils.</p>
            </div>
            {/* Add more languages as needed */}
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
