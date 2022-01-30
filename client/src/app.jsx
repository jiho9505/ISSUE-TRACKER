import React, { Suspense, lazy } from 'react';
import styled from '@emotion/styled';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { RecoilRoot } from 'recoil';

import Loader from './components/Loader';
import Error from './components/Error';
import Message from './components/Message';

import theme from './static/style/theme';
import { Router, Route, Switch } from './core/Router';

const queryClient = new QueryClient();

const Login = lazy(() => import('./pages/Login' /* webpackPrefetch: true */));
const Register = lazy(() => import('./pages/Register' /* webpackPrefetch: true */));
const NotFound = lazy(() => import('./pages/NotFound' /* webpackPrefetch: true */));
const Main = lazy(() => import('./pages/Main' /* webpackPrefetch: true */));
const Writing = lazy(() => import('./pages/Writing' /* webpackPrefetch: true */));
const Label = lazy(() => import('./pages/Label' /* webpackPrefetch: true */));
const MileStone = lazy(() => import('./pages/MileStone' /* webpackPrefetch: true */));

const App = () => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ErrorBoundary FallbackComponent={Error}>
            <Suspense fallback={<Loader />}>{createMainContent()}</Suspense>
          </ErrorBoundary>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
};

const createMainContent = () => {
  return (
    <PageContainer>
      <Router>
        <Switch>
          <Route path="/" component={<Login />} />
          <Route path="/register" component={<Register />} />
          <Route path="/main" component={<Main />} />
          <Route path="/write" component={<Writing />} />
          <Route path="/label" component={<Label />} />
          <Route path="/milestone" component={<MileStone />} />
          <Route path="/:notfound" component={<NotFound />} />
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
  margin: 0 auto;
`;
