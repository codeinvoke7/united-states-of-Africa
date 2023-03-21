import React from 'react';
import { useContext } from 'react';
import { subscribeBackground } from 'assets/images';
import { EventsCard, EventsCardProps } from 'components/modules/cards';
import { VOLUNTEER } from 'navigation/CONSTANTS';
import { RadioButton } from 'components/widgets/buttons';

export default function EventsSection() {
  return (
    <>
      <section className="relative overflow-hidden my-16">
        <div className="w-full h-full max-w-full overflow-hidden mx-auto bg-current">
          <img
            role="presentation"
            src={subscribeBackground}
            className="absolute w-full  max-w-full h-full object-cover bg-current"
            alt="subscribe background image"
          />
        </div>
        <div className="relative place-items-center text-center max-w-xl mx-auto py-6">
          <h1 className="text-lg md:text-2xl text-primary leading-snug font-bold">
            Upcoming Events
          </h1>
          <p className="mt-3 text-xl lg:text-4xl leading-snug font-bold text-[#fff]">
            Be Ready For Our Events
          </p>
          <p className="max-w-md mx-auto mt-3 text-xs md:text-lg leading-snug font-normal text-[#fff]">
            United States of Africa is an Initiative working towards unification of all people of
            African descent under one political kingdom based in Africa.
          </p>
        </div>
        <div className="grid md:grid-cols-2 mx-auto my-2 gap-x-3  gap-y-8 md:gap-x-8 max-w-md px-4 place-content-center">
          {cardsData.map((data, index) => {
            return <EventsCard key={data.title + index} {...data} />;
          })}
        </div>
        <div className="mx-auto max-w-md flex items-center py-3 justify-center gap-8">
          <RadioButton />
        </div>
      </section>
    </>
  );
}

const cardsData: EventsCardProps[] = [
  {
    date: '12 May 2023',
    title: 'International Youth Day',
    description: 'Join us at Pan African Leadership Center as we Host International Youth Day',
    time: '9:00-16:00',
    location: 'Nigeria',
    link: VOLUNTEER,
    buttonLabel: 'Join now'
  },
  {
    date: '23 August 2023',
    title: 'Black Mental Health Matters',
    description: 'The harsh realities of mental health struggle in the Black communities.',
    time: '13:00-17:00',
    location: 'Ghana',
    link: VOLUNTEER,
    buttonLabel: 'Join now'
  }
];
