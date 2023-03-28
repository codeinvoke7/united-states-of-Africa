import React, { Fragment } from 'react';
import { departmentsHeader } from 'assets/images';
import { DepartmentSection, Search } from 'components/layout/Departments';

export const DepartmentView = () => {
  return (
    <Fragment>
      <section>
        <div
          className="pt-24 relative"
          style={{
            backgroundImage: `url(${departmentsHeader})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: '100%',
            height: '400px',
            backgroundPosition: 'center center',
            backgroundBlendMode: 'darken',
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          }}
        >
          <div className="font-poppins text-3xl text-[#fff] absolute top-0 left-0 w-full h-full flex flex-col text-center justify-center px-2">
            <h2 className="text-lg pb-5">
              <a href="/">Home </a> &gt; <span className="text-[#39B755]">Departments</span>
            </h2>
            <p>Welcome to the United States of Africa. Africans united beyond Boarders.</p>
          </div>
        </div>
      </section>
      <Search />
      <DepartmentSection />
      {/* <PaginationNav1Presentation /> */}
    </Fragment>
  );
};
