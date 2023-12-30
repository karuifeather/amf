import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const mount = (el, { onNavigate }) => {
  const root = createRoot(el);

  root.render(<App callback={onNavigate} />);
};

if (process.env.NODE_ENV === 'development') {
  const rootEl = document.getElementById('_root-marketing');

  const props = { onNavigate: () => {} };

  if (rootEl) {
    mount(rootEl, props);
  }
}

export { mount };
