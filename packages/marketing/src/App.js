import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  StyledEngineProvider,
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import { Router, RouterProvider } from '@tanstack/react-router';

import { routeTree } from './router';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          padding: '1rem',
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
});

export default ({ onNavigate, history }) => {
  const router = new Router({ routeTree, history });
  router.subscribe('onResolved', onNavigate);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StyledEngineProvider injectFirst>
          <RouterProvider router={router} />
        </StyledEngineProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};
