import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  state = { apiRes: null };

  componentDidMount() {
    fetch('/api/test')
      .then(res => res.json())
      .then(res => this.setState({ apiRes: res.testApiRes }));
  }

  render() {
    const { apiRes } = this.state;
    return (
      <div className="App">
      <header className="App-header">
        <p>
            Task scheduling fullstack application using Node and ReactJs
            {apiRes ? <h5>{apiRes} </h5> : <h5>Loading.. please wait!</h5>}
        </p>
      </header>
    </div>
    );
  }
}