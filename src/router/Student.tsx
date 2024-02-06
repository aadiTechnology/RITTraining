import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';

import SuspenseLoader from 'src/layouts/components/SuspenseLoader/index';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Dashboards

const Notification = Loader(
  lazy(() => import('src/components/Notification/Notification'))
);
const Feedback = Loader(lazy(() => import('src/components/Feedback/Feedback')));
const AddFeedback = Loader(
  lazy(() => import('src/components/Feedback/AddFeedback'))
);
const studentRoutes = [
  {
    path: '/',
    element: <Navigate to="holidays" replace />
  },
  {
    path: 'Notification',
    element: <Notification />
  },
  // {
  //   path: 'Jsonholder',
  //   element: <Jsonholder/>
  // },
  {
    path: 'Feedback',
    element: <Feedback />
  },
  {
    path: 'AddFeedback',
    element: <AddFeedback />
  },
];

export default studentRoutes;
