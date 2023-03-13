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

function HomeView() {
  return (
    <>
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
}

export default HomeView;
