import React from 'react';
import { NewsCarousel } from 'components/modules/carousels';

export default function NewsSection() {
  return (
    <section className="mx-auto my-16 max-w-xl p-5">
      <h2 className="text-center font-serif text-5xl mb-6 font-bold">Check Our Latest News</h2>

      <NewsCarousel />
    </section>
  );
}
