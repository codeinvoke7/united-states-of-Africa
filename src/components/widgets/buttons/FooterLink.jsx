import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

export default function FooterLink({ to, children, className, ...rest }) {
  return (
    <Link to={to} className={twMerge('link link-hover', className)} {...rest}>
      {children}
    </Link>
  );
}

FooterLink.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any
};
