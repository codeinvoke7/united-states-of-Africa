import React from 'react';
import { Welcome, FAQs } from 'components/layout/Internship';
import { SubscribeSection } from 'components/layout/Home';

const InternshipView = () => {
  return (
    <div>
      <Welcome />
      <FAQs />
      <SubscribeSection />
    </div>
  );
};

export default InternshipView;
