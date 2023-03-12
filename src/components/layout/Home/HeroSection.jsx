import { Link } from 'react-router-dom';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { africaMaskBackground, missionBackground, yellowLine } from 'assets/images';

export default function HeroSection() {
  return (
    <section className="relative grid mx-auto my-8 md:my-16 max-w-xl p-4 md:p-20 grid-cols-1 md:grid-cols-[55%,1fr]">
      <div className="px-3">
        <h1 className="text-5xl font-bold font-serif mb-2 text-accent">United Beyond Borders</h1>
        <img src={yellowLine} className="object-contain h-24 w-[85%] object-left-bottom" />

        <p className="text-lg font-bold my-4">
          The United States of Africa advocates for the interests of every man, woman, boy child;
          it’s a vision so compelling both to the old and young people of African descent worldwide.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Link className="btn px-6 rounded-full gap-2">
            Donate now <RxCaretRight className="w-6 h-6" />
          </Link>
          <Link className="btn px-6 rounded-full gap-2 btn-accent">
            Become a Supporter <RxCaretRight className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <div
        className="bg-no-repeat bg-contain bg-right-top absolute md:w-1/2 w-[55%] h-full right-0 md:right-16 -z-10"
        style={{
          backgroundImage: `url(${missionBackground})`,
          maskImage: `url(${africaMaskBackground})`,
          WebkitMaskImage: `url(${africaMaskBackground})`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat'
        }}
      ></div>

      <div className="form-control flex-row justify-center col-span-full mt-12 gap-4">
        <input className="radio radio-accent" type="radio" />
        <input className="radio" type="radio" checked aria-checked={true} />
        <input className="radio" type="radio" />
      </div>

      <div className="absolute max-w-xl flex justify-between mx-auto w-full p-5 top-1/2 -translate-y-1/2">
        <button className="btn btn-circle hover:bg-opacity-30 bg-opacity-30 text-base-100">
          <RxCaretLeft className="w-8 h-8" />
        </button>

        <button className="btn btn-circle hover:bg-opacity-30 bg-opacity-30 text-base-100">
          <RxCaretRight className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
