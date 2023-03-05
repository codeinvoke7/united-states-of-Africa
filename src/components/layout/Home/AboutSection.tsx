import React from 'react';
import { Link } from 'react-router-dom';
import { RxCaretRight } from 'react-icons/rx';
import { MdPlayCircleOutline } from 'react-icons/md';
import { DONATE, ABOUT } from 'navigation/CONSTANTS';
import clsx from 'clsx';
import { videoPlaceholder } from 'assets/images';

export default function AboutSection() {
  return (
    <section className="max-w-xl mx-auto my-10 grid md:grid-flow-col gap-8 px-6">
      <div className="place-self-center">
        <h2 className="text-primary text-xl">About Us</h2>
        <p className="text-5xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="text-xl tracking-wider">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quos, asperiores, itaque
          aspernatur impedit porro voluptates aliquid vel, harum alias distinctio facilis eos maxime
          quae molestias. Cum fugit sequi praesentium. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Dolores sint pariatur porro blanditiis alias. Expedita commodi unde
          facilis voluptatibus tempore eius dignissimos? Et iusto aut distinctio doloremque quo at
          rerum!
        </p>
        <div className="flex gap-4 my-6 flex-wrap">
          {buttonsData.map(({ label, to, color = 'default' }, index) => {
            return (
              <Link
                to={to}
                key={label + index}
                className={clsx('btn gap-2 rounded-full px-6 normal-case', {
                  'btn-accent': color === 'accent',
                  '': color === 'default'
                })}
              >
                {label}
                <RxCaretRight className="w-6 h-6" />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="place-self-center relative max-w-[24rem] min-w-[20rem]">
        <img src={videoPlaceholder} className="aspect-square w-full h-full" />
        <MdPlayCircleOutline
          className={clsx(
            'absolute w-16 h-16 bg-base-100',
            'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
            'rounded-full text-primary'
          )}
        />
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
    label: 'Donate now',
    to: DONATE
  },
  {
    label: 'More About Us',
    to: ABOUT,
    color: 'accent'
  }
];
