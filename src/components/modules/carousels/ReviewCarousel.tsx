import React from 'react';
import { ReviewCard, ReviewCardProps } from 'components/modules/cards';
import Carousel from 'react-multi-carousel';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { member1 } from 'assets/images';
import 'react-multi-carousel/lib/styles.css';
import clsx from 'clsx';
import { ButtonGroupProps } from 'react-multi-carousel';

export default function ReviewCarousel() {
  const responsive = {
    md: { breakpoint: { max: 1_000_000, min: 0 }, items: 1 }
  };

  return (
    <Carousel
      responsive={{ ...responsive }}
      arrows={false}
      customButtonGroup={<CustomButtonGroup />}
    >
      {reviews.map((review, index) => (
        <ReviewCard {...review} key={review.review + index} />
      ))}
    </Carousel>
  );
}

function CustomButtonGroup({ next, previous, ...rest }: ButtonGroupProps) {
  const { carouselState } = rest;

  return (
    <div className="carousel-button-group flex justify-between gap-8 absolute w-full">
      <button
        className={clsx('btn btn-sm btn-circle hover:bg-opacity-30 bg-opacity-30 text-base-100', {
          invisible: carouselState?.currentSlide === 0
        })}
        onClick={() => previous?.()}
      >
        <RxCaretLeft className="w-7 h-7" />
      </button>

      <button
        className={clsx('btn btn-sm btn-circle hover:bg-opacity-30 bg-opacity-30 text-base-100', {
          invisible: carouselState && carouselState.totalItems - 1 === carouselState.currentSlide
        })}
        onClick={() => next?.()}
      >
        <RxCaretRight className="w-7 h-7" />
      </button>
    </div>
  );
}

const reviews: ReviewCardProps[] = [
  {
    score: 3,
    review:
      "I was blown away by the quality of tech talent that the company sourced from United States of Africa. The developpers and engeneers they provide were highly skilled and professional, and they exceeded our expectations in terms of delivering quality work within our deadlines. The company'communication and project management were also top-notch, making the entire process seamless and stress-free. highly recommended working with them for your tech talent needs.",
    profile: {
      image: member1,
      name: 'Lee Chen',
      role: 'CEO, Tai'
    }
  },
  {
    score: 1,
    review:
      "I was blown away by the quality of tech talent that the company sourced from United States of Africa. The developpers and engeneers they provide were highly skilled and professional, and they exceeded our expectations in terms of delivering quality work within our deadlines. The company'communication and project management were also top-notch, making the entire process seamless and stress-free. highly recommended working with them for your tech talent needs.",
    profile: {
      image: member1,
      name: 'Lee Chen',
      role: 'CEO, Tai'
    }
  },
  {
    score: 5,
    review:
      "I was blown away by the quality of tech talent that the company sourced from United States of Africa. The developpers and engeneers they provide were highly skilled and professional, and they exceeded our expectations in terms of delivering quality work within our deadlines. The company'communication and project management were also top-notch, making the entire process seamless and stress-free. highly recommended working with them for your tech talent needs.",
    profile: {
      image: member1,
      name: 'Lee Chen',
      role: 'CEO, Tai'
    }
  }
];
