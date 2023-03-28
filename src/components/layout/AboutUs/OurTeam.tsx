import { teamMember1, teamMember2, teamMember3, teamMember4 } from 'assets/images';
import { AboutTeamMemberCard, AboutTeamMemberCardProps } from 'components/modules/cards';
import { TEAM } from 'navigation/CONSTANTS';
import React from 'react';
import { RxCaretRight } from 'react-icons/rx';
import { Link } from 'react-router-dom';

function OurTeam() {
  return (
    <section className="my-6 max-w-xl mx-auto p-6">
      <h2 className="text-primary flex justify-between text-xl font-serif font-bold mb-10">
        Our Team
        <Link to={TEAM} className="inline-flex">
          View all <RxCaretRight className="w-6 h-6" />
        </Link>
      </h2>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <div key={member.name + member.role + index} className="px-1">
            <AboutTeamMemberCard {...member} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;

const teamMembers: AboutTeamMemberCardProps[] = [
  {
    image: teamMember1,
    name: 'Kim Yeung',
    role: 'Director, USAF, Singapore',
    socialLinks: [
      { name: 'linkedin', url: 'https://linkedin.com' },
      { name: 'twitter', url: 'twitter' },
      { name: 'instagram', url: '' }
    ]
  },
  {
    image: teamMember2,
    name: 'Martha Kings',
    role: 'Treasurer, USAF, SA',
    socialLinks: [
      { name: 'facebook', url: '' },
      { name: 'twitter', url: '' },
      { name: 'instagram', url: '' }
    ]
  },
  {
    image: teamMember3,
    name: 'Mai Keung',
    role: 'Ambassador, USAF, South Korea',
    socialLinks: [
      { name: 'facebook', url: '' },
      { name: 'twitter', url: '' },
      { name: 'instagram', url: '' }
    ]
  },
  {
    image: teamMember4,
    name: 'Dennis Mbanu',
    role: 'Secretary, USAF, Kenya',
    socialLinks: [
      { name: 'facebook', url: '' },
      { name: 'twitter', url: '' },
      { name: 'linkedin', url: '' }
    ]
  }
];
