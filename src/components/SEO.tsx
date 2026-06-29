import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
}

const SEO = ({
  title = "MD Gul Moajjam Faizy — Full Stack MERN Developer",
  description = "Portfolio of MD Gul Moajjam Faizy, a Full Stack MERN developer specializing in scalable React, Next.js & Node.js applications.",
  canonical = "/",
}: SEOProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "MD Gul Moajjam Faizy",
    jobTitle: "Full Stack MERN Developer",
    url: typeof window !== "undefined" ? window.location.origin : "",
    sameAs: [
      "https://github.com/",
      "https://www.linkedin.com/",
    ],
    knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;