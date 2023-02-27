import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export default function SocialBase({ className, children, ...rest }) {
  return (
    <button {...rest} className={twMerge('btn btn-square', className)}>
      {children}
    </button>
  );
}

SocialBase.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any
};
