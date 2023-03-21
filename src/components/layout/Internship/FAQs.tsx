import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { RxCaretRight } from 'react-icons/rx';
import { faqs } from 'assets/images';
import { VOLUNTEERS } from 'navigation/CONSTANTS';

export default function FAQs() {
  return (
    <section className="relative overflow-hidden my-16">
      <img
        role="presentation"
        src={faqs}
        className="absolute w-full h-full aspect-video object-cover bg-current"
        alt="subscribe background image"
      />
      <div className="max-w-xl mx-auto px-6 py-10 my-16">
        <div className="card rounded-none bg-[#5553A3] text-neutral-content mx-auto lg:right-[35px] lg:mx-0 lg:mr-auto max-w-sm">
          <div className="card-body">
            <h3 className="text-3xl text-center font-bold font-serif">
              Frequently Asked Questions
            </h3>
            <p className="text-md text-center tracking-wider mt-6">
              Take a lot at the questions and answers about our internship
            </p>
            <div className="relative place-items-center text-center max-w-xl mx-auto px-4 py-2">
              <div className="flex items-center justify-center gap-4 my-6 flex-wrap">
                {buttonsData.map(({ label, to, color = 'default' }, index) => {
                  return (
                    <Link
                      to={to}
                      key={label + index}
                      className={clsx('btn gap-2 rounded-full px-8 normal-case', {
                        'btn-neutral': color === 'default'
                      })}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ButtonProps = {
  label: string;
  to: string;
  color?: 'neutral' | 'default';
};

const buttonsData: ButtonProps[] = [
  {
    label: 'Read On',
    to: VOLUNTEERS
  }
];
