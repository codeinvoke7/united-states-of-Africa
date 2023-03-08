import { ABOUT, DONATE } from 'navigation/CONSTANTS';
import React from 'react';
import { Link } from 'react-router-dom';
import { RxCaretRight } from 'react-icons/rx';
import { WhatWeDoCard, WhatWeDoCardProps } from 'components/modules/cards';
import { humanRights, mentalHealth, technologieInovation } from 'assets/icons';

export default function WhatWeDoSection() {
  return (
    <section className="grid lg:grid-cols-2 max-w-xl mx-auto my-16 gap-4 p-4">
      <div className="grid sm:grid-cols-2 gap-2 order-2 sm:order-1 px-6">
        {whatWeDoData.map((data, index) => {
          return <WhatWeDoCard key={data.title + index} {...data} />;
        })}
      </div>

      <div className="card card-compact my-auto order-1 sm:order-2">
        <div className="card-body">
          <h2 className="text-primary text-lg">What We Do</h2>
          <h3 className="text-5xl font-serif font-bold my-2">A Mission To Solve A Problem</h3>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero saepe unde distinctio
            molestiae doloribus voluptatum labore id, provident odio, esse enim nesciunt rerum aut
            quo consectetur harum pariatur architecto nulla! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Laborum.
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
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatibus possimus ea similique nemo, voluptates ipsam quasi itaque eveniet illum.',
    icon: technologieInovation
  },
  {
    title: 'Human Rights',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatibus possimus ea similique nemo, voluptates ipsam quasi itaque eveniet illum.',
    icon: humanRights
  },
  {
    title: 'Mental Health',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatibus possimus ea similique nemo, voluptates ipsam quasi itaque eveniet illum.',
    icon: mentalHealth
  },
  {
    title: 'Afrocentric Education',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste voluptatibus possimus ea similique nemo, voluptates ipsam quasi itaque eveniet illum.',
    icon: technologieInovation
  }
];
