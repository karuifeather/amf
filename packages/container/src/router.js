import React from 'react';
import { RootRoute, Route } from '@tanstack/react-router';

import Header from './components/Header';
import MarketingApp from './components/MarketingApp';

let rootRoute = new RootRoute({
  component: () => {
    return (
      <React.Fragment>
        <Header />
        <MarketingApp />
      </React.Fragment>
    );
  },
});

export const routeTree = rootRoute.addChildren();
