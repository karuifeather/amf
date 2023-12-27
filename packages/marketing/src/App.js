import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {
  StyledEngineProvider,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
});

export default () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <BrowserRouter>
            <Routes>
              <Route exact path="/pricing" Component={Pricing} />
              <Route path="/" Component={Landing} />
            </Routes>
          </BrowserRouter>
        </StyledEngineProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};
