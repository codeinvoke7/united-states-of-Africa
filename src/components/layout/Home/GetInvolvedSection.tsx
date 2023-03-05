import { donation, fundraiser, member, volunteer } from 'assets/icons';
import { GetInvolvedCardProps, GetInvolvedCard } from 'components/modules/cards';
import { DONATE, FUNDRAISE, VOLUNTEER, SIGN_IN } from 'navigation/CONSTANTS';
import React from 'react';

export default function GetInvolvedSection() {
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 mx-auto my-10 gap-x-4 gap-y-8 max-w-xl px-4">
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
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit saepe assumenda corporis suscipit doloremque facilis, veniam sit vel corrupti sed, consequuntur cum voluptas delectus molestiae aut aliquam! Qui, nostrum iusto.',
    link: VOLUNTEER,
    icon: volunteer,
    buttonLabel: 'Join now'
  },
  {
    title: 'Quick Fundraiser',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit saepe assumenda corporis suscipit doloremque facilis, veniam sit vel corrupti sed, consequuntur cum voluptas delectus molestiae aut aliquam! Qui, nostrum iusto.',
    link: FUNDRAISE,
    icon: fundraiser,
    buttonLabel: 'Raise now'
  },
  {
    title: 'Give donation',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit saepe assumenda corporis suscipit doloremque facilis, veniam sit vel corrupti sed, consequuntur cum voluptas delectus molestiae aut aliquam! Qui, nostrum iusto.',
    link: DONATE,
    icon: donation,
    buttonLabel: 'Donate now'
  },
  {
    title: 'Join As A member',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit saepe assumenda corporis suscipit doloremque facilis, veniam sit vel corrupti sed, consequuntur cum voluptas delectus molestiae aut aliquam! Qui, nostrum iusto.',
    link: SIGN_IN,
    icon: member,
    buttonLabel: 'Be Member'
  }
];
