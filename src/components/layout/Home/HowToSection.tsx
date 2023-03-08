import { confirmation, enjoy, position } from 'assets/icons';
import { HowToCard, HowToCardProps } from 'components/modules/cards';
import React from 'react';

export default function HowToSection() {
  return (
    <section className="bg-neutral text-neutral-content">
      <div className="max-w-xl py-16 mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center font-serif">
          To Have Become A Volunteer Or Donor
        </h2>

        <div className="flex px-6 mx-auto justify-center items-center flex-col md:flex-row">
          {howToData.map((data, index) => {
            return <HowToCard key={data.title + index} {...data} />;
          })}
        </div>
      </div>
    </section>
  );
}

const howToData: HowToCardProps[] = [
  {
    buttonLabel: 'Give Request',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    title: 'Select Position',
    url: '',
    icon: position
  },
  {
    buttonLabel: 'Get Reaction',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    title: 'Get Confirmation',
    url: '',
    icon: confirmation
  },
  {
    buttonLabel: 'Enjoy Now',
    description: 'Lorem ipsum dolor sit amet consectetur.',
    title: 'Get Enjoyed',
    url: '',
    icon: enjoy
  }
];
