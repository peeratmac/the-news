import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedNews: [],
      local: [],
      technology: [],
      entertainment: [],
      science: [],
      health: [],
      searchNews: []
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://whats-new-api.herokuapp.com/api/v1/news'
    );
    const data = await response.json();
    console.log(data);
    this.setState({
      selectedNews: data.technology,
      local: data.local,
      technology: data.technology,
      entertainment: data.entertainment,
      science: data.science,
      health: data.health,
      searchedNews: data.technology
    });
  }

  render() {
    return (
      <div className='app'>
        <NewsContainer articles={this.state.selectedNews} />
      </div>
    );
  }
}

export default App;
