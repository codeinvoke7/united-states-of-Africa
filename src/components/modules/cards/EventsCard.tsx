import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCalendar, AiOutlineClockCircle, AiOutlinePlus } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import PropTypes from 'prop-types';

const propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired
};

export type EventsCardProps = PropTypes.InferProps<typeof propTypes>;

export default function EventsCard({
  date,
  title,
  description,
  time,
  location,
  link,
  buttonLabel
}: EventsCardProps) {
  return (
    <div className="card rounded-none bg-base-100 shadow-md border-2 border-base-100">
      <div className="card-body p-2 md:p-6">
        <p className="flex text-sm leading-3 md:text-xl truncate font-normal gap-2 md:leading-6">
          <AiOutlineCalendar /> {date}
        </p>
        <h1 className="text-lg md:text-4xl leading-snug font-extrabold">{title}</h1>
        <p className="text-sm md:text-2xl font-normal leading-8">{description}</p>
        <div className="card-items flex mt-5">
          <p className="flex text-sm leading-4 md:text-xl font-normal md:leading-6 gap-2">
            <AiOutlineClockCircle />
            {time}
          </p>
          <p className="flex text-xs  leading-3 md:text-xl font-normal md:leading-6 gap-2">
            <FaMapMarkerAlt />
            {location}
          </p>
        </div>
        <div className="card-actions">
          <Link
            className="flex link-primary leading-3 text-sm md:text-xl mt-5 md:leading-5 gap-2"
            to={link}
          >
            {buttonLabel} <AiOutlinePlus />
          </Link>
        </div>
      </div>
    </div>
  );
}
