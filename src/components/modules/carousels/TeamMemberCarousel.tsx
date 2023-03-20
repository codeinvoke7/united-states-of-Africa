import React from 'react';
import {
  AboutTeamMemberCard,
  AboutTeamMemberCardProps,
  ReviewCard
} from 'components/modules/cards';
import Carousel from 'react-multi-carousel';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { member1, teamMember1, teamMember2, teamMember3, teamMember4 } from 'assets/images';
import 'react-multi-carousel/lib/styles.css';
import clsx from 'clsx';
import { ButtonGroupProps } from 'react-multi-carousel';

export default function TeamMemberCarousel() {
  const responsive = {
    xs: { breakpoint: { max: 460, min: 0 }, items: 1 },
    sm: { breakpoint: { max: 640, min: 460 }, items: 2 },
    md: { breakpoint: { max: 1_024, min: 640 }, items: 3 },
    lg: { breakpoint: { max: 1_000_000, min: 1024 }, items: 4 }
  };

  return (
    <div className="relative my-4">
      <Carousel
        responsive={{ ...responsive }}
        customButtonGroup={<CustomButtonGroup />}
        arrows={false}
        renderButtonGroupOutside={true}
      >
        {teamMembers.map((member, index) => (
          <div key={member.name + member.role + index} className="px-1">
            <AboutTeamMemberCard {...member} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

function CustomButtonGroup({ next, previous, ...rest }: ButtonGroupProps) {
  const { carouselState } = rest;

  return (
    <div className="carousel-button-group flex justify-between md:justify-end gap-8 absolute w-full mt-2">
      <button
        className={clsx('btn btn-sm btn-circle hover:bg-opacity-30 bg-opacity-30 text-base-100', {
          'btn-disabled': carouselState?.currentSlide === 0
        })}
        onClick={() => previous?.()}
      >
        <RxCaretLeft className="w-7 h-7" />
      </button>

      <button
        className={clsx('btn btn-sm btn-circle hover:bg-opacity-30 bg-opacity-30 text-base-100', {
          'btn-disabled':
            carouselState && carouselState.totalItems - 1 === carouselState.currentSlide
        })}
        onClick={() => next?.()}
      >
        <RxCaretRight className="w-7 h-7" />
      </button>
    </div>
  );
}

const teamMembers: AboutTeamMemberCardProps[] = [
  {
    image: teamMember1,
    name: 'Kim Yeung',
    role: 'Director, USAF, Singapore',
    socialLinks: [
      { name: 'linkedin', url: '' },
      { name: 'twitter', url: '' },
      { name: 'instagram', url: '' }
    ]
  },
  {
    image: teamMember2,
    name: 'Martha Kings',
    role: 'Treasurer, USAF, SA',
    socialLinks: [
      { name: 'facebook', url: '' },
      { name: 'twitter', url: '' },
      { name: 'instagram', url: '' }
    ]
  },
  {
    image: teamMember3,
    name: 'Mai Keung',
    role: 'Ambassador, USAF, South Korea',
    socialLinks: [
      { name: 'facebook', url: '' },
      { name: 'twitter', url: '' },
      { name: 'instagram', url: '' }
    ]
  },
  {
    image: teamMember4,
    name: 'Dennis Mbanu',
    role: 'Secretary, USAF, Kenya',
    socialLinks: [
      { name: 'facebook', url: '' },
      { name: 'twitter', url: '' },
      { name: 'linkedin', url: '' }
    ]
  }
];
