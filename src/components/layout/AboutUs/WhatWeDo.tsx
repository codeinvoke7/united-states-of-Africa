import {
  afrocentric,
  afrocentricMobile,
  humanRights,
  humanRightsMobile,
  mentalHealth,
  mentalHealthMobile,
  technologyInnovation,
  technologyInnovationMobile
} from 'assets/images';
import React from 'react';

export default function WhatWeDo() {
  return (
    <section className="">
      <h1 className="text-3xl text-primary font-bold mb-2 max-w-xl mx-auto px-4">What We Do</h1>
      <div className="grid gap-6 md:grid-flow-col place-items-center max-w-xl mx-auto p-4">
        <picture>
          <source srcSet={technologyInnovation} media="(min-width: 48rem)" />
          <img
            loading="lazy"
            src={technologyInnovationMobile}
            className="w-full h-full object-cover max-h-72"
          />
        </picture>

        <div className="flex flex-col place-content-center">
          <h3 className="mb-6 text-xl font-bold">Technology and Innovations</h3>
          <p>
            To establish a Political and Economical Federation in Africa: The United States of
            Africa Federation (USAF) for Africans at home or Abroad. To establish a Political and
            Economical Federation in Africa: The United States of Africa Federation (USAF) for
            Africans at home or Abroad. To establish a Political and Economical Federation in
            Africa: The United States of Africa Federation (USAF) for Africans at home or Abroad. To
            establish a Political and Economical Federation in Africa: The United States of Africa
            Federation (USAF) for Africans at home or Abroad. To establish a Political and
            Economical Federation in Africa: The United States of Africa Federation (USAF) for
            Africans at home or Abroad. To establish a Political and Economical Federation in
            Africa: The United States of Africa Federation (USAF) for Africans at home or Abroad.
          </p>
        </div>
      </div>

      <div className="bg-primary bg-opacity-5">
        <div className="grid gap-6 md:grid-flow-col place-items-center max-w-xl mx-auto p-4">
          <picture className="md:order-2">
            <source srcSet={humanRights} media="(min-width: 48rem)" />
            <img
              loading="lazy"
              src={humanRightsMobile}
              className="w-full h-full object-cover max-h-72"
            />
          </picture>
          <div className="flex flex-col place-content-center mt-6">
            <h3 className="mb-6 text-xl font-bold">Human Rights</h3>
            <p>
              To establish a Political and Economical Federation in Africa: The United States of
              Africa Federation (USAF) for Africans at home or Abroad. To establish a Political and
              Economical Federation in Africa: The United States of Africa Federation (USAF) for
              Africans at home or Abroad. To establish a Political and Economical Federation in
              Africa: The United States of Africa Federation (USAF) for Africans at home or Abroad.
              To establish a Political and Economical Federation in Africa: The United States of
              Africa Federation (USAF) for Africans at home or Abroad. To establish a Political and
              Economical Federation in Africa: The United States of Africa Federation (USAF) for
              Africans at home or Abroad. To establish a Political and Economical Federation in
              Africa: The United States of Africa Federation (USAF) for Africans at home or Abroad.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-flow-col place-items-center max-w-xl mx-auto p-4">
        <picture>
          <source srcSet={mentalHealth} media="(min-width: 48rem)" />
          <img
            loading="lazy"
            src={mentalHealthMobile}
            className="w-full h-full object-cover max-h-72"
          />
        </picture>

        <div className="flex flex-col place-content-center">
          <h3 className="mb-6 text-xl font-bold">Mental Health</h3>
          <p>
            To establish a Political and Economical Federation in Africa: The United States of
            Africa Federation (USAF) for Africans at home or Abroad. To establish a Political and
            Economical Federation in Africa: The United States of Africa Federation (USAF) for
            Africans at home or Abroad. To establish a Political and Economical Federation in
            Africa: The United States of Africa Federation (USAF) for Africans at home or Abroad. To
            establish a Political and Economical Federation in Africa: The United States of Africa
            Federation (USAF) for Africans at home or Abroad. To establish a Political and
            Economical Federation in Africa: The United States of Africa Federation (USAF) for
            Africans at home or Abroad. To establish a Political and Economical Federation in
            Africa: The United States of Africa Federation (USAF) for Africans at home or Abroad.
          </p>
        </div>
      </div>

      <div className="bg-primary bg-opacity-5">
        <div className="grid gap-6 md:grid-flow-col place-items-center max-w-xl mx-auto p-4">
          <picture className="md:order-2">
            <source srcSet={afrocentric} media="(min-width: 48rem)" />
            <img
              loading="lazy"
              src={afrocentricMobile}
              className="w-full h-full object-cover max-h-72"
            />
          </picture>
          <div className="flex flex-col place-content-center mt-6">
            <h3 className="mb-6 text-xl font-bold">Afrocentric Education</h3>
            <p>
              To establish a Political and Economical Federation in Africa: The United States of
              Africa Federation (USAF) for Africans at home or Abroad. To establish a Political and
              Economical Federation in Africa: The United States of Africa Federation (USAF) for
              Africans at home or Abroad. To establish a Political and Economical Federation in
              Africa: The United States of Africa Federation (USAF) for Africans at home or Abroad.
              To establish a Political and Economical Federation in Africa: The United States of
              Africa Federation (USAF) for Africans at home or Abroad. To establish a Political and
              Economical Federation in Africa: The United States of Africa Federation (USAF) for
              Africans at home or Abroad. To establish a Political and Economical Federation in
              Africa: The United States of Africa Federation (USAF) for Africans at home or Abroad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
