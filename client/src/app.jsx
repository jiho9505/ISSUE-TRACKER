import React, { Suspense } from 'react';
import styled from '@emotion/styled';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from '@emotion/react';

import theme from './static/style/theme';
import Loader from '@/components/Loader';
import NotFound from './pages/NotFound';

import { Router, Switch, Route, Link } from './core/Router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary fallbackRender={Loader}>
        <Suspense fallback={Loader}>
          <PageContainer>
            <Router>
              <Switch>
                <Route path="/">
                  <div>Root</div>
                  <Link to="/">Go Root</Link>
                  <Link to="/hi">Go Hi</Link>
                  <Link to="/bye">Go Bye</Link>
                </Route>
                <Route path="/hi">
                  <div>hi</div>
                  <Link to="/">Go Root</Link>
                  <Link to="/hi">Go Hi</Link>
                  <Link to="/bye">Go Bye</Link>
                </Route>
                <Route path="/bye">
                  <div>Bye</div>
                  <Link to="/">Go Root</Link>
                  <Link to="/hi">Go Hi</Link>
                  <Link to="/bye">Go Bye</Link>
                </Route>
                <Route path="/:notfound">
                  <NotFound />
                </Route>
              </Switch>
            </Router>
          </PageContainer>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

export default App;
