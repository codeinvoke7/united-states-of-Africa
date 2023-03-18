import { ProtectedRoutes } from 'components/guards';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import { HOME, LOGIN, VOLUNTEER } from './CONSTANTS';
import { Home, Login, Volunteer } from 'pages';
=======
import { HOME, LOGIN, CONTACT_US } from './CONSTANTS';
import { Home, Login, PageNotFoundError, ContactUs } from 'pages';
>>>>>>> dce586579b425a781d7f6d9bde5ad5daecf020fb
=======
import { HOME, LOGIN } from './CONSTANTS';
import { Home, Login } from 'pages';
>>>>>>> parent of 5b078c1 (feat: finish initial version of the volunteer page)
import { Page } from 'components/layout';

function RouterConfig() {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        {/** ***********************PUBLIC ROUTES************************************** */}

        {/* List all public routes here */}
        <Route exact path={HOME} element={<Home />} />
        <Route exact path={LOGIN} element={<Login />} />
<<<<<<< HEAD
<<<<<<< HEAD
        <Route exact path={VOLUNTEER} element={<Volunteer />} />
=======
        <Route exact path={CONTACT_US} element={<ContactUs />} />
>>>>>>> dce586579b425a781d7f6d9bde5ad5daecf020fb
=======
>>>>>>> parent of 5b078c1 (feat: finish initial version of the volunteer page)

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
