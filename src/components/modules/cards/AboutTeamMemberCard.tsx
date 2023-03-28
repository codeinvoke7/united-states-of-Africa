import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { SelectedSocialGroup, socialLinksType } from 'components/widgets/buttons';

const propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  )
};

export type AboutTeamMemberCardProps = {
  image: string;
  name: string;
  role: string;
  socialLinks: socialLinksType[];
};

export default function AboutTeamMemberCard({
  image,
  name,
  role,
  socialLinks
}: AboutTeamMemberCardProps) {
  return (
    <div className="grid grid-cols-[6rem,auto] gap-4 p-1 drop-shadow">
      <img
        src={image}
        alt={`USAF member ${name}`}
        loading="lazy"
        className="w-full h-full aspect-square object-cover rounded"
      />

      <div className="grid gap-1 font-serif">
        <h3 className="font-semibold">{name}</h3>
        <p className="truncate" title={role}>
          {role}
        </p>
        <div className="card-actions flex-wrap">
          {<SelectedSocialGroup className="btn btn-sm btn-secondary" socialLinks={socialLinks} />}
        </div>
      </div>
    </div>
  );
}

AboutTeamMemberCard.propTypes = propTypes;
