import React from 'react';
import { aboutHeaderBackground, aboutHeaderBackgroundMobile } from 'assets/images';
import { OurObjectives, OurStory, OurTeam, WhatWeDo, WhoWeAre } from 'components/layout/AboutUs';
import { GoalsCard, GoalsCardProps } from 'components/modules/cards';
import { mission, value, vision } from 'assets/icons';
import { MISSION, VALUE, VISION } from 'navigation/CONSTANTS';
import { SubscribeSection } from 'components/layout/Home';
import { Seo } from 'Seo';

export const AboutUsView: React.FC = () => {
  const currentUrl = window.location.href;
  const canonicalUrl = currentUrl.split('?')[0].split('#')[0];

  return (
    <>
      <Seo
        title="AboutUs"
        description="Welcome to United States of Africa! We are a non-profit corporation based in Texas, USA, dedicated to promoting unity and cooperation among African states and people of African descent around the world."
        type="article"
        url={canonicalUrl}
      />

      <section className="bg-neutral text-neutral-content relative">
        <div className="relative grid place-content-center px-4 py-24 max-w-xl mx-auto min-h-[12rem]">
          <picture className="absolute inset-0 opacity-70">
            <source srcSet={aboutHeaderBackground} media="(min-width: 48rem)" />
            <img
              role="presentation"
              src={aboutHeaderBackgroundMobile}
              className="w-full h-full object-cover"
            />
          </picture>

          <div className="relative z-10 font-serif font-bold">
            <p className="text-center text-lg">
              Home &gt; <span className="text-accent">About Us</span>
            </p>
          </div>
        </div>
      </section>

      <WhoWeAre />

      <section className="py-8 px-4 my-6">
        <div className="grid gap-4 lg:gap-16 sm:grid-cols-3 my-6 max-w-xl mx-auto">
          {goals.map((goal, index) => {
            return (
              <div key={goal.title + goal.icon + index}>
                <GoalsCard {...goal} />
              </div>
            );
          })}
        </div>
      </section>

      <OurTeam />

      <OurStory />

      <OurObjectives />

      <WhatWeDo />

      <SubscribeSection />
    </>
  );
};

const goals: GoalsCardProps[] = [
  {
    buttonLabel: 'Read more',
    description: 'Our mission is to unite African states and people of African descent',
    icon: mission,
    title: 'Our mission',
    link: MISSION
  },
  {
    buttonLabel: 'Read more',
    description: 'United in diversity, building a brighter Africa for all.',
    icon: vision,
    title: 'Our vision',
    link: VISION
  },
  {
    buttonLabel: 'Read more',
    description: 'Teamwork Diversity Integrity',
    icon: value,
    title: 'Our values',
    link: VALUE
  }
];
