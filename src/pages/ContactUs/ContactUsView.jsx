import React from 'react';
import { faqImg, customerSupport } from 'assets/images';

export const ContactUsView = () => {
  return (
    <section className="p-8">
      <div className="mb-10">
        <h2>Home Contact Us</h2>
        <h1>Get in touch with us</h1>
        <p>We are always happy to hear from you. Find out how and where you can reach us.</p>
      </div>
      <div className="mb-16 font-serif">
        <img src={faqImg} alt="image for frequently asked questions" />
        <h1 className="text-2xl font-semibold text-[#25373F]">Frequently Asked Questions</h1>
        <p className="text-[#25373F] text-lg ">
          Our knowledge based resources provides you with answers to common questions others are
          asking.
        </p>
      </div>
      <div className="font-serif">
        <img src={customerSupport} alt="image for customer support" />
        <h1 className="text-2xl font-semibold text-[#25373F]">Customer Support</h1>
        <p className="text-[#25373F] text-lg">
          Write to our friendly customer experience specialists and get a reply within 24 hours.
        </p>
      </div>
    </section>
  );
};
