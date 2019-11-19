import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchInputQuery: ''
    };
  }

  handleSearchNews = event => {
    this.setState({ searchInputQuery: event.target.value });
    this.props.searchNews();
  };

  render() {
    return (
      <form>
        <input
          onChange={event => this.handleSearchNews(event)}
          name='search-input-query'
          value={this.state.searchInputQuery}
          type='text'
          placeholder='Search The News Here'
        />
      </form>
    );
  }
}

export default SearchForm;
