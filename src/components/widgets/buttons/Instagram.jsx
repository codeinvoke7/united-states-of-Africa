import { AiFillInstagram } from 'react-icons/ai';
import { SocialBaseButton } from '.';

export default function Instagram({ ...rest }) {
  return (
    <SocialBaseButton {...rest}>
      <AiFillInstagram className="w-full h-full p-1" />
    </SocialBaseButton>
  );
}
