import PropTypes from 'prop-types';
import { FR, GB } from 'country-flag-icons/react/3x2';
import { twMerge } from 'tailwind-merge';
import { amharicFlag, hausaFlag, oromoFlag, swahiliFlag, yorubaFlag, zuluFlag } from 'assets/icons';

export default function Flag({ name, className, ...rest }) {
  const defaultClassName = 'w-7 h-5 aspect-video';
  const props = {
    className: twMerge(defaultClassName, className),
    ...rest
  };

  const nameLowerCase = name.toLocaleLowerCase();

  if (nameLowerCase === 'gb') return <GB {...props} />;
  if (nameLowerCase === 'fr') return <FR {...props} />;
  if (nameLowerCase === 'ha') return <img src={hausaFlag} {...props} />;
  if (nameLowerCase === 'am') return <img src={amharicFlag} {...props} />;
  if (nameLowerCase === 'yo') return <img src={yorubaFlag} {...props} />;
  if (nameLowerCase === 'sw') return <img src={swahiliFlag} {...props} />;
  if (nameLowerCase === 'zu') return <img src={zuluFlag} {...props} />;
  if (nameLowerCase === 'orm') return <img src={oromoFlag} {...props} />;

  return null;
}

Flag.propTypes = {
  name: PropTypes.oneOf(['gb', 'fr', 'ha', 'am', 'yo', 'sw', 'orm', 'zu']),
  className: PropTypes.string
};
