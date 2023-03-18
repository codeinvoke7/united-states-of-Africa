import { ReviewCarousel } from 'components/modules/carousels';
import { REVIEWS } from 'navigation/CONSTANTS';
import React from 'react';
import { RxCaretRight } from 'react-icons/rx';
import { Link } from 'react-router-dom';

export default function ReviewSection() {
  return (
    <section className="max-w-xl mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
      <div className="my-auto p-4">
        <h2 className="font-serif text-3xl font-bold">Our Clients Reviews</h2>

        <p className="my-4 text-lg">
          What our clients all the globe are saying about us. We would also like to know how we can
          serve you and the world better. Kindly drop a review for us.
        </p>

        <Link to={REVIEWS} className="btn btn-accent rounded-full px-6 my-3 normal-case">
          Give A Review <RxCaretRight className="w-7 h-7" />
        </Link>
      </div>
      <div>
        <ReviewCarousel />
      </div>
    </section>
  );
}
