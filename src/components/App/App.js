import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import NewsContainer from '../NewsContainer/NewsContainer';
import './App.css';
import SearchForm from '../SearchForm/SearchForm';

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

  searchNews = userInput => {
    const cleanUpUserInput = userInput.toLowerCase();
    this.setState({
      selectedNews: this.state.searchedNews.filter(article =>
        article.headline.toLowerCase().includes(cleanUpUserInput)
      )
    });
  };

  render() {
    console.log(this.state.selectedNews);
    return (
      <div className='app'>
        <Menu
          changeNewsCategory={this.changeNewsCategory}
          newsState={this.state}
        />
        <main>
          <SearchForm searchNews={this.searchNews} />
          <div className='news-container'>
            <NewsContainer articles={this.state.selectedNews} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
