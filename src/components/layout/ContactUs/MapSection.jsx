import { mapImg } from 'assets/images';
import { email, address, phone } from 'assets/icons';

export default function MapSection() {
  return (
    <section className="md:px-20 px-6 font-serif md:flex max-w-xl mx-auto">
      <div className="bg-neutral-50 text-neutral flex flex-col justify-center items-center basis-4/12 pt-10 px-1 md:px-16 text-center">
        <span className="pb-5 text-lg">Email</span>
        <img src={email} alt="email message" />
        <span className="pb-10 pt-5 text-lg">info@usafrikagov.com</span>
        <p className="border-b border-[rgba(37, 55, 63, 0.3)] w-[236px]"></p>
        <span className="pt-10 pb-5 text-lg">Address</span>
        <img src={address} alt="address icon" />
        <p className="pt-5 pb-10 text-lg">
          5900 Balcones Drive STE 100 Austin, TX 78731, Austin, Texas, United States Of America
        </p>
        <p className="border-b border-[rgba(37, 55, 63, 0.3)] w-[236px]"></p>
        <span className="pt-10 pb-5 text-lg">Phone</span>
        <img src={phone} alt="phone icon" />
        <span className="pb-5 pt-5 text-lg">+1 (480) 547-5888</span>
        <span className="pb-10 text-lg">+254700614290</span>
      </div>
      <div className="basis-8/12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d860.8316815843318!2d-97.75387434279057!3d30.34166304884969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1679791001434!5m2!1sfr!2scm"
          className="w-full h-full border-0"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
