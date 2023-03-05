import {
  AboutSection,
  GetInvolvedSection,
  HeroSection,
  HowToSection,
  MissionSection,
  NewsSection,
  SubscribeSection
} from 'components/layout/Home';

function HomeView() {
  return (
    <>
      <HeroSection />
      <GetInvolvedSection />
      <AboutSection />
      <MissionSection />
      <HowToSection />
      <NewsSection />
      <SubscribeSection />
    </>
  );
}

export default HomeView;
