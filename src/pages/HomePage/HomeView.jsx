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
import { TabProvider } from 'components/modules/tabs';

function HomeView() {
  return (
    <>
      {/* <HeroSection /> */}
      <GetInvolvedSection />
      <AboutSection />

      <TabProvider>
        <MissionSection />
      </TabProvider>

      <WhatWeDoSection />
      <HowToSection />
      <NewsSection />
      <TeamsSection />
      <SubscribeSection />
    </>
  );
}

export default HomeView;
