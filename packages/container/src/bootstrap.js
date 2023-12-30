import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserHistory } from '@tanstack/react-router';

import App from './App';

export const history = createBrowserHistory();

const root = createRoot(document.getElementById('root'));
root.render(<App history={history} />);
