import React from 'react';
import PropTypes from 'prop-types';

export default function TeamMemberCard({ description, image, name, role, socialLinks }) {
  return (
    <div className="grid">
      <p className="clamp-5">{description}</p>
      <div className="card card-side">
        <figure>
          <img
            src={image}
            alt="Team member image"
            loading="lazy"
            className="rounded-full w-24 h-24 aspect-square"
          />
        </figure>

        <div className="card-body pl-4">
          <h3 className="card-title font-serif">{name}</h3>
          <p className="text-primary">{role}</p>
          {socialLinks && <div className="card-actions">{socialLinks}</div>}
        </div>
      </div>
    </div>
  );
}

export type TeamMemberCardProps = PropTypes.InferProps<typeof propTypes>;

const propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  socialLinks: PropTypes.node
  // socialLinks: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     link: PropTypes.string.isRequired,
  //     icon: PropTypes.node.isRequired
  //   })
  // )
};

TeamMemberCard.propTypes = propTypes;
