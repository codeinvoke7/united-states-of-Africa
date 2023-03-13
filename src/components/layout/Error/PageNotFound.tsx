import React from 'react';
import { error404 } from 'assets/icons';
import { CONTACT_US, HOME } from 'navigation/CONSTANTS';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <section className="w-full h-full grid grid-cols-2 max-w-xl mx-auto px-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-9xl font-bold my-5 font-serif text-center uppercase">
          404 <span className="block text-4xl my-2">SORRY! PAGE NOT FOUND</span>
        </h1>
        <p className="my-2 text-lg text-center">
          The page you are looking for does not exist. If you think something is broken, report a
          problem.
        </p>
        <div className="flex w-3/5 justify-center items-center gap-5 my-5">
          <Link className="btn btn-primary normal-case" to={CONTACT_US}>
            Contact Us
          </Link>
          <Link className="btn btn-secondary normal-case" to={HOME}>
            Back to Homepage
          </Link>
        </div>
      </div>
      <div>
        <img src={error404} className="w-full h-full" alt="" />
      </div>
    </section>
  );
}
