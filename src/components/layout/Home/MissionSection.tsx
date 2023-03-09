import { missionBackground } from 'assets/images';
import React from 'react';
import { TabDataType, Tab, TabContext } from 'components/modules/tabs';
import { useContext } from 'react';
import { RxCaretRight } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { GOAL, MISSION, VISION } from 'navigation/CONSTANTS';

export default function MissionSection() {
  const tabContextValue = useContext(TabContext);

  return (
    <section className="relative overflow-hidden my-16 bg-neutral-600">
      <img
        role="presentation"
        loading="lazy"
        src={missionBackground}
        className="absolute w-full aspect-video object-cover object-center mix-blend-luminosity"
      />
      <div className="max-w-xl mx-auto px-6 py-10 my-16">
        <div className="card bg-neutral text-neutral-content mx-auto lg:mx-0 lg:ml-auto max-w-sm">
          <div className="card-body">
            <h2>{tabsData[tabContextValue?.activeTab || 0]?.label}</h2>

            <h3 className="text-3xl font-bold font-serif">United and Prosperous Africa</h3>

            <Tab tabs={tabsData} />
          </div>
        </div>
      </div>
    </section>
  );
}

const MissionTab = () => {
  return (
    <div>
      <p>Our mission is to unite African states and people of African descent.</p>
      <Link to={MISSION} className="btn btn-accent gap-2 mt-6 rounded-full px-4 normal-case">
        Our Mission <RxCaretRight />
      </Link>
    </div>
  );
};

const VisionTab = () => {
  return (
    <div>
      <p>MissionTab</p>
      <Link to={VISION} className="btn btn-accent gap-2 mt-6 rounded-full px-4 normal-case">
        Our Vision <RxCaretRight />
      </Link>
    </div>
  );
};

const GoalTab = () => {
  return (
    <div>
      <p>MissionTab</p>
      <Link to={GOAL} className="btn btn-accent gap-2 mt-6 rounded-full px-4 normal-case">
        Our Goal <RxCaretRight />
      </Link>
    </div>
  );
};

const tabsData: TabDataType[] = [
  { label: 'Our Mission', content: <MissionTab /> },
  { label: 'Our Vision', content: <VisionTab /> },
  { label: 'Our Goal', content: <GoalTab /> }
];
