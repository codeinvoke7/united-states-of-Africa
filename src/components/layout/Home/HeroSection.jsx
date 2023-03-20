import { Link } from 'react-router-dom';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { africaMaskBackground, yellowLine } from 'assets/images';
import { useContext } from 'react';
import { pageHeaderColorContext } from 'components/context';
import clsx from 'clsx';

export default function HeroSection() {
  const context = useContext(pageHeaderColorContext);

  return (
    <section className="bg-primary text-primary-content" data-theme={context?.theme}>
      <div className="relative grid mx-auto py-8 md:py-16 max-w-xl p-4 md:p-20 grid-cols-1 sm:grid-cols-[60%,1fr] md:grid-cols-[55%,1fr]">
        <div className="px-3">
          <h1 className="text-5xl font-bold font-serif mb-2 text-accent">United Beyond Borders</h1>
          <img
            src={yellowLine}
            className="object-contaim max-h-20 w-[65%] sm:w-[80%] object-left-bottom"
          />
          <p className="text-lg font-bold my-4 text-center sm:text-left">
            The United States of Africa advocates for the interests of every man, woman, boy child;
            it’s a vision so compelling both to the old and young people of African descent
            worldwide.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link className="btn px-6 rounded-full gap-2 normal-case">
              Donate now <RxCaretRight className="w-6 h-6" />
            </Link>
            <Link className="btn px-6 rounded-full gap-2 btn-accent normal-case">
              Become a Supporter <RxCaretRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div
          className="bg-no-repeat bg-left-top absolute md:w-1/2 w-[55%] h-full right-0"
          style={{
            backgroundImage: `url(${context.backgroundImage})`,
            maskImage: `url(${africaMaskBackground})`,
            WebkitMaskImage: `url(${africaMaskBackground})`,

            maskSize: 'contain',
            WebkitMaskSize: 'contain',

            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat'
          }}
        >
          <img src={context.backgroundImage} />
        </div>

        <div className="absolute max-w-xl flex justify-between mx-auto w-full p-1 sm:p-5 top-1/2 -translate-y-1/2">
          <button onClick={() => context?.prevTheme()} className="btn btn-circle btn-sm sm:btn-md">
            <RxCaretLeft className="w-7 h-7 text-primary" />
          </button>
          <button
            onClick={() => context?.nextTheme()}
            className="btn btn-circle btn-sm sm:btn-md text-xl"
          >
            <RxCaretRight className="w-7 h-7 text-primary" />
          </button>
        </div>
      </div>

      <div className="grid">
        <div className="form-control flex-row justify-center my-8 gap-8">
          {context?.themes.map((theme, index) => {
            return (
              <button
                type="button"
                className={clsx(
                  'w-5 h-5 rounded-full border-4 border-primary ring-4 ring-secondary',
                  {
                    'bg-secondary': theme === context?.theme
                  }
                )}
                onClick={() => context?.setThemeHero(index)}
                key={theme + index + 'random_text'}
              ></button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
