import React from 'react';
import { WhyVolunteer } from 'assets/images';
import './volunteer.css';

const WhySection = () => {
  return (
    <section className="font-serif p-[50px]" style={{ backgroundColor: '#EEEEF6' }}>
      <h2 className="text-center text-[35px] font-bold mb-[30px]" style={{ color: '#5553A3' }}>
        Why Volunteer With Us?
      </h2>

      <div className="flex flex-col justify-center gap-x-2.5 lg:flex-row">
        <div className="">
          <img
            role="presentation"
            loading="lazy"
            src={WhyVolunteer}
            className="w-full max-h-[80vh]"
          />
        </div>

        <div className="lg:ml-[50px]">
          <ol role="list" className="list-decimal text-justify">
            <li>
              To establish a Political and Economical Federation in Africa: The United States of
              Africa Federation (USAF) for Africans at home or Abroad.
            </li>
            <li>To unify the indigenous people of African/Black descent worldwide.</li>
            <li>To eradicate corruption and promote good governance in Africa.</li>
            <li>To Industrialize Africa and enable Africans to reach their full potential.</li>
            <li>To promote peace, eliminate tribalism, nepotism and separatism.</li>
            <li>
              To promote international cooperation which respects the rights of Africa to utilize
              its natural resources for her own development.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
