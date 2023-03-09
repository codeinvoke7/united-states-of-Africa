import { FacebookButton, InstagramButton, LinkedinButton, TwitterButton } from '.';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { FACEBOOK, INSTAGRAM, LINKEDIN, TWITTER, YOUTUBE } from 'navigation/CONSTANTS';
import Youtube from './Youtube';

export default function SocialGroup({ className, ...rest }) {
  return (
    <>
      <InstagramButton
        target="_blank"
        href={INSTAGRAM}
        {...rest}
        className={twMerge('btn btn-ghost', className)}
      />
      <FacebookButton
        target="_blank"
        href={FACEBOOK}
        {...rest}
        className={twMerge('btn btn-ghost', className)}
      />
      <LinkedinButton
        target="_blank"
        href={LINKEDIN}
        {...rest}
        className={twMerge('btn btn-ghost', className)}
      />
      <TwitterButton
        target="_blank"
        href={TWITTER}
        {...rest}
        className={twMerge('btn btn-ghost', className)}
      />
      <Youtube
        target="_blank"
        href={YOUTUBE}
        {...rest}
        className={twMerge('btn btn-ghost', className)}
      />
    </>
  );
}

SocialGroup.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

SocialGroup.defaultProps = {
  size: 'md'
};
