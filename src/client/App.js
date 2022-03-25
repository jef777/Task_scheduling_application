import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = { apiRes: null };


  render() {
    const { apiRes } = this.state;
    return (
      <div className="App">
      <header className="App-header">
      <h1 className="text-green-600">Using tailwindcss</h1>
        <p>
            Task scheduling fullstack application using Node and ReactJs
        </p>
      </header>
    </div>
    );
  }
}