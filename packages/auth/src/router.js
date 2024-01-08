import React from 'react';
import { RootRoute, Route } from '@tanstack/react-router';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

let rootRoute = new RootRoute();

const signinRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/auth/signin',
  component: SignIn,
});

const signupRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/auth/signup',
  component: SignUp,
});

export const routeTree = rootRoute.addChildren([signinRoute, signupRoute]);
