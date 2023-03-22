import { ProtectedRoutes } from 'components/guards';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HOME, LOGIN, VOLUNTEER, CONTACT_US, ABOUT, DEPARTMENTS } from './CONSTANTS';
import { Home, Login, Volunteer, PageNotFoundError, ContactUs, AboutUs, Departments } from 'pages';
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
        <Route exact path={CONTACT_US} element={<ContactUs />} />
        <Route exact path={ABOUT} element={<AboutUs />} />
        <Route exact path={DEPARTMENTS} element={<Departments />} />

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
