import PropTypes from 'prop-types';
import { FR, GB } from 'country-flag-icons/react/3x2';
import { twMerge } from 'tailwind-merge';

export default function Flag({ country, className, ...rest }) {
  const defaultClassName = 'w-6 h-8';

  if (country === 'gb') return <GB className={twMerge(defaultClassName, className)} {...rest} />;

  if (country === 'fr') return <FR className={twMerge(defaultClassName, className)} {...rest} />;

  return null;
}

Flag.propTypes = {
  country: PropTypes.oneOf(['gb', 'fr']),
  className: PropTypes.string
};
