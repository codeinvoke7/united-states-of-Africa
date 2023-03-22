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
            DoTI, the United States of Africa Department of Technology and Innovations, is a crucial
            driving force in steering Africa towards rapid technological advancement. Our strategic
            technology plan ensures that our decisions today have a positive impact on future
            generations. Our department manages and showcases technological innovations at USAF and
            is currently advancing AI, Machine Learning, and Natural Language Processing to push
            Africa to the forefront of technological innovation. With our commitment to thoughtful
            decision-making, we are constantly exploring new opportunities to empower the people of
            Africa through technology.
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
              At United States of Africa, we're dedicated to advocating for the human rights of all
              people, including those who are often marginalized and oppressed. One of our ongoing
              campaigns is the Afrika for West Papua campaign, which aims to raise awareness of the
              human rights violations being committed against indigenous people in West Papua by the
              Indonesian military.
              <br />
              We believe that the genocide of black people in West Papua is an urgent human rights
              issue, and we're committed to doing everything in our power to bring an end to this
              injustice. Through our campaign, we've been able to raise awareness, mobilize support,
              and apply pressure on governments and international organizations to take action.
              <br />
              Our efforts have already had a significant impact, and we're proud to have played a
              role in raising the profile of this issue and building momentum for change. But there
              is still much work to be done, and we're committed to continuing our fight until the
              human rights of all people are respected and protected, and the black genocide in West
              Papua is brought to an end. Join us in our mission to make a difference and create a
              better world for everyone.
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
            At the Mental Health Department of United States of Africa, we're dedicated to improving
            mental health outcomes for individuals of all ages across the continent. Our mission is
            to develop a continental mental health strategy, eradicate stigma, and increase access
            to evidence-based clinical research and services, including encouraging an
            African-centered approach to treatment and diagnosis.
            <br />
            We believe that mental health care should be culturally responsive and grounded in the
            unique experiences and perspectives of African communities. That's why we're advancing
            an African-centered approach to mental health care, which takes into account the
            historical, cultural, and social factors that impact mental health and well-being.
            <br />
            Our efforts also include advancing mental health equity through research. We believe
            that everyone deserves access to high-quality mental health care, regardless of their
            background or circumstances. That's why we're committed to conducting research that
            identifies and addresses disparities in mental health care access and outcomes.
            <br />
            Join us in our mission to promote mental wellness, increase access to culturally
            responsive care, and create a brighter, more equitable future for all.
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
              At the Department of Pan Africanism and Afrocentric Education at United States of
              Africa, our mission is to promote Pan Africanism as a tool for empowering people of
              African descent across the diaspora. We believe that education is a powerful tool for
              achieving this goal.
              <br />
              To this end, we are developing a comprehensive educational curriculum and programs
              that will be aligned with the rich cultural beliefs and common historical heritage of
              peoples of African descent. We believe that education should be rooted in the unique
              experiences, perspectives, and histories of African communities.
              <br />
              Our curriculum will incorporate Afrocentric principles and teachings, with the aim of
              providing students with a comprehensive understanding of their cultural heritage and
              the historical struggles and triumphs of the African people. Through our programs, we
              aim to empower individuals and communities to take an active role in the Pan African
              movement and contribute to building a brighter future for all.
              <br />
              Join us in our mission to promote Pan Africanism and Afrocentric education, and to
              empower people of African descent to become leaders, innovators, and change-makers in
              their communities and beyond
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
