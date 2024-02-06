import { Suspense, lazy } from 'react';
import SuspenseLoader from 'src/layouts/components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

const Holidays = Loader(lazy(() => import('src/components/Holidays/Holidays')));

const Albums = Loader(lazy(() => import('src/components/PhotoGallery/Albums')));
const Photos = Loader(lazy(() => import('src/components/PhotoGallery/photos')));

const commonRoutes = [

  {
    path: 'PhotoGallery',
    element: <Albums />
  },
  {
    path: 'PhotoGallery/:Month/:Year',
    element: <Albums />
  },
  {
    path: 'Photos/:imgId/:FromRoute/:Month/:Year',
    element: <Photos />
  },

  {
    path: 'Holidays',
    element: <Holidays />
  },

];

export default commonRoutes;
