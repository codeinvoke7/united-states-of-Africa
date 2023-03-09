import { confirmation, enjoy, position } from 'assets/icons';
import { HowToCard, HowToCardProps } from 'components/modules/cards';
import React from 'react';

export default function HowToSection() {
  return (
    <section className="bg-neutral text-neutral-content">
      <div className="max-w-xl py-16 mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center font-serif">
          Ready to make a difference ? <br /> Join us as a volunteer or donor today !
        </h2>

        <div className="flex px-6 mx-auto justify-center items-center flex-col md:flex-row">
          {howToData.map((data, index) => {
            return (
              <div key={data.title + index} className="w-1/3 grid place-content-center">
                <HowToCard {...data} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const howToData: HowToCardProps[] = [
  {
    buttonLabel: 'Send your gift',
    description: 'Volunteer with us or become a donor today.',
    title: 'Apply',
    url: '',
    icon: position
  },
  {
    buttonLabel: 'Make a difference',
    description: 'Receive confirmation within 24 hours.',
    title: 'Get Confirmation',
    url: '',
    icon: confirmation
  },
  {
    buttonLabel: 'Take Action',
    description: 'Join us, Make difference.',
    title: 'Get Enjoyed',
    url: '',
    icon: enjoy
  }
];
