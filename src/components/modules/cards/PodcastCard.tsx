import React from 'react';
import PropTypes from 'prop-types';
import { GiSoundWaves } from 'react-icons/gi';
import { AiFillPlayCircle } from 'react-icons/ai';

const propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export type PodcastCardProps = PropTypes.InferProps<typeof propTypes>;

export default function PodcastCard({ image, title, description, url }: PodcastCardProps) {
  return (
    <div className="card card-side">
      <figure>
        <img src={image} alt="Podcast image" loading="lazy" className="w-17 h-17 aspect-square" />
      </figure>

      <div className="card-body p-2 lg:pl-4 lg:p-10">
        <h3 className="card-title font-serif font-light text-xs text-neutral md:text-md">
          {title}
        </h3>
        <div className="flex">
          <p className="text-[#818181] text-xs font-light md:text-md">{description}</p>
          <a href={url} target="_blank" className="flex">
            <AiFillPlayCircle className="text-primary cursor-pointer" />
            <GiSoundWaves className="w-10" />
          </a>
        </div>
      </div>
    </div>
  );
}
