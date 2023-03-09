import { VOLUNTEER, VOLUNTEERS } from 'navigation/CONSTANTS';
import React from 'react';
import { Link } from 'react-router-dom';
import { TeamMemberCard, TeamMemberCardProps } from 'components/modules/cards';
import { news1, news2, news3 } from 'assets/images';
import { SocialGroupButton } from 'components/widgets/buttons';

export default function TeamsSection() {
  return (
    <section className="max-w-xl mx-auto bg-base-200 py-16 bg-opacity-25 px-6">
      <h2 className="text-lg text-primary text-center">Meet Our Team</h2>
      <p className="text-5xl font-bold font-serif text-center my-6">Talented Team Behind USAF</p>

      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((data, index) => {
          return <TeamMemberCard key={data.name + index + data.role} {...data} />;
        })}
      </div>

      <div className="place-content-center my-6 flex gap-4">
        <Link to={VOLUNTEER} className="btn btn-outline rounded-full px-4">
          Volunteer with Us
        </Link>

        <Link to={VOLUNTEERS} className="btn btn-accent rounded-full px-4">
          All Volunteers
        </Link>
      </div>
    </section>
  );
}

const teamMembers: TeamMemberCardProps[] = [
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates?',
    image: news1,
    name: 'Jerry Toms',
    role: 'Fronend Developper',
    socialLinks: [<SocialGroupButton className="btn-xs gap-1" />]
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates?',
    image: news2,
    name: 'David Stones',
    role: 'Fronend Developper',
    socialLinks: [<SocialGroupButton className="btn-xs gap-1" />]
  },
  {
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, voluptates?',
    image: news3,
    name: 'Jacky Jonhson',
    role: 'Fronend Developper',
    socialLinks: [<SocialGroupButton className="btn-xs gap-1" />]
  }
];
