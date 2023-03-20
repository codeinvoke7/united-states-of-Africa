import React from 'react';
import { aboutHeaderBackground, aboutHeaderBackgroundMobile } from 'assets/images';
import { OurObjectives, OurTeam, WhatWeDo, WhoWeAre } from 'components/layout/AboutUs';
import { GoalsCard, GoalsCardProps } from 'components/modules/cards';
import { mission, value, vision } from 'assets/icons';
import { MISSION, VALUE, VISION } from 'navigation/CONSTANTS';
import { SubscribeSection } from 'components/layout/Home';

export const AboutUsView = () => {
  return (
    <>
      <section className="bg-neutral text-neutral-content">
        <div className="relative grid place-content-center px-4 py-24 max-w-xl mx-auto min-h-[12rem]">
          <picture className="absolute inset-0 opacity-70">
            <source srcSet={aboutHeaderBackground} media="(min-width: 48rem)" />
            <img src={aboutHeaderBackgroundMobile} className="w-full h-full object-cover" />
          </picture>

          <div className="relative z-10 font-serif font-bold">
            <p className="text-center text-lg">
              Home &gt; <span className="text-primary">About Us</span>
            </p>
            <p className="flex text-4xl text-center max-w-md mt-2">
              Welcome to the United States of Africa. Africans united beyond borders.
            </p>
          </div>
        </div>
      </section>

      <WhoWeAre />

      <OurObjectives />

      <OurTeam />

      <section className="bg-primary bg-opacity-5 py-8 px-4 my-6">
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
