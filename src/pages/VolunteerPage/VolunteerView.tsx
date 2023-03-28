import React from 'react';
import { Welcome, Volunteering, WhySection, VideoSection } from 'components/layout/Volunteer';
import { SubscribeSection } from 'components/layout/Home';

const VolunteerView = () => {
  return (
    <div>
      <Welcome />
      <Volunteering />
      <WhySection />
      <VideoSection />
      <SubscribeSection />
    </div>
  );
};

export default VolunteerView;
