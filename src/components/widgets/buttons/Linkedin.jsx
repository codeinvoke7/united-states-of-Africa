import { FaLinkedinIn } from 'react-icons/fa';
import { SocialBaseButton } from '.';

export default function Linkedin({ ...rest }) {
  return (
    <SocialBaseButton {...rest}>
      <FaLinkedinIn className="w-full h-full p-1" />
    </SocialBaseButton>
  );
}
