import React, { Requireable } from 'react';
import PropTypes from 'prop-types';
import { AiFillStar } from 'react-icons/ai';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { clsxm } from 'utils';

export default function ReviewCard({
  score = 0,
  review,
  profile: { image, name, role }
}: ReviewCardProps) {
  return (
    <div className="p-6">
      <span className="flex gap-1 place-content-center">{<Stars score={score} />}</span>
      <p className="min-h-[3lh] text-center">
        <ImQuotesLeft className="inline-flex mr-1 text-base-300 text-2xl" />
        {review}
        <ImQuotesRight className="inline-flex ml-1 text-base-300 text-2xl" />
      </p>
      <div className="flex place-content-center mt-2">
        <picture>
          <img src={image} className="max-h-20 aspect-square" />
        </picture>
        <div className="grid px-5">
          <h3 className="text-2xl mt-2 font-bold font-serif">{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}

function Stars({ score }: StarsType) {
  const stars = new Array(5);

  stars.fill(0);

  stars.fill(1, 0, score || 0);

  return (
    <>
      {stars.map((value, index) => (
        <AiFillStar
          className={clsxm('text-2xl', {
            'text-primary': value,
            'text-base-300': !value
          })}
          key={value + 'star_component_key' + index}
        />
      ))}
    </>
  );
}

type StarsType = Required<Pick<ReviewCardProps, 'score'>>;

const propTypes = {
  score: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  profile: PropTypes.exact({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  }).isRequired,
  review: PropTypes.string.isRequired
};

export type ReviewCardProps = PropTypes.InferProps<typeof propTypes>;

ReviewCard.propTypes = propTypes;
