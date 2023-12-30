import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { createBrowserHistory } from 'history';

export default () => {
  const ref = useRef(null);
  const history = createBrowserHistory();

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ toLocation: { pathname: nextPathName } }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });
  });

  return <div ref={ref} />;
};
