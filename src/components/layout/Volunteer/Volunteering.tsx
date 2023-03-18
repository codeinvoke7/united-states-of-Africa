import React from 'react'
import { Link } from 'react-router-dom';
import { VOLUNTEER } from 'navigation/CONSTANTS';

const Volunteering = () => {
  return (
    <div className="my-12 mx-16 p-[20px] font-serif flex justify-center items-center flex-col text-justify border-solid border-primary border m-8">
      <div className="">
        <h2 className="text-primary text-[35px] font-bold mb-[30px] text-center">
          Volunteering with USAF
        </h2>

        <p className="mb-[30px]">
          The Lorem ipsum is to talk about volunteering with USAF and how to do so. Therefore, to be
          considered, you must visit our{' '}
          <a className="text-primary underline" href="">
            Volunteer Management System page
          </a>{' '}
          to sign up or sign in to apply. <br /> From here is just a dummy text that you have to
          change. Click on the “Apply Now” button when you find a vacancy that is of interest to
          you, read the instructions and continue to the application process. <br /> Register or
          sign in to view the vacancy, customize your profile to be suitability for the role you are
          applying for and carefully review the requirements for each internship opportunity. Apply
          and our team will reach out to you inform you on your application status.
        </p>

        <div className="text-center">
          <Link to={VOLUNTEER} className="btn btn-accent rounded-full px-6 gap-2 normal-case">
            View Opportunities
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Volunteering
