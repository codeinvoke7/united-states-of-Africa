import { FaWhatsapp } from 'react-icons/fa';
import { SocialBaseButton } from '.';

export default function Whatsapp({ ...rest }) {
  return (
    <SocialBaseButton {...rest}>
      <FaWhatsapp className="w-full h-full p-1" />
    </SocialBaseButton>
  );
}
