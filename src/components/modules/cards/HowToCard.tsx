import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

const propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node,
  buttonLabel: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export type HowToCardProps = PropTypes.InferProps<typeof propTypes>;

export default function HowToCard({ icon, title, description, buttonLabel, url }: HowToCardProps) {
  return (
    <div className="card card-side bg-transparent">
      <figure className="w-24 h-24 rounded-full border-2 border-secondary p-4 place-self-center flex-shrink-0">
        <img loading="lazy" role="presentation" src={icon} />
      </figure>
      <div className="card-body pl-4">
        <h3 className="card-title">{title}</h3>
        <p className="line-clamp-2">{description}</p>
        <div className="card-action">
          <Link
            to={url}
            className="btn btn-outline btn-secondary flex-nowrap rounded-full px-4 normal-case gap-2"
          >
            {buttonLabel} <AiOutlinePlus className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

HowToCard.propTypes = propTypes;
