import { useState } from 'react';

export const useAuth = () => {
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();

  const register = (uid, token) => {
    setUserId(uid);
    setToken(token);
  }

  return {token, userId, register};
}

