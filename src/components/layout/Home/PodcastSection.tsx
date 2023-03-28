import React from 'react';
import { PodcastCard, PodcastCardProps } from 'components/modules/cards';
import { anchor, googlepodcast, applepodcast, iheartradio, spotify, rssfeed } from 'assets/icons';
import { africa, podcast1, podcast2, podcast3 } from 'assets/images';

export default function PodcastSection() {
  return (
    <section className="max-w-xl mx-auto">
      <div className="relative">
        <div className="max-w-lg">
          <div className="flex flex-col gap-4 p-2">
            <h2 className="text-primary text-3xl font-semibold font-serif">Our Podcast Series</h2>
            <div className="bg-neutral-900 rounded-3xl py-8 px-3">
              <h3 className="text-2xl px-4 py-3 text-neutral-content">
                Black Mental Health Matters
              </h3>
              <div className="grid md:grid-cols-3 p-4 gap-6 m-2 text-neutral-400">
                {podcastData.map((data, index) => {
                  return (
                    <div className="p-6 bg-base-300 bg-opacity-5" key={data.title + index}>
                      <PodcastCard {...data} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="px-2 pt-2 pb-8">
            <iframe
              src="https://podcasters.spotify.com/pod/show/blackmentalhealthmatters/embed/episodes/How-Nature-influences-your-Mental-wellbeing-e1tq92j/a-a9799rc"
              className="w-full h-full rounded-3xl border-none min-h-[170px] drop-shadow"
              scrolling="no"
              title="Black Mental Health Matters"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <img
          loading="lazy"
          src={africa}
          role="presentation"
          className="absolute h-full object-cover object-left -top-0 -right-0 -z-10 hidden lg:block"
        />
      </div>

      <div className="border-t-4 border-opacity-20 pb-6 border-neutral bg-neutral-50">
        <h2 className="text-xs text-neutral ml-7 md:text-xl mt-6">Available on</h2>
        <div className="flex justify-center gap-1 px-6 lg:gap-16 mt-4">
          {podcasts.map((podcast) => {
            const { image, alt, url } = podcast;
            return (
              <a key={url + image} href={url} target="_blank">
                <img src={image} alt={alt} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const podcastData: PodcastCardProps[] = [
  {
    image: podcast1,
    title: 'How Natures Influences Your Mental Wellbeing',
    channel: 'Black Mental Health Matters',
    url: 'https://podcasters.spotify.com/pod/show/blackmentalhealthmatters/episodes/How-Nature-influences-your-Mental-wellbeing-e1tq92j'
  },
  {
    image: podcast2,
    title: 'How to Move Our Minds and Body Through Grief',
    channel: 'Black Mental Health Matters',
    url: 'https://podcasters.spotify.com/pod/show/blackmentalhealthmatters/episodes/How-to-move-our-minds-and-bodies-through-grief-e1vgfa1'
  },
  {
    image: podcast3,
    title: 'The Impact of Trauma and Adversity on Mental Health',
    channel: 'Black Mental Health Matters',
    url: 'https://podcasters.spotify.com/pod/show/blackmentalhealthmatters/episodes/The-impact-of-trauma-and-adversity-on-mental-health-e1uqmob'
  }
];

const podcasts = [
  {
    image: googlepodcast,
    alt: 'googlepodcast image',
    url: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9kNmZhZjhiYy9wb2RjYXN0L3Jzcw'
  },
  {
    image: iheartradio,
    alt: 'iheartradioimage',
    url: 'https://www.iheart.com/podcast/269-black-mental-health-matter-106401772/'
  },
  {
    image: applepodcast,
    alt: 'applepodcast image',
    url: 'https://podcasts.apple.com/us/podcast/black-mental-health-matters/id1661428617'
  },
  {
    image: rssfeed,
    alt: 'rssfeed image',
    url: 'https://anchor.fm/s/d6faf8bc/rss'
  },
  {
    image: spotify,
    alt: 'stitcher image',
    url: 'https://open.spotify.com/show/3MjBPzYvJiG4J7HyDmRguU'
  },
  {
    image: anchor,
    alt: 'anchor image',
    url: 'https://anchor.fm/blackmentalhealthmatters'
  }
];
