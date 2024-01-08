import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createMemoryHistory,
  createBrowserHistory,
} from '@tanstack/react-router';

import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const root = createRoot(el);

  // defaults to browserHistory in development
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  history.subscribe(() => {
    onNavigate(history.location);
  });

  root.render(<App history={history} />);

  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;

      if (pathname !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const rootEl = document.getElementById('_root-auth');

  // statements below isolates the package in development
  if (rootEl) {
    mount(rootEl, {
      onNavigate: () => {},
      defaultHistory: createBrowserHistory(),
    });
  }
}

export { mount };
