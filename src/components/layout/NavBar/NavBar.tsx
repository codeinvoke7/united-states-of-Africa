import React from 'react';
import { usafLogo } from 'assets/icons';
import clsx from 'clsx';
import { NavLinksDropdown } from 'components/modules/dropdowns';
import { NavLinkButton } from 'components/widgets/buttons';
import { Divide } from 'hamburger-react';
import {
  EVENTS,
  HOLIDAY,
  HOME,
  VOLUNTEER,
  DEPARTMENTS,
  FAQS,
  SIGN_IN,
  DONATE,
  WORKFORCE,
  CAREERS,
  CONTACT_US
} from 'navigation/CONSTANTS';
import { useMemo } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { pageHeaderColorContext } from 'components/context';

export default function NavBar() {
  const [opened, setOpened] = useState(false);
  const context = useContext(pageHeaderColorContext);

  const buttonList = useMemo(
    () =>
      navButtons.map(({ label, to, signIn, dropdownLinks }, index) => {
        if (Array.isArray(dropdownLinks))
          return (
            <NavLinksDropdown
              key={label + index}
              label={label}
              dropdownLinks={[...dropdownLinks]}
              className="dropdown-center"
              defaultIcon
              handleClick={() => setOpened(false)}
              endDropdownIcon={undefined}
              startDropdownIcon={undefined}
            />
          );

        return (
          <NavLinkButton
            key={label + index}
            to={to || ''}
            isAcccent={signIn}
            onClick={() => setOpened(false)}
          >
            {label}
          </NavLinkButton>
        );
      }),
    []
  );

  return (
    <nav
      className="bg-primary drop-shadow sticky -top-1 isolate z-40 text-primary-content"
      data-theme={context?.theme}
    >
      <div className="shadow-md sticky -top-1 z-40">
        <div className={clsx('grid items-center px-6 py-4', 'md:flex mx-auto max-w-xl')}>
          <div className="flex items-center mr-auto w-full md:w-auto">
            <img
              role="presentation"
              src={usafLogo}
              className="w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20 mr-auto"
            />
            <span className="md:hidden">
              <Divide toggle={setOpened} toggled={opened} />
            </span>
          </div>
          {/* Mobile view */}
          <div
            className={clsx('grid gap-1 md:hidden mx-auto px-8 transition-[height] duration-200', {
              'mt-0 h-0 animate-backOutUp animate-duration-200 overflow-hidden': !opened,
              'mt-8 mb-3 animate-backInDown h-full': opened
            })}
          >
            {buttonList}
          </div>
          {/* Tablet and Destop view */}
          <div className={clsx('hidden md:grid grid-flow-col gap-1')}>{buttonList}</div>
        </div>
      </div>
    </nav>
  );
}

type NavButtonType = {
  label: string;
  to?: string;
  signIn?: boolean;
  dropdownLinks?: { to: string; label: string }[];
};

const navButtons: NavButtonType[] = [
  {
    to: HOME,
    label: 'Home'
  },
  {
    label: 'About Us',
    dropdownLinks: [
      {
        to: WORKFORCE,
        label: 'Workforce'
      },
      {
        to: CAREERS,
        label: 'Careers'
      },
      {
        to: CONTACT_US,
        label: 'Contact Us'
      }
    ]
  },
  {
    label: 'Get Involved',
    dropdownLinks: [
      {
        to: DONATE,
        label: 'Donate'
      },
      {
        to: VOLUNTEER,
        label: 'Volunteer'
      },
      {
        to: EVENTS,
        label: 'Events'
      },
      {
        to: HOLIDAY,
        label: 'Holidays'
      }
    ]
  },
  {
    to: DEPARTMENTS,
    label: 'Departments'
  },
  {
    to: FAQS,
    label: 'FAQs'
  },
  {
    to: SIGN_IN,
    label: 'Sign in / Create Account',
    signIn: true
  }
];
