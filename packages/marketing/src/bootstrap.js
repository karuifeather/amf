import React from 'react';
import { createRoot } from 'react-dom/client';
import { createMemoryHistory } from '@tanstack/react-router';

import App from './App';

const mount = (el, { onNavigate }) => {
  const root = createRoot(el);
  const history = createMemoryHistory();

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
  const rootEl = document.getElementById('_root-marketing');

  const props = { onNavigate: () => {} };

  if (rootEl) {
    mount(rootEl, props);
  }
}

export { mount };
