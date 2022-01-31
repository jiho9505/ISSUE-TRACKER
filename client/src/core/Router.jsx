import React, { useState, useContext, useEffect, createContext } from 'react';
import { useRecoilValue } from 'recoil';

import { isLoggedInAtom } from '@/store/loginState';

const HistoryContext = createContext({ curLocation: '/', navigateTo: () => {} });

export const useNavigate = () => {
  const { navigateTo } = useContext(HistoryContext);
  return navigateTo;
};

const Router = ({ children }) => {
  const [curLocation, setCurLocation] = useState(window.location.pathname);
  const navigateTo = (path) => {
    history.pushState('', '', path);
    setCurLocation(path);
  };

  useEffect(() => {
    const movePage = ({ target }) => {
      const nextPath = target.location.pathname;
      setCurLocation(nextPath);
    };

    window.addEventListener('popstate', movePage);
    return () => {
      window.removeEventListener('popstate', movePage);
    };
  }, []);

  return (
    <HistoryContext.Provider value={{ curLocation, navigateTo }}>
      {children}
    </HistoryContext.Provider>
  );
};

const pathToRegex = (path) =>
  new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const Switch = ({ children }) => {
  const { curLocation } = useContext(HistoryContext);
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const loginComponent = children[0];

  const routes = children.map((child) => child.props.path);
  const potentialMatches = routes.map((route, idx) => {
    return {
      idx,
      result: curLocation?.match(pathToRegex(route)),
    };
  });

  const match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);
  if (!match) return children[children.length - 1];

  const choicedChildIdx = match.idx;
  const choicedPage = children[choicedChildIdx];

  if (choicedPage.props.auth && !isLoggedIn) return loginComponent;
  return choicedPage;
};

const Route = ({ component }) => {
  return component;
};

const Link = ({ to, children, ...rest }) => {
  const navigateTo = useNavigate();

  const handleClickLink = () => {
    navigateTo(to);
    rest.onClick?.();
  };

  return (
    <a {...rest} onClick={handleClickLink}>
      {children}
    </a>
  );
};

export { Router, Route, Link, Switch };
