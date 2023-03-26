import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCaretDown } from 'react-icons/ai';

export default function OurStory() {
  return (
    <section className="bg-primary bg-opacity-5">
      <div className="max-w-xl mx-auto p-6">
        <h2 className="text-xl font-bold">Our Story</h2>
        <p>
          The United States of Africa has a rich history dating back to the early 20th century when
          Pan-Africanists like Marcus Garvey and Kwame Nkrumah first envisioned a unified African
          state.
        </p>
        <p>
          In the decades following African independence from European colonial powers, there were
          several attempts to promote regional integration and cooperation, such as the
          establishment of the Organization of African Unity (OAU) in 1963. However, progress
          towards a united Africa was often hindered by conflicts between African states and
          differing political ideologies.
        </p>
        <p>
          The idea gained momentum when Muammar Gaddafi, former leader of Libya, proposed a single
          African military force, currency, and passport at the African Union in 2009. While some
          African leaders were skeptical of the idea, others such as Abdoulaye Wade of Senegal
          expressed optimism that the United States of Africa could exist as early as 2017...
        </p>

        <Link to={''} className="link link-hover flex mt-6">
          View more <AiOutlineCaretDown className="w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}
