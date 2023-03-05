import { news1, news2, news3, news4 } from 'assets/images';
import { NewsCard, NewsCardProps } from 'components/modules/cards';
import React from 'react';

export default function NewsSection() {
  return (
    <section className="mx-auto my-16 max-w-xl">
      <h2 className="text-center font-serif text-5xl mb-4 font-bold">Check Our Latest News</h2>

      <div className="carousel gap-8">
        {newsData.map((data, index) => {
          return (
            <div className="carousel-item max-w-[25rem]">
              <NewsCard key={data.title + index} {...data} />
            </div>
          );
        })}
      </div>
    </section>
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
