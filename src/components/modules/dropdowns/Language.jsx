import PropTypes from 'prop-types';
import { useState } from 'react';
import clsx from 'clsx';
import { DropdownIcon, FlagIcon } from 'components/widgets/icons';

export default function Language({ className }) {
  const [active, setActive] = useState(0);

  const languages = [
    {
      name: 'English',
      code: 'en',
      icon: <FlagIcon country="gb" />,
      abbreviation: 'Eng'
    },
    {
      name: 'French',
      code: 'fr',
      icon: <FlagIcon country="fr" />,
      abbreviation: 'Fra'
    }
  ];

  const changeLanguage = (index) => {
    setActive(index >= languages.length ? 0 : index);
  };

  const getActiveLanguage = () => languages.find((_, index) => index === active) || null;

  return (
    <div role="listbox" className={clsx(['dropdown group', className])}>
      <button type="button" className="btn btn-ghost gap-1 flex-nowrap">
        {getActiveLanguage()?.icon}
        <span className="capitalize w-[3ch]">{getActiveLanguage()?.abbreviation}</span>
        <DropdownIcon down className="group-hover:-rotate-180 transition-transform" />
      </button>
      <ul tabIndex={0} className={'dropdown-content menu bg-base-100 p-2 shadow rounded-box'}>
        {languages.map((language, index) => (
          <li key={language?.code} onClick={() => changeLanguage(index)} className="items-center">
            <a className="px-6 rounded-none bg-opacity-50 capitalize">
              {language?.icon}
              <span>{language?.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

Language.propTypes = {
  className: PropTypes.string
};
