import { faqImg, customerSupport } from 'assets/images';
import { MapSection } from 'components/layout/ContactUs';

export const ContactUsView = () => {
  return (
    <>
      <section className="font-serif">
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
          <div className="bg-[rgba(0,0,0,0.5)] text-[#fff] absolute top-0 left-0 w-full h-full flex flex-col text-center justify-center px-2">
            <h2 className="text-lg pb-2">
              Home - <span className="text-[#07AA3D]">Contact Us</span>
            </h2>
            <h1 className="pb-2 text-2xl">Get in touch with us</h1>
            <p>We are always happy to hear from you. Find out how and where you can reach us.</p>
          </div>
        </div>
        <div className="md:px-20 px-6 md:flex md:gap-24">
          <div className="mb-14 md:basis-1/2">
            <img className="w-full" src={faqImg} alt="image for frequently asked questions" />
            <h1 className="text-2xl font-semibold text-[#25373F]">Frequently Asked Questions</h1>
            <p className="text-[#25373F] text-lg ">
              Our knowledge based resources provides you with answers to common questions others are
              asking.
            </p>
          </div>
          <div className="mb-14 md:basis-1/2">
            <img className="w-full" src={customerSupport} alt="image for customer support" />
            <h1 className="text-2xl font-semibold text-[#25373F]">Customer Support</h1>
            <p className="text-[#25373F] text-lg">
              Write to our friendly customer experience specialists and get a reply within 24 hours.
            </p>
          </div>
        </div>
      </section>
      <MapSection />
    </>
  );
};
