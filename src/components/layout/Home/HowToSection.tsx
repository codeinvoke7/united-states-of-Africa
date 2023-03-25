import React from 'react';
import { apply, confirmation, getInterviewed, getIvolved } from 'assets/icons';
import { VOLUNTEER } from 'navigation/CONSTANTS';
import { Link } from 'react-router-dom';
import { RxCaretRight } from 'react-icons/rx';

export default function HowToSection() {
  return (
    <section className="bg-neutral text-neutral-content">
      <div className="max-w-xl py-16 mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center font-serif">
          Join us as a volunteeer today !
        </h2>

        <p className="font-bold text-center px-4">
          Explore our range of exciting volunteer oportunities and find the perfect fit for you. We
          have roles to suit all interests, skills and availability. Start making a difference
          today!
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 px-6 font-serif my-6">
          {howToData.map(({ icon, label }, index) => {
            return (
              <div className="card card-compact" key={label + index}>
                <figure className="grid w-28 aspect-square rounded-full border-2 border-secondary p-8 place-self-center">
                  <img loading="lazy" role="presentation" src={icon} />
                </figure>
                <div className="card-body self-center">
                  <h3 className="card-title text-center">{label}</h3>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid place-content-center mt-3">
          <Link className="btn btn-accent rounded-full px-4 normal-case" to={VOLUNTEER}>
            Volunteer with us now
            <i>
              <RxCaretRight className="w-6 h-6" />
            </i>
          </Link>
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  icon: string;
  label: string;
}

const howToData: CardProps[] = [
  {
    label: 'Apply',
    icon: apply
  },
  {
    label: 'Get Interviewed',
    icon: getInterviewed
  },
  {
    label: 'Confirmation',
    icon: confirmation
  },
  {
    label: 'Get Involved',
    icon: getIvolved
  }
];
