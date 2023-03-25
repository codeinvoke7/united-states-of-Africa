import { objectives } from 'assets/icons';
import React from 'react';

export default function OurObjectives() {
  return (
    <section className="max-w-xl mx-auto">
      <div className="p-4 grid grid-flow-col gap-4 place-items-center">
        <img
          src={objectives}
          className="w-full mx-auto max-h-72 aspect-square md:order-2 order-1"
          alt="USAF objectives"
        />

        <div className="">
          <h3 className="text-lg  font-semibold py-3 mb-2 text-center">
            The United States of Africa Federation (USAF) will establish a political and economic
            federation in Africa
          </h3>
          <ul className="list-disc pl-6">
            <li>Promote unity and solidarity among people of African descent worldwide.</li>
            <li>
              Combat corruption and promote good governance to ensure transparency, accountability,
              and stability in African societies.
            </li>
            <li>
              Lead Africa towards self-reliance and reduce foreign dependency through economic
              development and trade partnerships.
            </li>
            <li>
              Promote Afrocentric education and provide universal healthcare to improve the
              well-being of all Africans.
            </li>
            <li>
              Preserve and promote African values, history, and culture, and protect cultural
              heritage.
            </li>
            <li>
              Foster science, technology, and innovation in Africa to drive progress and growth.
            </li>
            <li>
              To strengthen Africa's position in the global community and advance African interests.
            </li>
            <li>
              Ensure food security and promote agricultural development to support sustainable and
              equitable economic growth.
            </li>
            <li>
              Industrialize Africa and support individuals and communities to reach their full
              potential through job creation and skill-building initiatives.
            </li>
            <li>
              Foster international cooperation that respects Africa's right to use its natural
              resources for its own development.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
