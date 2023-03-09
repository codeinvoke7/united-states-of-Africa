import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { RxCaretRight } from 'react-icons/rx';
import { subscribeBackground } from 'assets/images';
import { SUBSCRIBE } from 'navigation/CONSTANTS';

export default function SubscribeSection() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative overflow-hidden my-16">
      <img
        role="presentation"
        src={subscribeBackground}
        className="absolute w-full h-full aspect-video object-cover bg-current"
        alt="subscribe background image"
      />
      <div className="relative place-items-center text-center max-w-xl mx-auto px-6 py-10">
        <h1 className="text-2xl lg:text-5xl text-[#fff] leading-snug font-extrabold z-40">
          Never miss an Update
        </h1>
        <p className="text-lg lg:text-2xl text-[#fff] font-normal leading-tight z-[100]">
          Subscribe to out Newsletter
        </p>
        <form className="flex flex-row items-center mt-4" onSubmit={handleFormSubmit}>
          <div className="flex flex-row items-center mx-auto">
            <input
              type="email"
              className="w-[22rem] h-[3.5rem] lg:w-[50rem] lg:h-[3.875rem] lg:rounded border-transparent focus:ring-0 z-40"
              id="email"
              placeholder="Enter your email"
            />
          </div>
        </form>
        <div className="flex items-center justify-center gap-4 my-6 flex-wrap">
          {buttonsData.map(({ label, to, color = 'default' }, index) => {
            return (
              <Link
                to={to}
                key={label + index}
                className={clsx('btn gap-2 rounded-full px-6 normal-case z-40', {
                  'btn-accent': color === 'default'
                })}
              >
                {label}
                <RxCaretRight className="w-6 h-6" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type ButtonProps = {
  label: string;
  to: string;
  color?: 'accent' | 'default';
};

const buttonsData: ButtonProps[] = [
  {
    label: 'Subscribe',
    to: SUBSCRIBE
  }
];
