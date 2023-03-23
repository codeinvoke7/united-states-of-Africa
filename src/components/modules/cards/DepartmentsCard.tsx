import React from 'react';
import PropTypes from 'prop-types';
import { SelectedSocialGroup, socialLinksType } from 'components/widgets/buttons';

const propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  textTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  actionButton: PropTypes.string.isRequired,
  actionButtonUrl: PropTypes.string.isRequired,
  socialLinks: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    }).isRequired
  )
};

export type DepartmentsCardProps = {
  title: string;
  image: string;
  name: string;
  role: string;
  location: string;
  textTitle: string;
  text: string;
  actionButton: string;
  actionButtonUrl: string;
  socialLinks: socialLinksType[];
};

export default function DepartmentsCard({
  title,
  image,
  name,
  role,
  location,
  textTitle,
  text,
  actionButton,
  actionButtonUrl,
  socialLinks
}: DepartmentsCardProps) {
  return (
    <div className="bg-[#E4FFEE40] shadow-xl p-5 my-5 grid gap-5 font-poppins hover:text-[#39B755]">
      <div>
        <h2 className="text-2xl text-center pb-10">{title}</h2>
        <div className="flex flex-col md:flex-row">
          <div className="ml-12 md:ml-0">
            <img
              src={image}
              alt={`USAF departments ${name}`}
              loading="lazy"
              className="aspect-square object-cover rounded w-44"
            />
            <div className="font-serif text-center mr-12 md:mr-0">
              <h3 className="font-black font-poppins pt-2">{name}</h3>
              <p className="truncate" title={role}>
                {role}
              </p>
              <p>{location}</p>
              <div className="card-actions flex-wrap ml-14 md:ml-7">
                {
                  <SelectedSocialGroup
                    className="btn btn-sm btn-dark hover:bg-primary"
                    socialLinks={socialLinks}
                  />
                }
              </div>
            </div>
          </div>

          <div className="md:mx-10 pt-5">
            <h3 className="font-black text-center">{textTitle}</h3>
            <p className="truncate whitespace-pre-line">{text}</p>
            <a
              className="text-right text-primary hover:text-[#ff0000] ml-20 md:ml-48"
              href={actionButtonUrl}
            >
              {actionButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

DepartmentsCard.propTypes = propTypes;
