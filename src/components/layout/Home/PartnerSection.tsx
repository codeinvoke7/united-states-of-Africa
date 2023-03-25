import {
  ahm2,
  bmhm,
  bwc,
  fwpp,
  gpan,
  gpanqc,
  iheba,
  palc,
  sbtm,
  skv,
  zuma,
  swwp,
  dmm,
  zumaridiChat
} from 'assets/icons';
import { PARTNER } from 'navigation/CONSTANTS';
import React from 'react';
import { RxCaretRight } from 'react-icons/rx';
import { Link } from 'react-router-dom';

export default function PartnerSection() {
  return (
    <section className="max-w-full md:max-w-xl mx-auto  my-10 grid">
      <h2 className="text-3xl px-3 font-bold font-serif">Our partners</h2>

      <div className="flex gap-3 my-10 flex-wrap place-content-center">
        {partnersIcon.map(({ alt, image }, index) => (
          <img alt={alt} key={alt + image + index} src={image} className="max-h-16 aspect-auto" />
        ))}
      </div>

      <Link to={PARTNER} className="btn rounded-full px-6 normal-case place-self-center">
        Partner with Us <RxCaretRight className="w-7 h-7" />
      </Link>
    </section>
  );
}

interface PartnerType {
  image: string;
  alt: string;
}

const partnersIcon: PartnerType[] = [
  { image: ahm2, alt: 'African History Month' },
  { image: bmhm, alt: 'Black mental health matters' },
  { image: bwc, alt: 'bwc' },
  { image: fwpp, alt: 'fwpp' },
  { image: gpan, alt: 'gpan' },
  { image: gpanqc, alt: 'gpanqc' },
  { image: iheba, alt: 'iheba' },
  { image: skv, alt: 'skv' },
  { image: zuma, alt: 'zuma' },
  { image: dmm, alt: 'dmm' },
  { image: palc, alt: 'palc' },
  { image: sbtm, alt: 'sbtm' },
  { image: swwp, alt: 'swwp' },
  { image: zumaridiChat, alt: 'zumaridiChat' }
];
