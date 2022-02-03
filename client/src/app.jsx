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
import Callback from './components/GithubCallBack';

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

/**
 * @auth [ no-accessor : 비접속 유저 / accessor : 접속 유저 ]
 */
const createMainContent = () => {
  return (
    <PageContainer>
      <Router>
        <Switch>
          <Route path="/" component={<Login />} auth="no-accessor" />
          <Route path="/register" component={<Register />} auth="no-accessor" />
          <Route path="/main" component={<Main />} auth="accessor" />
          <Route path="/write" component={<Writing />} auth="accessor" />
          <Route path="/label" component={<Label />} auth="accessor" />
          <Route path="/milestone" component={<MileStone />} auth="accessor" />
          <Route path="/callback" component={<Callback />} auth="no-accessor" />
          <Route path="/:notfound" component={<NotFound />} />
        </Switch>
      </Router>
      <Message />
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
