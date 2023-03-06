import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { LinkProps } from 'react-router-dom';

export default function NavLink({ to, className, isAcccent, children, ...rest }: NavLinkProps) {
  return (
    <Link
      className={twMerge(
        clsx('btn rounded-full normal-case', {
          'btn-accent ': isAcccent,
          'btn-ghost ': !isAcccent
        }),
        className
      )}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  );
}

const propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  isAcccent: PropTypes.bool,
  to: PropTypes.string.isRequired
};

type NavLinkProps = PropTypes.InferProps<typeof propTypes> & LinkProps;

NavLink.propTypes = propTypes;
