import React, { Suspense } from 'react';
import styled from '@emotion/styled';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import Loader from './components/Loader';
import NotFound from './pages/NotFound';
import Error from './components/Error';

import theme from './static/style/theme';
import { Router, Switch, Route, Link } from './core/Router';

const queryClient = new QueryClient();

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary FallbackComponent={Error}>
            <Suspense fallback={Loader}>
              <PageContainer>
                <Router>{RouterContent}</Router>
              </PageContainer>
            </Suspense>
          </ErrorBoundary>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

const RouterContent = (
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
);

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;

export default App;
