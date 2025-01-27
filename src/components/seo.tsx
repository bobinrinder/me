import { Helmet } from "react-helmet";

const SEO = ({ description = 'Check out my work and connect with me.', lang = 'en', title = 'Robin Binder - Software Engineer' }) => {
  const Helm = Helmet as any; 
  return (
    <Helm
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: 'bobinrinder',
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat()}
    />
  );
};

export default SEO;
