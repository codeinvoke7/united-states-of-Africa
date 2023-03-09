import { ABOUT, DONATE } from 'navigation/CONSTANTS';
import React from 'react';
import { Link } from 'react-router-dom';
import { RxCaretRight } from 'react-icons/rx';
import { WhatWeDoCard, WhatWeDoCardProps } from 'components/modules/cards';
import { humanRights, mentalHealth, technologieInovation } from 'assets/icons';

export default function WhatWeDoSection() {
  return (
    <section className="grid lg:grid-cols-2 max-w-xl mx-auto my-16 gap-4 p-4">
      <div className="grid sm:grid-cols-2 gap-4 order-2 sm:order-1 px-6">
        {whatWeDoData.map((data, index) => {
          return <WhatWeDoCard key={data.title + index} {...data} />;
        })}
      </div>

      <div className="card card-compact my-auto order-1 sm:order-2">
        <div className="card-body">
          <h2 className="text-primary text-lg">What We Do</h2>
          <h3 className="text-5xl font-serif font-bold my-2">Uniting Africa through Innovation</h3>
          <p className="text-xl">
            Explore our innovative approach to addressing technological equity and promoting African
            leaps into Artificial Intelligence, Machine Learning, and Natural Language Processing
            powered volunteerism spirit. Empowering Africans to take charge of their destiny. learn
            more about what we do at the United States of Africa
          </p>

          <div className="card-actions gap-4 mt-8">
            <Link to={DONATE} className="btn rounded-full px-6 gap-2">
              Donate now
              <RxCaretRight className="w-6 h-6" />
            </Link>
            <Link to={ABOUT} className="btn btn-accent rounded-full px-6 gap-2">
              More About Us
              <RxCaretRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const whatWeDoData: WhatWeDoCardProps[] = [
  {
    title: 'Technology & Innovations',
    description: 'Revolutionizing Africa through technology and innovation.',
    icon: technologieInovation
  },
  {
    title: 'Human Rights',
    description: 'Empowering human rights for all Africans.',
    icon: humanRights
  },
  {
    title: 'Mental Health',
    description: 'Black Mental Health Matters: Eradicating stigma in African communities.',
    icon: mentalHealth
  },
  {
    title: 'Afrocentric Education',
    description: 'Education for us, by us: Building a stronger African future.',
    icon: technologieInovation
  }
];
