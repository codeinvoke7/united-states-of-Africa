import React from 'react';
import { Helmet } from 'react-helmet-async';

type MetaTagsProps = {
  title: string;
  description: string;
  type: string;
  url: string;
};

const MetaTags: React.FC<MetaTagsProps> = ({ title, description, type, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content={type} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default MetaTags;
