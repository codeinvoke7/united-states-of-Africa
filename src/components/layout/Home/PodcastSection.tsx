import React from 'react';
import { PodcastCard, PodcastCardProps } from 'components/modules/cards';
import {
  podcast1,
  podcast2,
  podcast3,
  anchor,
  googlepodcast,
  applepodcast,
  iheartradio,
  radiopublic,
  rssfeed,
  stitcher
} from 'assets/images';

export default function PodcastSection() {
  return (
    <>
      <section className="grid grid-cols-2 mx-auto mt-8 gap-4 p-4">
        <div className="card card-compact my-auto order-1 sm:order-2">
          <div className="card-body">
            <h2 className="text-primary text-md md:text-4xl font-bold">Our Podcast Series</h2>
            <p className="pt-1 leading-7 text-neural text-md md:text-5xl md:pt-3 ">
              Listen to our weeky podcasts from experienced proffesionals and top public speakers on
              various platforms.
            </p>
          </div>
        </div>
        <div className="order-last">
          {podcastData.map((data, index) => {
            return <PodcastCard key={data.title + index} {...data} />;
          })}
        </div>
      </section>
      <h2 className="text-xs text-neutral ml-7 md:text-xl">Available on</h2>
      <div className="flex justify-center gap-1 px-6 lg:gap-12 mt-4">
        {podcasts.map((podcast) => {
          const { image, id, alt } = podcast;
          return (
            <section key={id}>
              <img src={image} alt={alt} />
            </section>
          );
        })}
      </div>
    </>
  );
}

const podcastData: PodcastCardProps[] = [
  {
    image: podcast1,
    title: 'Pan African Leadership Center',
    description: 'Episode 2'
  },
  {
    image: podcast2,
    title: 'Africa & Technology',
    description: 'Episode 7'
  },
  {
    image: podcast3,
    title: 'Black mental health matters',
    description: 'Episode 8'
  }
];

const podcasts = [
  {
    id: 1,
    image: googlepodcast,
    alt: 'googlepodcast image'
  },
  {
    id: 2,
    image: iheartradio,
    alt: 'iheartradioimage'
  },
  {
    id: 3,
    image: applepodcast,
    alt: 'applepodcast image'
  },
  {
    id: 4,
    image: rssfeed,
    alt: 'rssfeed image'
  },
  {
    id: 5,
    image: stitcher,
    alt: 'stitcher image'
  },
  {
    id: 6,
    image: anchor,
    alt: 'anchor image'
  },
  {
    id: 7,
    image: radiopublic,
    alt: 'radiopublic image'
  }
];
