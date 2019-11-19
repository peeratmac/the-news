import React, { Component } from 'react';
import Menu from '../Menu/Menu';
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

  changeNewsCategory = category => {
    this.setState({ selectedNews: category, searchedNews: category });
  };

  render() {
    return (
      <div className='app'>
        <Menu
          changeNewsCategory={this.changeNewsCategory}
          newsState={this.state}
        />
        <NewsContainer articles={this.state.selectedNews} />
      </div>
    );
  }
}

export default App;
