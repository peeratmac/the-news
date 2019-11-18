import React, { Component } from 'react';
import local from '../../data/local';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local: [],
      technology: [],
      entertainment: [],
      science: [],
      health: []
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://whats-new-api.herokuapp.com/api/v1/news'
    );
    const data = await response.json();
    console.log(data);
    this.setState({
      local: data.local,
      technology: data.technology,
      entertainment: data.entertainment,
      science: data.science,
      health: data.health
    });
  }

  render() {
    return <div className='app'>YOUR CODE GOES HERE!</div>;
  }
}

export default App;
