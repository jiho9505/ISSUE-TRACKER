import React, { useState, useContext, useEffect, createContext } from 'react';

const HistoryContext = createContext(null);

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

  return <HistoryContext.Provider value={{ navigateTo, curLocation }}>{children}</HistoryContext.Provider>;
};

const pathToRegex = (path) => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const Switch = ({ children }) => {
  const { curLocation } = useContext(HistoryContext);

  const routes = children.map((child) => child.props.path);

  const potentialMatches = routes.map((route, idx) => {
    return {
      idx,
      result: curLocation.match(pathToRegex(route)),
    };
  });

  const match = potentialMatches.find((potentialMatch) => potentialMatch.result !== null);

  if (!match) return children[children.length - 1];

  const choicedChildIdx = match.idx;
  return children[choicedChildIdx];
};

const Route = ({ children }) => {
  return children;
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
