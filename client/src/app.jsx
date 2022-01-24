import React, { Suspense, lazy } from 'react';
import styled from '@emotion/styled';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import Loader from './components/Loader';
import Error from './components/Error';
import Message from './components/Message';

import theme from './static/style/theme';
import { Router, Switch, Route } from './core/Router';

const queryClient = new QueryClient();

const Login = lazy(() => import('./pages/Login' /* webpackPrefetch: true */));
const Register = lazy(() => import('./pages/Register' /* webpackPrefetch: true */));
const NotFound = lazy(() => import('./pages/NotFound' /* webpackPrefetch: true */));

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary FallbackComponent={Error}>
            <Suspense fallback={Loader}>{createMainContent()}</Suspense>
          </ErrorBoundary>
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

const createMainContent = () => {
  return (
    <PageContainer>
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/:notfound">
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Message></Message>
    </PageContainer>
  );
};

export default App;

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`;
