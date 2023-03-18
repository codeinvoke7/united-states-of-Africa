import React from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { SocialBaseButton } from '.';
import { SocialLinkProps } from './SocialBase';

export default function Youtube({ ...rest }: SocialLinkProps) {
  return (
    <SocialBaseButton {...rest}>
      <AiFillYoutube className="w-full h-full p-1" />
    </SocialBaseButton>
  );
}
