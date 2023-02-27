import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';
import { BiChevronDown, BiChevronLeft, BiChevronRight, BiChevronUp } from 'react-icons/bi';

export default function Dropdown({ className, left, right, up, down, ...rest }) {
  const defaultClassName = `w-6 h-6`;

  if (left) return <BiChevronLeft className={twMerge(defaultClassName, className)} {...rest} />;

  if (right) return <BiChevronRight className={twMerge(defaultClassName, className)} {...rest} />;

  if (up) return <BiChevronUp className={twMerge(defaultClassName, className)} {...rest} />;

  if (down) return <BiChevronDown className={twMerge(defaultClassName, className)} {...rest} />;

  return null;
}

Dropdown.propTypes = {
  className: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  up: PropTypes.bool,
  down: PropTypes.bool
};
