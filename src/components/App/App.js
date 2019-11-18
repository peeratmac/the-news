import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://whats-new-api.herokuapp.com/api/v1/news'
    );
    const data = await response.json();
    console.log(data);
  }

  render() {
    return <div className='app'>YOUR CODE GOES HERE!</div>;
  }
}

export default App;
