import { donation, fundraiser, member, volunteer } from 'assets/icons';
import { WhatWeDoCardProps, GetInvolvedCard, GetInvolvedCardProps } from 'components/modules/cards';
import { DONATE, FUNDRAISE, VOLUNTEER, SIGN_IN } from 'navigation/CONSTANTS';
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
    title: 'Join As A member',
    description:
      'The United States of Africa advocates for the interests of every man, woman, boy child; it’s a vision so compelling both to the old and young people of African descent worldwide.',
    link: SIGN_IN,
    icon: member,
    buttonLabel: 'Be Member'
  }
];
