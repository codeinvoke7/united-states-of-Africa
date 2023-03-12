import { VOLUNTEER, VOLUNTEERS } from 'navigation/CONSTANTS';
import React from 'react';
import { Link } from 'react-router-dom';
import { TeamMemberCard, TeamMemberCardProps } from 'components/modules/cards';
import { member1, member2, member3 } from 'assets/images';
import {
  FacebookButton,
  InstagramButton,
  LinkedinButton,
  SocialGroupButton,
  TwitterButton
} from 'components/widgets/buttons';

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

const socialMediaClassName = 'btn-xs btn-ghost';

const teamMembers: TeamMemberCardProps[] = [
  {
    description:
      "As a volunteer UX Researcher at United States of Africa, I've been able to use my creativity and insights to develop user-centered products that meet the needs of our target audience. Being a part of this mission has been inspiring, and collaborating with a talented and dedicated team of people has been a pleasure. The impact of our work is significant, and I'm proud to be a part of it.",
    image: member1,
    name: 'Jerry Toms',
    role: 'UX Researcher',
    socialLinks: (
      <div>
        <FacebookButton className={socialMediaClassName} />
        <InstagramButton className={socialMediaClassName} />
        <LinkedinButton className={socialMediaClassName} />
        <TwitterButton className={socialMediaClassName} />
      </div>
    )
  },
  {
    description:
      "As a volunteer Business Analyst at United States of Africa, I've had a fantastic experience using my expertise to identify areas for growth and improvement and provide actionable insights. Collaborating with others and being a part of a mission to make a difference has been fulfilling, and I'm proud of what we have accomplished together.",
    image: member3,
    name: 'David Stones',
    role: 'Business Analyst',
    socialLinks: (
      <div>
        <FacebookButton className={socialMediaClassName} />
        <InstagramButton className={socialMediaClassName} />
        <LinkedinButton className={socialMediaClassName} />
        <TwitterButton className={socialMediaClassName} />
      </div>
    )
  },
  {
    description:
      "I've loved volunteering as a Scrum Master at United States of Africa. Leading our agile development process and ensuring that we deliver high-quality products on time and within budget has been incredibly rewarding. The collaborative and positive work environment that we've created has made this experience even more enjoyable, and I'm honored to be a part of this mission.",
    image: member2,
    name: 'Jacky Jonhson',
    role: 'Scrum Master',
    socialLinks: (
      <div>
        <FacebookButton className={socialMediaClassName} />
        <InstagramButton className={socialMediaClassName} />
        <LinkedinButton className={socialMediaClassName} />
        <TwitterButton className={socialMediaClassName} />
      </div>
    )
  }
];
