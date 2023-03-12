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
        <p className="text-5xl font-bold font-serif py-4">Who We Are</p>
        <p className="text-xl tracking-widest">
          The United States of Africa is registered as a non profit corporation in Texas, United
          States.
        </p>

        <p className="mt-6">
          The United States of Africa Mission seeks to unify not only African states, people of
          African descent worldwide, the Caribbean and Melanesian islands, but also indigenous Black
          communities in Asia and throughout the world. Our mission is to bring together individuals
          and communities from all parts of the world that share a common heritage and a vision for
          a better future.
        </p>

        <p className="mt-6">
          By fostering a spirit of cooperation and collaboration among all peoples of African
          descent, including those in Asia , Australia and around the globe we can build a powerful
          movement towards unity and progress. Through our shared commitment to a brighter future,
          we can overcome the challenges facing our communities and create a society that is defined
          by justice, equality, and prosperity.
        </p>

        <p>
          We recognize the unique struggles and experiences of indigenous Black communities in Asia,
          Australia and are committed to amplifying their voices and fighting for their rights. We
          believe that their inclusion in our movement is critical to achieving our shared goals of
          unity and empowerment.
        </p>

        <div className="flex gap-4 my-6 flex-wrap">
          <Link to={DONATE} className="btn rounded-full px-6 gap-2 normal-case">
            Donate now
            <RxCaretRight className="w-6 h-6" />
          </Link>
          <Link to={ABOUT} className="btn btn-accent rounded-full px-6 gap-2 normal-case">
            More About Us
            <RxCaretRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <div className="place-self-center relative max-w-[24rem]">
        <img src={videoPlaceholder} className="aspect-square w-full h-full" />
        <MdPlayCircleOutline
          className={clsx(
            'btn btn-circle absolute bg-base-100 text-primary',
            'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
          )}
        />
      </div>
    </section>
  );
}
