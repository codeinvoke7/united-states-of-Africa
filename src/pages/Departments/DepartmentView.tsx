import React, { Fragment } from 'react';
import { departmentsHeader } from 'assets/images';
import { DepartmentSection } from 'components/layout/Departments';
import { Seo } from 'Seo';

export const DepartmentView: React.FC = () => {
  const currentUrl = window.location.href;
  const canonicalUrl = currentUrl.split('?')[0].split('#')[0];

  return (
    <Fragment>
      <Seo
        title="United States of Africa Departments"
        description="Explore our Departments and learn how you can get involved in our mission"
        type="article"
        url={canonicalUrl}
      />
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
      <DepartmentSection />
    </Fragment>
  );
};
