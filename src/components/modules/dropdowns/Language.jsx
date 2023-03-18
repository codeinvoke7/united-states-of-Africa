import PropTypes from 'prop-types';
import { useState } from 'react';
import clsx from 'clsx';
import { DropdownIcon, FlagIcon } from 'components/widgets/icons';

export default function Language({ className }) {
  const [active, setActive] = useState(0);

  const changeLanguage = (index) => {
    setActive(index >= languages.length ? 0 : index);
  };

  const getActiveLanguage = () => languages.find((_, index) => index === active) || null;

  return (
    <div role="listbox" className={clsx(['dropdown group focus-within:dropdown-open', className])}>
      <button type="button" className="btn btn-ghost gap-1 flex-nowrap">
        {getActiveLanguage()?.icon}
        <span className="capitalize w-[3ch]">{getActiveLanguage()?.abbreviation}</span>
        <DropdownIcon down className="group-hover:-rotate-180 transition-transform" />
      </button>
      <ul tabIndex={0} className={'dropdown-content menu bg-base-100 p-2 shadow rounded-box'}>
        {languages.map((language, index) => (
          <li
            key={language?.name + language?.abbreviation + index}
            onClick={() => changeLanguage(index)}
            className="items-start"
          >
            <button className="px-6 rounded-none bg-opacity-50 capitalize">
              {language?.icon}
              <span>{language?.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

Language.propTypes = {
  className: PropTypes.string
};

const languages = [
  {
    name: 'English',
    icon: <FlagIcon name="gb" />,
    abbreviation: 'Eng'
  },
  {
    name: 'French',
    icon: <FlagIcon name="fr" />,
    abbreviation: 'Fra'
  },
  {
    name: 'Amharic',
    icon: <FlagIcon name="am" />,
    abbreviation: 'Am'
  },
  {
    name: 'Hausa',
    icon: <FlagIcon name="ha" />,
    abbreviation: 'Ha'
  },
  {
    name: 'Yoruba',
    icon: <FlagIcon name="yo" />,
    abbreviation: 'Yo'
  },
  {
    name: 'Swahili',
    icon: <FlagIcon name="sw" />,
    abbreviation: 'Sw'
  },
  {
    name: 'Oromo',
    icon: <FlagIcon name="orm" />,
    abbreviation: 'Orm'
  },
  {
    name: 'Zulu',
    icon: <FlagIcon name="zu" />,
    abbreviation: 'Zu'
  }
];
