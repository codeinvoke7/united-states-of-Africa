import React from 'react';

import {
  AboutSection,
  GetInvolvedSection,
  HeroSection,
  HowToSection,
  MissionSection,
  NewsSection,
  PartnerSection,
  ReviewSection,
  SubscribeSection,
  TeamsSection,
  WhatWeDoSection,
  EventsSection,
  PodcastSection
} from 'components/layout/Home';
import { TabProvider } from 'components/modules/tabs';
import { Seo } from 'Seo';

const HomeView: React.FC = () => {
  const currentUrl = window.location.href;
  const canonicalUrl = currentUrl.split('?')[0].split('#')[0];

  return (
    <>
      <Seo
        title="United States of Africa - Official website"
        description="Welcome to United States of Africa! We are a non-profit corporation based in Texas, USA, dedicated to promoting unity and cooperation among African states and people of African descent around the world. The United States of Africa Mission seeks to unify not only African states, people of African descent worldwide, the Caribbean and Melanesian islands, but also indigenous Black communities in Asia and throughout the world."
        type="article"
        url={canonicalUrl}
      />
      <HeroSection />
      <GetInvolvedSection />
      <AboutSection />

      <TabProvider>
        <MissionSection />
      </TabProvider>

      <WhatWeDoSection />
      <HowToSection />
      <NewsSection />
      <TeamsSection />
      <EventsSection />
      <PodcastSection />
      <SubscribeSection />
      <ReviewSection />
      <PartnerSection />
    </>
  );
};

export default HomeView;
