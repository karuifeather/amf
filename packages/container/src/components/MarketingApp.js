import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

import { history } from '../bootstrap';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });

    history.subscribe(() => {
      onParentNavigate(history.location);
    });
  });

  return <div ref={ref} />;
};
