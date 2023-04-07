import React from 'react';
import { Welcome, Volunteering, WhySection, VideoSection } from 'components/layout/Volunteer';
import { SubscribeSection } from 'components/layout/Home';
import { Seo } from 'Seo';

const VolunteerView: React.FC = () => {
  const currentUrl = window.location.href;
  const canonicalUrl = currentUrl.split('?')[0].split('#')[0];

  return (
    <div>
      <Seo
        title="Volunteer"
        description="With our volunteer programme, recent graduates and students are offered opportunities to get real life experience to boost or start their professional careers."
        type="article"
        url={canonicalUrl}
      />
      <Welcome />
      <Volunteering />
      <WhySection />
      <VideoSection />
      <SubscribeSection />
    </div>
  );
};

export default VolunteerView;
