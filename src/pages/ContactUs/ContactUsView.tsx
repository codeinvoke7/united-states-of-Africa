import React from 'react';
import { faqImg, customerSupport } from 'assets/images';
import { ContactForm, MapSection } from 'components/layout/ContactUs';
import { Seo } from 'Seo';

export const ContactUsView: React.FC = () => {
  const currentUrl = window.location.href;
  const canonicalUrl = currentUrl.split('?')[0].split('#')[0];

  return (
    <>
      <Seo title="ContactUs" description="Get in touch with us" type="article" url={canonicalUrl} />

      <section className="font-serif max-w-xl mx-auto">
        <div
          className="mb-16 pt-24 relative"
          style={{
            backgroundImage: `url(${customerSupport})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '400px'
          }}
        >
          <div className="bg-neutral bg-opacity-20 text-neutral-50 absolute top-0 left-0 w-full h-full flex flex-col text-center justify-center px-2">
            <h2 className="text-lg pb-2">
              Home - <span className="text-accent">Contact Us</span>
            </h2>
            <h1 className="pb-2 text-2xl">Get in touch with us</h1>
            <p>We are always happy to hear from you. Find out how and where you can reach us.</p>
          </div>
        </div>
        <div className="md:px-20 px-6 md:flex md:gap-24">
          <div className="mb-14 md:basis-1/2">
            <img className="w-full" src={faqImg} alt="image for frequently asked questions" />
            <h1 className="text-2xl font-semibold text-neutral">Frequently Asked Questions</h1>
            <p className="text-neutral text-lg ">
              Our knowledge based resources provides you with answers to common questions others are
              asking.
            </p>
          </div>
          <div className="mb-14 md:basis-1/2">
            <img className="w-full" src={customerSupport} alt="image for customer support" />
            <h1 className="text-2xl font-semibold text-neutral">Customer Support</h1>
            <p className="text-neutral text-lg">
              Write to our friendly customer experience specialists and get a reply within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <MapSection />

      <ContactForm />
    </>
  );
};
