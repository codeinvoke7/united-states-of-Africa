import {
  AboutSection,
  GetInvolvedSection,
  // HeroSection,
  HowToSection,
  MissionSection,
  NewsSection,
  SubscribeSection,
  TeamsSection,
  WhatWeDoSection,
  EventsSection
} from 'components/layout/Home';

function HomeView() {
  return (
    <>
      {/* <HeroSection /> */}
      <GetInvolvedSection />
      <AboutSection />
      <MissionSection />
      <WhatWeDoSection />
      <HowToSection />
      <NewsSection />
      <TeamsSection />
      <EventsSection />
      <SubscribeSection />
    </>
  );
}

export default HomeView;
