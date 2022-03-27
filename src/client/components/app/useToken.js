import { useState } from 'react';

export default function useToken() {

  const getToken = () => {
    const userToken = JSON.parse(localStorage.getItem('token'));
    return userToken
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };

  const removeToken = () => {
    localStorage.removeItem('token')
    setToken('');
  }


  return {
    setToken: saveToken,
    removeToken: removeToken,
    token
  }
}