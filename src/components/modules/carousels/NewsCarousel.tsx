import React from 'react';
import { NewsCard, NewsCardProps } from 'components/modules/cards';
import { news1, news2, news3, news4 } from 'assets/images';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import clsx from 'clsx';
import Carousel from 'react-multi-carousel';
import { ButtonGroupProps } from 'react-multi-carousel/lib/types';
import 'react-multi-carousel/lib/styles.css';

export default function NewsCarousel() {
  const responsive = {
    xs: { breakpoint: { max: 460, min: 0 }, items: 1 },
    sm: { breakpoint: { max: 640, min: 460 }, items: 2 },
    md: { breakpoint: { max: 768, min: 640 }, items: 3 },
    lg: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    xl: { breakpoint: { max: 1_000_000, min: 1024 }, items: 4 }
  };

  return (
    <div>
      <Carousel
        responsive={{ ...responsive }}
        arrows={false}
        customButtonGroup={<CustomButtonGroup />}
        renderButtonGroupOutside={true}
      >
        {newsData?.map((data, index) => {
          return (
            <div className="mx-1" key={data.title + index}>
              <NewsCard {...data} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

function CustomButtonGroup({ next, previous, ...rest }: ButtonGroupProps) {
  const { carouselState } = rest;

  return (
    <div className="carousel-button-group flex justify-end gap-8">
      <button
        className={clsx('btn btn-circle hover:bg-opacity-30 bg-opacity-30 text-base-100', {
          invisible: carouselState?.currentSlide === 0
        })}
        onClick={() => previous?.()}
      >
        <RxCaretLeft className="w-7 h-7" />
      </button>

      <button
        className={clsx('btn btn-circle hover:bg-opacity-30 bg-opacity-30 text-base-100', {
          invisible: carouselState && carouselState.totalItems - 1 === carouselState.currentSlide
        })}
        onClick={() => next?.()}
      >
        <RxCaretRight className="w-7 h-7" />
      </button>
    </div>
  );
}

const date = new Date('01/07/2023').toLocaleDateString(undefined, {
  dateStyle: 'full'
});

const newsData: NewsCardProps[] = [
  {
    image: news1,
    publicationDate: date,
    title: 'Construct new drainage in Zambia',
    url: 'https://google.com/something'
  },
  {
    image: news2,
    publicationDate: date,
    title: 'FIFA partners with USAF to promote football in Kenya',
    url: 'https://google.com/something'
  },
  {
    image: news3,
    publicationDate: date,
    title: '20 Doctors volunteer for USAF',
    url: 'https://google.com/something'
  },
  {
    image: news4,
    publicationDate: date,
    title: 'USAF volunteer in Namibi offers scholarships to 17',
    url: 'https://google.com/something'
  },
  {
    image: news1,
    publicationDate: date,
    title: 'Construct new drainage in Zambia',
    url: 'https://google.com/something'
  },
  {
    image: news2,
    publicationDate: date,
    title: 'FIFA partners with USAF to promote football in Kenya',
    url: 'https://google.com/something'
  },
  {
    image: news3,
    publicationDate: date,
    title: '20 Doctors volunteer for USAF',
    url: 'https://google.com/something'
  },
  {
    image: news4,
    publicationDate: date,
    title: 'USAF volunteer in Namibi offers scholarships to 17',
    url: 'https://google.com/something'
  }
];
