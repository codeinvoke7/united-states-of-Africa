import { USAFObjectives, USAFObjectivesMobile } from 'assets/images';
import React from 'react';

export default function OurObjectives() {
  return (
    <section className="max-w-xl mx-auto">
      <div className="hidden md:block p-4">
        <img src={USAFObjectives} className="w-full" alt="USAF objectives" />
      </div>

      <div className="md:sr-only p-4 ">
        <img src={USAFObjectivesMobile} className="w-full mx-auto max-h-64" alt="USAF objectives" />

        <h3 className="text-lg text-primary font-semibold text-center border-b-4 border-error py-3 mb-2">
          The United States of Africa Federation (USAF) will establish a political and economic
          federation in Africa
        </h3>

        <ul className="list-disc pl-6 font-semibold">
          <div className="text-error">
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
          </div>

          <div>
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

            <div className="text-accent">
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
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
}
