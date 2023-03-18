import React from 'react'
import Welcome from 'components/layout/Volunteer/Welcome'
import Volunteering from 'components/layout/Volunteer/Volunteering'
import WhySection from 'components/layout/Volunteer/WhySection'
import VideoSection from 'components/layout/Volunteer/VideoSection'
import { SubscribeSection } from 'components/layout/Home'
// import { Welcome, Volunteering, WhySection } from 'components/layout/Volunteer';

const VolunteerView = () => {
  return (
    <div>
      <Welcome />
      <Volunteering />
      <WhySection />
      <VideoSection />
      <SubscribeSection/>
    </div>
  )
}

export default VolunteerView
