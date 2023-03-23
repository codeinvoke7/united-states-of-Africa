import { ProtectedRoutes } from 'components/guards';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

<<<<<<< HEAD
import { HOME, LOGIN, VOLUNTEER, CONTACT_US, INTERNSHIP, ABOUT, DEPARTMENTS } from './CONSTANTS';
import { Home, Login, Volunteer, Internship, PageNotFoundError, ContactUs, AboutUs, Departments } from 'pages';
=======
import { HOME, LOGIN, VOLUNTEER, CONTACT_US, INTERNSHIP, ABOUT, WORKFORCE } from './CONSTANTS';
import { Home, Login, Volunteer, Internship, PageNotFoundError, ContactUs, AboutUs, Workforce } from 'pages';
>>>>>>> 8bb56eaa486aa690619b9b7aad91f1c422c1fb24

import { Page } from 'components/layout';

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        {/** ***********************PUBLIC ROUTES************************************** */}

        {/* List all public routes here */}
        <Route exact path={HOME} element={<Home />} />
        <Route exact path={LOGIN} element={<Login />} />
        <Route exact path={VOLUNTEER} element={<Volunteer />} />
        <Route exact path={INTERNSHIP} element={<Internship />} />
        <Route exact path={CONTACT_US} element={<ContactUs />} />
        <Route exact path={ABOUT} element={<AboutUs />} />
        <Route exact path={DEPARTMENTS} element={<Departments />} />
        <Route exact path={WORKFORCE} element={<Workforce />} />

        {/** ***********************PROTECTED ROUTES************************************** */}
        <Route element={<ProtectedRoutes redirectPath={LOGIN} />} />

        {/** ***********************404************************************** */}

        {/* List All 404 routes here */}
        <Route path="*" element={<PageNotFoundError />} />
      </Route>
    </Routes>
  );
}

export default RouterConfig;
