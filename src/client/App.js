import React, { useState } from 'react';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import './App.css';

import Login from './components/login';
import NavBar from './components/navBar';
import Tasks from './components/tasks';
import useToken from './components/App/useToken';

export default function App() {

  const { token, setToken, removeToken } = useToken();

    if(!token) {
      return <Login setToken={setToken} />
    }

    return (
      <div className="wrapper">
      <NavBar removeToken ={removeToken} />
      <Router>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Tasks />} />
          <Route path="/tasks" caseSensitive={false} element={<Tasks />} />
        </Routes>
      </Router>
    </div>
    );

}