import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHelmet = ({
  title = "Vinicius Moraes - Desenvolvedor Full Stack",
  description = "Desenvolvedor Full Stack especializado em React, TypeScript e tecnologias modernas. Criando experiências digitais incríveis com foco em performance e usabilidade.",
  keywords = "desenvolvedor frontend, react, typescript, javascript, web development, portfolio, vinícius moraes tavares",
  image = "/images/og-image.jpg",
  url = "https://viniciusmoraes.dev",
  type = "website"
}: SEOHelmetProps) => {
  const fullTitle = title.includes("Vinícius") ? title : `${title} | Vinícius Moraes Tavares`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Vinícius Moraes Tavares" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="pt-BR" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Vinícius Moraes Tavares" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@viniciusmoraes" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Vinícius Moraes" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Vinícius Moraes Tavares",
          "jobTitle": "Desenvolvedor Frontend",
          "description": description,
          "url": url,
          "image": image,
          "sameAs": [
            "https://github.com/viniciusmoraes",
            "https://linkedin.com/in/viniciusmoraes",
            "https://twitter.com/viniciusmoraes"
          ],
          "knowsAbout": [
            "React",
            "TypeScript",
            "JavaScript",
            "Frontend Development",
            "Web Development",
            "UI/UX Design"
          ],
          "worksFor": {
            "@type": "Organization",
            "name": "Freelancer"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;