import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/layouts/components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Dashboards
//const SchoolList = Loader(lazy(() => import('src/RITeSchool/authentication/schoolList/schoolList')));
const ForgotPassword = Loader(
  lazy(() => import('src/components/Authentication/Login/ForgotPassword'))
);
const TermAndCondition = Loader(
  lazy(
    () =>
      import('src/components/Authentication/TermAndConditions/TermAndCondition')
  )
);
const SchoolList = Loader(
  lazy(() => import('src/components/Authentication/Login/Login'))
);

const AuthenticationRoute = [
  {
    path: '/',
    element: <Navigate to="schoolList" replace />
  },
  {
    path: 'schoolList',
    element: <SchoolList />
  },
  {
    path: 'forgotPassword',
    element: <ForgotPassword />
  },

  {
    path: 'TermAndCondition',
    element: <TermAndCondition />
  }
];

export default AuthenticationRoute;
