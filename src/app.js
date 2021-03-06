import React from 'react';
import get from 'lodash/get';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import Header from '@blocklet/ui-react/lib/Header';
import { ThemeProvider, StyledEngineProvider } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import theme from './libs/theme';
import { SessionProvider } from './contexts/session';
import { ConfigProvider } from './contexts/config';

import Home from './components/Home/Home';
import Config from './components/Config/Config';

library.add(fab, fas, far);

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <SessionProvider serviceHost={get(window, 'blocklet.prefix', '/')}>
            <ConfigProvider>
              <div className="app">
                <Header style={{ background: 'transparent' }} />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/config" element={<Config />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </ConfigProvider>
          </SessionProvider>
        </StyledThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

const WrappedApp = App;

export default () => {
  // While the blocklet is deploy to a sub path, this will be work properly.
  const basename = window?.blocklet?.prefix || '/';

  return (
    <Router basename={basename}>
      <WrappedApp />
    </Router>
  );
};
