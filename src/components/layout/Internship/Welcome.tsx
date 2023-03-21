import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from 'navigation/CONSTANTS';
import { internship } from 'assets/images';

const Welcome = () => {
  return (
    <div className="bg-[url('')] bg-no-repeat bg-[length:100%_100%] bg-center font-serif text-center flex flex-col justify-center items-center text-base-100">
      <div className="h-[70vh] w-full relative object-cover">
        <img
          role="presentation"
          loading="lazy"
          src={internship}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="lg:px-[95px] absolute px-[20px]">
        <div className="text-[18px] mb-20">
          <ul className="flex justify-center ">
            <li className="mr-[5px] hover:text-[#39B755]">
              <Link to={HOME} className="">
                Home
              </Link>
            </li>
            <li className="mr-[5px]">&gt;</li>
            <li className="text-[#39B755]">Internship</li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-3xl text-[30px] mb-5">
            Welcome to the United States of Africa. We give you the most impactful career.
          </p>

          <p className="text-[18px]">
            With our internship programme, recent graduates and students are offered opportunities
            to get real life experience to boost or start their professional careers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
