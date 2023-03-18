import React from 'react';
import { usafFlag } from 'assets/icons';
import { LanguageDropdown } from 'components/modules/dropdowns';
import { SocialGroupButton } from 'components/widgets/buttons';

export default function Header() {
  return (
    <header className="flex flex-col px-6 py-3 mx-auto items-center max-w-xl z-50">
      <div className="flex gap-1.5 items-center justify-between w-full">
        <img src={usafFlag} className="h-6 w-9 rounded-sm" role="presentation" alt="USAF logo" />
        <span className="truncate mr-auto">An official website of the United States of Africa</span>

        {/* Desktop social buttons */}
        <div className="ml-auto mr-8 hidden md:flex">
          <div className="flex gap-1 items-center">
            <span>Folow us:</span>
            <SocialGroupButton className="btn-sm" />
          </div>
        </div>

        <LanguageDropdown className="dropdown-bottom dropdown-end dropdown-hover justify-self-end" />
      </div>

      {/* Mobile social buttons */}
      <div className="md:hidden">
        <div className="flex gap-1 items-center">
          <span>Folow us:</span>
          <SocialGroupButton className="btn-sm" />
        </div>
      </div>
    </header>
  );
}
