import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

export default function SocialBase({ className, children, target, href }: SocialLinkProps) {
  return (
    <a
      target={target || '_blank'}
      href={href || 'https://facebook.com/'}
      className={twMerge('btn btn-square', className)}
    >
      {children}
    </a>
  );
}

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  href: PropTypes.string,
  target: PropTypes.string
};

export type SocialLinkProps = PropTypes.InferProps<typeof propTypes>;

SocialBase.propTypes = propTypes;
