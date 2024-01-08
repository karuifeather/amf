import React, { lazy, Suspense } from 'react';
import { RootRoute } from '@tanstack/react-router';

import Header from './components/Header';
import Progress from './components/Progress';

const AuthLazy = lazy(() => import('./components/AuthApp'));
const MarketingLazy = lazy(() => import('./components/MarketingApp'));

let rootRoute = new RootRoute({
  component: () => {
    return (
      <React.Fragment>
        <Header />
        <Suspense fallback={<Progress />}>
          <AuthLazy />
          <MarketingLazy />
        </Suspense>
      </React.Fragment>
    );
  },
});

export const routeTree = rootRoute;
