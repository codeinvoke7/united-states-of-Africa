import {
  AboutSection,
  GetInvolvedSection,
  // HeroSection,
  HowToSection,
  MissionSection,
  NewsSection,
  SubscribeSection,
  TeamsSection,
  WhatWeDoSection
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
      <SubscribeSection />
    </>
  );
}

export default HomeView;
