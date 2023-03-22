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
            Who we Are: Welcome to United States of Africa! We are a non-profit corporation based in
            Texas, USA, dedicated to promoting unity and cooperation among African states and people
            of African descent around the world.
          </p>

          <p className="mt-4">
            We strongly believe that technology can be a powerful conduit to achieve greater social
            and economic impact, and to connect and empower Africans globally. That's why we're
            committed to harnessing the power of technology to drive growth and development across
            the African continent.
          </p>
          <p className="mt-4">
            Through our commitment to Pan Africanism, we strive to unite Africans and foster
            collaboration, as we work towards our shared goal of building a prosperous and united
            Africa. We recognize the critical role that technological advancement plays in achieving
            sustainable growth and development, and we invite you to join us in our mission to
            advance the technological capabilities of Africa and build a brighter future for all
            Africans. Let's create the Africa we want.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
