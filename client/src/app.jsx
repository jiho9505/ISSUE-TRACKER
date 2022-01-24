import React, { Suspense } from 'react';
import styled from '@emotion/styled';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import Loader from './components/Loader';
import NotFound from './pages/NotFound';
import Error from './components/Error';
import Login from './pages/Login';

import theme from './static/style/theme';
import { Router, Switch, Route } from './core/Router';
import Register from './pages/Register';
import Message from './components/Message';

const queryClient = new QueryClient();

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
          <Route path="/bye">
            <div>Bye</div>
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
