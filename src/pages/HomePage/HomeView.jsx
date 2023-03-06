import {
  AboutSection,
  GetInvolvedSection,
  // HeroSection,
  HowToSection,
  MissionSection,
  NewsSection,
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
    </>
  );
}

export default HomeView;
