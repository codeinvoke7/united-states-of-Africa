import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

const propTypes = {
  image: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export type NewsCardProps = PropTypes.InferProps<typeof propTypes>;

export default function NewsCard({ image, url, title, publicationDate }: NewsCardProps) {
  return (
    <div className="card card-compact">
      <picture>
        <img loading="lazy" src={image} className="aspect-square w-full h-full" />
      </picture>
      <div className="card-body">
        <time>{publicationDate}</time>
        <h3 className="card-title line-clamp-2">{title}</h3>
        <div className="card-actions">
          <Link to={url} className="link flex link-primary link-hover gap-2">
            Read more <AiOutlinePlus className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

NewsCard.propTypes = propTypes;
