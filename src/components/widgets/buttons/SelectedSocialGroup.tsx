import React from 'react';
import { FacebookButton, InstagramButton, LinkedinButton, TwitterButton } from '.';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

const socialLinksTypes = ['facebook', 'twitter', 'linkedin', 'instagram'] as const;

export default function SelectedSocialGroup({
  className,
  socialLinks
}: SelectedSocialGroupButtonType) {
  return (
    <>
      {socialLinks?.map((socialLink, index) => {
        const props: React.DetailedHTMLProps<
          React.AnchorHTMLAttributes<HTMLAnchorElement>,
          HTMLAnchorElement
        > = {
          target: '_blank',
          href: socialLink?.url!,
          className: twMerge('btn btn-square hover:bg-primary', className),
          key: `${socialLink?.name}${socialLink?.url}${index}`
        };

        switch (socialLink?.name) {
          case 'facebook':
            return <FacebookButton {...props} />;

          case 'instagram':
            return <InstagramButton {...props} />;

          case 'linkedin':
            return <LinkedinButton {...props} />;

          case 'twitter':
            return <TwitterButton {...props} />;

          default:
            return null;
        }
      })}
    </>
  );
}

const propTypes = {
  className: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.oneOf(socialLinksTypes).isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  )
};

export type socialLinksType = {
  name: (typeof socialLinksTypes)[number];
  url: string;
};

type SelectedSocialGroupButtonType = {
  className: string;
  socialLinks?: socialLinksType[];
};

SelectedSocialGroup.propTypes = propTypes;
