import React, { useState, useContext, useEffect, createContext } from 'react';

const HistoryContext = createContext({ curLocation: '/' });

const Router = ({ children }) => {
  const [curLocation, setCurLocation] = useState(window.location.pathname);
  const [forceRenderCount, setForceRenderCount] = useState(0);

  const forceRender = () => {
    setForceRenderCount((prev) => prev + 1);
  };

  useEffect(() => {
    History.prototype.push = (path) => {
      window.history.pushState('', '', path);
      setCurLocation(path);
    };

    const movePage = ({ target }) => {
      const nextPath = target.location.pathname;
      setCurLocation(nextPath);
    };

    window.addEventListener('popstate', movePage);

    return () => {
      window.removeEventListener('popstate', movePage);
    };
  }, []);

  return <HistoryContext.Provider value={{ curLocation, forceRender }}>{children}</HistoryContext.Provider>;
};

const pathToRegex = (path) => new RegExp('^' + path.replace(/\//g, '\\/').replace(/:\w+/g, '(.+)') + '$');

const Switch = ({ children }) => {
  useContext(HistoryContext);

  const routes = children.map((child) => child.props.path);

  const potentialMatches = routes.map((route, idx) => {
    return {
      idx,
      result: location.pathname.match(pathToRegex(route)),
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

const Link = ({ to, children, shouldForceRender = false, ...rest }) => {
  const { forceRender } = useContext(HistoryContext);

  const handleClickLink = () => {
    if (shouldForceRender) forceRender();
    window.history.push(to);
    rest.onClick?.();
  };

  return (
    <a {...rest} onClick={handleClickLink}>
      {children}
    </a>
  );
};

export { Router, Route, Link, Switch };
