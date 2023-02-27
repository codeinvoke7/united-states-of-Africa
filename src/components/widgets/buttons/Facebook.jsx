import { FaFacebookF } from 'react-icons/fa';
import { SocialBaseButton } from '.';

export default function Facebook({ ...rest }) {
  return (
    <SocialBaseButton {...rest}>
      <FaFacebookF className="w-full h-full p-1" />
    </SocialBaseButton>
  );
}
