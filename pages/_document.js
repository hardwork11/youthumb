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
          <meta name="description" content="Get free thumbnail image of any YouTube videos in Full HD (1080), HD (720), SD, and also in small size." />
          <meta name="keywords" content="YouTube, thumbnail downloader, video, HD, Full HD, SD, presentation, animation" />
          {/* CSS */}
          <link rel="stylesheet" href="/styles.css" />
          {/* Title */}
          <title>YouTube Thumbnail Downloader</title>
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
              <h2>How to Use YouTube Thumbnail Downloader</h2>
              <p>Get free thumbnail images of any YouTube videos in Full HD (1080), HD (720), SD, and small sizes. You can use these thumbnails in presentations, animation work, or other activities.</p>
              <h3>Instructions:</h3>
              <ol>
                <li>Copy the YouTube video link.</li>
                <li>Paste the link into the input box.</li>
                <li>Thumbnails of different sizes will be generated automatically.</li>
                <li>Click the download button to save the thumbnail to your device.</li>
              </ol>
              <p>Note: Thumbnail and video copyrights belong to their respective owners. Obtain permission before reusing them.</p>
            </div>
            {/* Spanish */}
            <div lang="es">
              <h2>Cómo Usar el Descargador de Miniaturas de YouTube</h2>
              <p>Obtén imágenes de miniaturas gratuitas de cualquier video de YouTube en Full HD (1080), HD (720), SD y tamaños pequeños. Puedes usar estas miniaturas en presentaciones, trabajos de animación u otras actividades.</p>
              <h3>Instrucciones:</h3>
              <ol>
                <li>Copia el enlace del video de YouTube.</li>
                <li>Pega el enlace en el cuadro de entrada.</li>
                <li>Las miniaturas de diferentes tamaños se generarán automáticamente.</li>
                <li>Haz clic en el botón de descarga para guardar la miniatura en tu dispositivo.</li>
              </ol>
              <p>Nota: Los derechos de autor de las miniaturas y los videos pertenecen a sus respectivos propietarios. Obtén permiso antes de reutilizarlos.</p>
            </div>
            {/* French */}
            <div lang="fr">
              <h2>Comment Utiliser le Téléchargeur de Miniatures YouTube</h2>
              <p>Obtenez des images de miniatures gratuites de n'importe quelle vidéo YouTube en Full HD (1080), HD (720), SD et tailles petites. Vous pouvez utiliser ces miniatures dans des présentations, des travaux d'animation ou d'autres activités.</p>
              <h3>Instructions :</h3>
              <ol>
                <li>Copiez le lien de la vidéo YouTube.</li>
                <li>Collez le lien dans la zone de saisie.</li>
                <li>Les miniatures de différentes tailles seront générées automatiquement.</li>
                <li>Cliquez sur le bouton de téléchargement pour enregistrer la miniature sur votre appareil.</li>
              </ol>
              <p>Remarque : Les droits d'auteur des miniatures et des vidéos appartiennent à leurs propriétaires respectifs. Obtenez la permission avant de les réutiliser.</p>
            </div>
            {/* Add more languages as needed */}
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
