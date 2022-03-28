import { useState } from 'react';

export default function useToken() {

  const getToken = () => {
    const token = localStorage.getItem('token')
    if (token !== 'undefined') {
      const userToken = JSON.parse(token);
      return userToken
    } else {
      return ''
    }
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