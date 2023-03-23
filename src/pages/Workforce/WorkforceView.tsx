import React from 'react';
import {
  aboutHeaderBackground,
  aboutHeaderBackgroundMobile,
  teamMember1,
  teamMember2,
  teamMember3,
  member1,
  member2,
  member3
} from 'assets/images';
import { SubscribeSection } from 'components/layout/Home';

import { RxCaretRight } from 'react-icons/rx';

const Teamcard = (member, key) => {
  console.log(member);
  member = member.member;
  return (
    <div className=" rounded  lg:w-10/12" key={key}>
      <div>
        <img className="rounded-md object-cover w-full" src={member.image} alt="team member" />
      </div>

      <div className="text-center text-xl lg:text-2xl font-serif text-white font-semibold  pt-4">
        {member.name}
      </div>
      <div className="mt-2 text-center  text-gray-400">{member.role}</div>
      <div className="py-3 flex justify-center gap-2 text-white">
        <div>
          <svg width="25" height="25" viewBox="0 0 20 20" className="a1B">
            <path d="M18.7168 4.99998C18.0751 5.29165 17.3834 5.48331 16.6668 5.57498C17.4001 5.13331 17.9668 4.43331 18.2334 3.59165C17.5418 4.00831 16.7751 4.29998 15.9668 4.46665C15.3084 3.74998 14.3834 3.33331 13.3334 3.33331C11.3751 3.33331 9.77511 4.93331 9.77511 6.90831C9.77511 7.19165 9.80845 7.46665 9.86678 7.72498C6.90011 7.57498 4.25845 6.14998 2.50011 3.99165C2.19178 4.51665 2.01678 5.13331 2.01678 5.78331C2.01678 7.02498 2.64178 8.12498 3.60845 8.74998C3.01678 8.74998 2.46678 8.58331 1.98345 8.33331C1.98345 8.33331 1.98345 8.33331 1.98345 8.35831C1.98345 10.0916 3.21678 11.5416 4.85011 11.8666C4.55011 11.95 4.23345 11.9916 3.90845 11.9916C3.68345 11.9916 3.45845 11.9666 3.24178 11.925C3.69178 13.3333 5.00011 14.3833 6.57511 14.4083C5.35845 15.375 3.81678 15.9416 2.13345 15.9416C1.85011 15.9416 1.56678 15.925 1.28345 15.8916C2.86678 16.9083 4.75011 17.5 6.76678 17.5C13.3334 17.5 16.9418 12.05 16.9418 7.32498C16.9418 7.16665 16.9418 7.01665 16.9334 6.85831C17.6334 6.35831 18.2334 5.72498 18.7168 4.99998Z"></path>
          </svg>
        </div>
        <div>
          <svg width="25" height="25" viewBox="0 0 20 20" className="a1B">
            <path d="M15.8333 2.5C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333ZM15.4167 15.4167V11C15.4167 10.2795 15.1304 9.5885 14.621 9.07903C14.1115 8.56955 13.4205 8.28333 12.7 8.28333C11.9917 8.28333 11.1667 8.71667 10.7667 9.36667V8.44167H8.44167V15.4167H10.7667V11.3083C10.7667 10.6667 11.2833 10.1417 11.925 10.1417C12.2344 10.1417 12.5312 10.2646 12.75 10.4834C12.9688 10.7022 13.0917 10.9989 13.0917 11.3083V15.4167H15.4167ZM5.73333 7.13333C6.10464 7.13333 6.46073 6.98583 6.72328 6.72328C6.98583 6.46073 7.13333 6.10464 7.13333 5.73333C7.13333 4.95833 6.50833 4.325 5.73333 4.325C5.35982 4.325 5.0016 4.47338 4.73749 4.73749C4.47338 5.0016 4.325 5.35982 4.325 5.73333C4.325 6.50833 4.95833 7.13333 5.73333 7.13333ZM6.89167 15.4167V8.44167H4.58333V15.4167H6.89167Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export const WorkforceView = () => {
  return (
    <>
      <section className="bg-neutral text-neutral-content">
        <div className="relative grid place-content-center px-4 py-24 max-w-xl mx-auto min-h-[12rem]">
          <picture className="absolute inset-0 opacity-70">
            <source srcSet={aboutHeaderBackground} media="(min-width: 48rem)" />
            <img src={aboutHeaderBackgroundMobile} className="w-full h-full object-cover" />
          </picture>

          <div className="relative z-10 font-serif font-bold">
            <p className="text-center text-lg">
              Home &gt; <span className="text-primary">Our Team</span>
            </p>
            <p className="flex text-4xl text-center max-w-md mt-2">
              Welcome to the United States of Africa. Africans united beyond borders.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#E4FFEE] grid place-content-center  shadow-xl">
          <div className=" font-serif font-bold text-center px-4 py-24  mx-auto">
            <p className=" lg:text-[42px] text-center  text-[22px] mt-2 text-lime-500 text-gray-100 text-[#39B755]">
              To be able to make the impact that we are committed to make, it takes an impactful
              group of passionate people.
            </p>

            <div className="flex gap-3 lg:justify-center lg:gap-5 my-4 flex-wrap w-full">
              <a
                href="#leadershipTeam"
                className="text-[#39B755] flex items-center justify-center border-2 border-solid px-2 py-2 border-[#39B755]  rounded-md hover:bg-[#39B755] cursor-pointer hover:text-[#FFF]"
              >
                Leadership Team <RxCaretRight className="w-6 h-6" />
              </a>
              <a
                href="#ambassadors"
                className="text-[#39B755]  flex items-center  border-2 border-solid px-2 py-2 border-[#39B755]  rounded-md hover:bg-[#39B755] cursor-pointer hover:text-[#FFF]"
              >
                Ambassadors <RxCaretRight className="w-6 h-6" />
              </a>
              <a
                href="#boardMembers"
                className="text-[#39B755] flex items-center  border-2 border-solid px-2 py-2 border-[#39B755]  rounded-md hover:bg-[#39B755] cursor-pointer hover:text-[#FFF]"
              >
                Board Members <RxCaretRight className="w-6 h-6" />
              </a>
              <a
                href="#volunteers"
                className="text-[#39B755] flex items-center  border-2 border-solid px-2 py-2 border-[#39B755]  rounded-md hover:bg-[#39B755] cursor-pointer hover:text-[#FFF]"
              >
                Volunteers <RxCaretRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto lg:px-10  px-6" id="leadershipTeam">
          <div className=" ">
            <div className="mx-auto mt-3 max-w-2xl text-center ">
              <p className="mt-2 font-bold lg:text-4xl text-2xl text-[#39B755]  ">
                Leadership Team
              </p>
              <p className="mt-2 lg:text-xl text-gray-400  text-lg">
                To able to make that impact that we are committed to make, it takes an impactful
                group of passionate people. Know them here
              </p>
            </div>
            <div className="grid place-content-center lg-mx-8 grid-cols-2   py-20 lg:grid-cols-3 gap-x-8 lg:gap-y-16">
              {LeadershipTeam.map((member, i) => {
                return <Teamcard member={member} key={i} />;
              })}
            </div>
          </div>
        </div>
        <div className="container mx-auto lg:px-10   px-6" id="ambassadors">
          <div className=" ">
            <div className="mx-auto mt-3 max-w-2xl text-center ">
              <p className="mt-2 font-bold lg:text-4xl text-2xl text-[#39B755]  ">Ambassadors</p>
              <p className="mt-2 lg:text-xl text-gray-400  text-lg">
                To able to make that impact that we are committed to make, it takes an impactful
                group of passionate people. Know them here
              </p>
            </div>
            <div className="grid place-content-center lg-mx-8 grid-cols-2   py-20 lg:grid-cols-3 gap-x-8 lg:gap-y-16">
              {LeadershipTeam.map((member, i) => {
                return <Teamcard member={member} key={i} />;
              })}
            </div>
          </div>
        </div>
        <div className="container mx-auto lg:px-10  px-6" id="boardMembers">
          <div className=" ">
            <div className="mx-auto mt-3 max-w-2xl text-center ">
              <p className="mt-2 font-bold lg:text-4xl text-2xl text-[#39B755]  ">Board Members</p>
              <p className="mt-2 lg:text-xl text-gray-400  text-lg">
                To able to make that impact that we are committed to make, it takes an impactful
                group of passionate people. Know them here
              </p>
            </div>
            <div className="grid place-content-center lg-mx-8 grid-cols-2   py-20 lg:grid-cols-3 gap-x-8 lg:gap-y-16">
              {LeadershipTeam.map((member, i) => {
                return <Teamcard member={member} key={i} />;
              })}
            </div>
          </div>
        </div>
        <div className="container mx-auto lg:px-10  px-6" id="volunteers">
          <div className=" ">
            <div className="mx-auto mt-3 max-w-2xl text-center ">
              <p className="mt-2 font-bold lg:text-4xl text-2xl text-[#39B755]  ">Volunteers</p>
              <p className="mt-2 lg:text-xl text-gray-400  text-lg">
                To able to make that impact that we are committed to make, it takes an impactful
                group of passionate people. Know them here
              </p>
            </div>
            <div className="grid place-content-center lg-mx-8 grid-cols-2   py-20 lg:grid-cols-3 gap-x-8 lg:gap-y-16">
              {LeadershipTeam.map((member, i) => {
                return <Teamcard member={member} key={i} />;
              })}
            </div>
          </div>
        </div>
      </section>
      <SubscribeSection />
    </>
  );
};

let LeadershipTeam = [
  {
    name: 'Daniel Israel',
    role: 'President,USAF',
    image: member1
  },
  {
    name: 'Emilia Jones',
    role: 'Vice President,USAF',
    image: member2
  },
  {
    name: 'Dennis Mbanu',
    role: 'Secretary,USAF Kenya',
    image: member3
  },
  {
    name: 'Mike Ploq',
    role: 'Chief Technology , USAF',
    image: teamMember1
  },
  {
    name: 'Martha Kings',
    role: 'Treasurer,USAF South Africa',
    image: teamMember2
  },
  {
    name: 'Blessing Onu',
    role: 'Chief Operating Officer,USAF',
    image: teamMember3
  }
];
