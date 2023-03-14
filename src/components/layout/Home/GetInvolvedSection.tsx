import { donation, fundraiser, member, volunteer } from 'assets/icons';
import { WhatWeDoCardProps, GetInvolvedCard, GetInvolvedCardProps } from 'components/modules/cards';
import { DONATE, FUNDRAISE, VOLUNTEER, SIGN_IN, SUBSCRIBE_AS_PATRON } from 'navigation/CONSTANTS';
import React from 'react';

export default function GetInvolvedSection() {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 mx-auto my-10 gap-x-4 gap-y-8 max-w-xl px-4 place-content-center">
      {cardsData.map((data, index) => {
        return <GetInvolvedCard key={data.title + index} {...data} />;
      })}
    </section>
  );
}

const cardsData: GetInvolvedCardProps[] = [
  {
    title: 'Become A Volunteer',
    description:
      'Join the movement towards African Unity! Become a volunteer for the United States of Africa and help build a brighter future for all Africans. Sign up today!.',
    link: VOLUNTEER,
    icon: volunteer,
    buttonLabel: 'Join now'
  },
  {
    title: 'Quick Fundraiser',
    description:
      'Start a fundraiser and help us build a better future for all Africans. Start now!.',
    link: FUNDRAISE,
    icon: fundraiser,
    buttonLabel: 'Raise now'
  },
  {
    title: 'Give donation',
    description: 'Support African Unity today ! Donate to the United States of Africa!.',
    link: DONATE,
    icon: donation,
    buttonLabel: 'Donate now'
  },
  {
    title: 'Become a Suporter',
    description: 'Join us and help create the Africa we want. Become a supporter today!',
    link: SUBSCRIBE_AS_PATRON,
    icon: member,
    buttonLabel: 'Subscribe Now'
  }
];
