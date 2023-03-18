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
        {partnersIcon.map((partnerLogo, index) => (
          <img key={partnerLogo + index} src={partnerLogo} className="max-h-16 aspect-auto" />
        ))}
      </div>

      <Link to={PARTNER} className="btn rounded-full px-6 normal-case place-self-center">
        Partner with Us <RxCaretRight className="w-7 h-7" />
      </Link>
    </section>
  );
}

const partnersIcon: string[] = [
  ahm2,
  bmhm,
  bwc,
  fwpp,
  gpan,
  gpanqc,
  iheba,
  skv,
  zuma,
  dmm,
  palc,
  sbtm,
  swwp,
  zumaridiChat
];
