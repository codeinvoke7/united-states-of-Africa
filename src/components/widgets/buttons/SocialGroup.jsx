import { FacebookButton, InstagramButton, LinkedinButton, TwitterButton } from '.';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export default function SocialGroup({ className, ...rest }) {
  return (
    <>
      <InstagramButton {...rest} className={twMerge('btn btn-ghost', className)} />
      <FacebookButton {...rest} className={twMerge('btn btn-ghost', className)} />
      <LinkedinButton {...rest} className={twMerge('btn btn-ghost', className)} />
      <TwitterButton {...rest} className={twMerge('btn btn-ghost', className)} />
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
