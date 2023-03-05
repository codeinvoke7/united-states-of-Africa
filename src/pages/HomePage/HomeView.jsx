import {
  AboutSection,
  GetInvolvedSection,
  HeroSection,
  HowToSection,
  MissionSection,
  NewsSection
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
    </>
  );
}

export default HomeView;
