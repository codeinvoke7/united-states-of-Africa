import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export type PodcastCardProps = PropTypes.InferProps<typeof propTypes>;

export default function PodcastCard({ image, title, channel, url }: PodcastCardProps) {
  return (
    <div className="card rounded-none">
      <figure>
        <img
          src={image}
          alt="Podcast image"
          loading="lazy"
          className="w-full h-full aspect-video object-cover"
        />
      </figure>

      <div className="card-body p-0 py-1">
        <a target="_blank" href={url} className="card-title">
          {title}
        </a>
        <p className="opacity-70 mt-4">{channel}</p>
      </div>
    </div>
  );
}
