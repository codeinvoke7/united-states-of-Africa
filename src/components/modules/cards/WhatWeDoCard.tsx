import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export type WhatWeDoCardProps = PropTypes.InferProps<typeof propTypes>;

export default function WhatWeDoCard({ icon, title, description }: WhatWeDoCardProps) {
  return (
    <div className="card bg-primary bg-opacity-10 shadow-md">
      <figure className="mt-4">
        <img loading="lazy" src={icon} className="w-16 h-16 mx-auto" />
      </figure>
      <div className="card-body">
        <h3 className="card-title mx-auto text-center">{title}</h3>
        <p className="line-clamp-3 text-center">{description}</p>
      </div>
    </div>
  );
}

WhatWeDoCard.propTypes = propTypes;
