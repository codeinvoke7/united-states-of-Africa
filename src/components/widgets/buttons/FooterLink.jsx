import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

export default function FooterLink({ to, children, isExternalLink, className, ...rest }) {
  const props = {
    className: twMerge('link link-hover', className),
    ...rest
  };

  if (isExternalLink)
    <a href={to} target="_blank" rel="noreferrer" {...props}>
      {children}
    </a>;

  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
}

FooterLink.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  isExternalLink: PropTypes.bool,
  children: PropTypes.any
};
