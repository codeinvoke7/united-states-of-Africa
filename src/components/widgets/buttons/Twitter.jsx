import { FaTwitter } from 'react-icons/fa';
import { SocialBaseButton } from '.';

export default function Twitter({ ...rest }) {
  return (
    <SocialBaseButton {...rest}>
      <FaTwitter className="w-full h-full p-1" />
    </SocialBaseButton>
  );
}
