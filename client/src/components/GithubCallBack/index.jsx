import React, { useState, useEffect } from 'react';

import Loader from '@/components/Loader';

import { api } from '@/api/base';
import { useNavigate } from '@/core/Router';

const Callback = () => {
  const navigateTo = useNavigate();
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const authorizationCode = qs.get('code');

    const getAccessToken = async (authorizationCode) => {
      const result = await api.post('/users/github', {
        authorizationCode,
      });
      if (result.isSuccess) navigateTo('/main');
      if (!result.isSuccess) setErrorMsg(result.message);
    };

    if (authorizationCode) getAccessToken(authorizationCode);
  }, []);

  if (errorMsg) throw new Error(errorMsg);
  return (
    <>
      <Loader />
    </>
  );
};

export default Callback;
