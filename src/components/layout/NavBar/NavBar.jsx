import { usafLogo } from 'assets/icons';
import clsx from 'clsx';
import { NavLinksDropdown } from 'components/modules/dropdowns';
import { NavLinkButton } from 'components/widgets/buttons';
import { Divide } from 'hamburger-react';
import {
  ABOUT,
  BECOME_A_PATRON,
  EVENTS,
  FUNDRAISE,
  GIVE_US_A_REVIEW,
  HOLIDAY,
  HOME,
  PROGRAMS,
  VOLUNTEER
} from 'navigation/CONSTANTS';
import { useMemo } from 'react';
import { useState } from 'react';

const navButtons = [
  {
    to: HOME,
    label: 'Home'
  },
  {
    to: ABOUT,
    label: 'About US'
  },
  {
    label: 'Get Involved',
    dropdownLinks: [
      {
        label: 'Activity',
        className: 'dropdown-left ',
        dropdownLinks: [
          {
            to: EVENTS,
            label: 'Events'
          },
          {
            to: PROGRAMS,
            label: 'Programs'
          },
          {
            to: HOLIDAY,
            label: 'Holiday'
          }
        ]
      },
      {
        to: FUNDRAISE,
        label: 'Fundraise'
      },
      {
        to: GIVE_US_A_REVIEW,
        label: 'Give us a review'
      },
      {
        to: VOLUNTEER,
        label: 'Volunteer'
      },
      {
        to: BECOME_A_PATRON,
        label: 'Become a Patron'
      }
    ]
  },
  {
    to: '/departments',
    label: 'Departments'
  },
  {
    to: '/faq',
    label: "FAQ's"
  },
  {
    to: '/sign_in',
    label: 'Sign in / Create Account',
    signIn: true
  }
];

export default function NavBar() {
  const [opened, setOpened] = useState(false);

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
            />
          );

        return (
          <NavLinkButton key={label + index} to={to} isAcccent={signIn}>
            {label}
          </NavLinkButton>
        );
      }),
    []
  );

  return (
    <nav className="bg-base-100 drop-shadow-lg sticky -top-1">
      <div className={clsx('grid items-center px-6 py-4', 'md:flex mx-auto max-w-xl')}>
        <div className="flex items-center mr-auto w-full md:w-auto">
          <img role="presentation" src={usafLogo} className="w-16 md:w-20 mr-auto" />

          <span className="md:hidden">
            <Divide toggle={setOpened} toggled={opened} />
          </span>
        </div>

        {/* Mobile view */}
        <div
          className={clsx('flex flex-col gap-1 md:hidden mx-auto', {
            'invisible h-0 mt-0': !opened,
            'mt-8 mb-3': opened
          })}
        >
          {buttonList}
        </div>

        {/* Destop view */}
        <div className={clsx('hidden md:flex gap-1')}>{buttonList}</div>
      </div>
    </nav>
  );
}
