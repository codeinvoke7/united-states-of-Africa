import { usafLogo } from 'assets/icons';
import clsx from 'clsx';
import { FooterLink, SocialGroupButton } from 'components/widgets/buttons';
import React from 'react';

const contactLinks = [
  {
    to: '/',
    label: 'Programs'
  },
  {
    to: '/',
    label: 'Donate'
  },
  {
    to: '/',
    label: 'Ongoing Projects'
  },
  {
    to: '/',
    label: 'Privacy Policy'
  },
  {
    to: '/',
    label: 'Terms & Condition'
  },
  {
    to: '/',
    label: 'News'
  },
  {
    to: '/',
    label: 'Events'
  },
  {
    to: '/',
    label: 'Workforce'
  }
];

const otherLinks = [
  {
    to: '/',
    label: 'FAQs'
  },
  {
    to: '/',
    label: 'Reviews'
  },
  {
    to: '/',
    label: 'Subscribe'
  }
];

export default function Footer() {
  return (
    <div className="bg-neutral text-neutral-content">
      <footer
        className={clsx(
          'footer px-6 py-6 gap-4 sm:gap-10 max-w-xl mx-auto grid-flow-row-dense',
          'lg:grid-cols-[1fr,minmax(min-content,10rem),minmax(min-content,10rem),1fr]',
          'grid-cols-[minmax(auto,1fr),minmax(auto,1fr)] sm:grid-cols-3'
        )}
      >
        <div className="sm:col-span-full lg:col-auto place-items-center w-full place-self-center">
          <img
            src={usafLogo}
            className="w-28 h-28 sm:w-44 sm:h-44 lg:w-36 lg:h-36"
            role="presentation"
            alt="USAF logo"
          />
          <p className="sm:text-xl font-semibold text-center max-w-xs">
            The united states of Africa is registered as a Non Profit Corporation in Texas, United
            States of Africa.
          </p>
        </div>

        <div className="place-items-center lg:place-items-start w-full">
          <span className="footer-title">About us</span>
          {contactLinks.map(({ to, label }, index) => (
            <FooterLink key={label + index} to={to}>
              {label}
            </FooterLink>
          ))}
        </div>

        <div className="order-last lg:order-none place-items-center lg:place-items-start w-full">
          <span className="footer-title">Links</span>
          {otherLinks.map(({ to, label }, index) => (
            <FooterLink key={label + index} to={to}>
              {label}
            </FooterLink>
          ))}
        </div>

        <div className="place-items-center lg:place-items-start w-full">
          <span className="footer-title">Contact Us</span>
          <span className="text-lg">
            5900 Balcones Drive STE 100 Austin, TX 78731, Austin, Texas, United States of America
          </span>
          <div className="flex gap-2 flex-wrap">
            <SocialGroupButton className="btn-xs sm:btn-sm" />
          </div>
        </div>
      </footer>

      <footer
        className={clsx(
          'footer footer-center text-xl',
          'border-t border-base-100 border-opacity-70',
          'px-6 py-8 max-w-xl mx-auto'
        )}
      >
        &copy; Copyright 2022 USAF all rights reserved
      </footer>
    </div>
  );
}
