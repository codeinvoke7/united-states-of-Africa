import React from 'react';
import { Welcome, FAQs } from 'components/layout/Internship';
import { SubscribeSection } from 'components/layout/Home';
import { Seo } from 'Seo';

const InternshipView: React.FC = () => {
  const currentUrl = window.location.href;
  const canonicalUrl = currentUrl.split('?')[0].split('#')[0];

  return (
    <div>
      <Seo
        title="United States of Africa Internship"
        description="With our internship programme, recent graduates and students are offered opportunities to get real life experience to boost or start their professional careers."
        type="article"
        url={canonicalUrl}
      />

      <Welcome />
      <FAQs />
      <SubscribeSection />
    </div>
  );
};

export default InternshipView;
