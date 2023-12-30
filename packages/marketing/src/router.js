import React from 'react';
import { RootRoute, Route } from '@tanstack/react-router';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

let rootRoute = new RootRoute();

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Landing />,
});

const pricingRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'pricing',
  component: () => <Pricing />,
});

export const routeTree = rootRoute.addChildren([indexRoute, pricingRoute]);
