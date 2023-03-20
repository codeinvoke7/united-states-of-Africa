import React from 'react';
import { africa } from 'assets/images';

function WhoWeAre() {
  return (
    <section className="bg-primary bg-opacity-5">
      <div className="max-w-xl mx-auto p-6 grid md:grid-flow-col-dense place-items-center">
        <h2 className="text-3xl font-bold text-primary text-center md:text-left font-serif">
          Who We Are
        </h2>
        <img
          loading="lazy"
          src={africa}
          role="presentation"
          className="w-full h-full max-h-80 object-cover md:order-2"
        />
        <div className="md:text-left text-center font-serif">
          <p className="mt-4">
            The United States of Africa is a hypothetical concept of a federation of some or all of
            the 55 sovereign states on the continent of Africa. The concept takes its origin from
            Marcus Garvey’s 1924 poem “Hail, United States of Africa.
          </p>
          <p className="mt-4">
            Inspired by Marcus Garvey and other Pan Africanists like Dr. Kwame Nkrumah, Malcolm X
            and Muammar Gaddafi quest for a unified Africa, a Kenyan Pan Africanist Daniel Mwambonu
            started United States of Africa project on 7 March 2016 through a Facebook Page but
            thereafter it attracted following worldwide.
          </p>
          <p className="mt-4">
            The United States of Africa was registered as a non profit in Dallas, Texas in the
            United States on 30th June 2020 with the assistance of Ethiopia’s first international
            model Yeharerwerk Gashaw and also the first Vice President of the United States of
            Africa. United States of Africa continues to champion unity of all people of African
            descent and foster political union of Sovereign African states in Africa, Caribbean,
            Melanesia and black nations globally. We affirm our undying resolve to provide solutions
            to problems affecting Africa and its people throughout the world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
