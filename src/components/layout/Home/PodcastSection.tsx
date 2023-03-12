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
  spotify,
  rssfeed
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
      <div className="flex justify-center gap-1 px-6 lg:gap-16 mt-4">
        {podcasts.map((podcast) => {
          const { image, id, alt, url } = podcast;
          return (
            <section key={id}>
              <a href={url} target="_blank">
                <img src={image} alt={alt} />
              </a>
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
    alt: 'googlepodcast image',
    url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9kNmZhZjhiYy9wb2RjYXN0L3Jzcw'
  },
  {
    id: 2,
    image: iheartradio,
    alt: 'iheartradioimage',
    url: 'https://www.iheart.com/podcast/269-black-mental-health-matter-106401772/'
  },
  {
    id: 3,
    image: applepodcast,
    alt: 'applepodcast image',
    url: 'https://podcasts.apple.com/us/podcast/black-mental-health-matters/id1661428617'
  },
  {
    id: 4,
    image: rssfeed,
    alt: 'rssfeed image',
    url: 'https://rssfeed.com'
  },
  {
    id: 5,
    image: spotify,
    alt: 'stitcher image',
    url: 'https://open.spotify.com/show/3MjBPzYvJiG4J7HyDmRguU'
  },
  {
    id: 6,
    image: anchor,
    alt: 'anchor image',
    url: 'https://anchor.fm/blackmentalhealthmatters'
  }
];
