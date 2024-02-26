import { Fragment } from "react";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  // Define instructions in multiple languages
  const instructions = {
    en: {
      title: "Youtube Thumbnail Downloader",
      description: "Download high-quality thumbnails from YouTube videos.",
    },
    es: {
      title: "Descargador de miniaturas de YouTube",
      description: "Descarga miniaturas de alta calidad de videos de YouTube.",
    },
    fr: {
      title: "Téléchargeur de vignettes YouTube",
      description: "Téléchargez des miniatures de haute qualité à partir de vidéos YouTube.",
    },
    // Add more languages as needed
  };

  // Determine the current language based on user preferences or browser settings
  const currentLanguage = "en"; // Default to English for demonstration

  return (
    <Fragment>
      {/* Set default SEO metadata based on the current language */}
      <DefaultSeo
        title={instructions[currentLanguage].title}
        description={instructions[currentLanguage].description}
        canonical="https://your-website-url.com"
        openGraph={{
          url: "https://your-website-url.com",
          title: instructions[currentLanguage].title,
          description: instructions[currentLanguage].description,
          site_name: instructions[currentLanguage].title,
        }}
      />
      {/* Render the page component */}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
