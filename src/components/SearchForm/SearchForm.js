import React, { Component } from 'react';
import './SearchForm.css';
import PropTypes from 'prop-types';
class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchInputQuery: ''
    };
  }

  handleSearchNews = event => {
    this.setState({ searchInputQuery: event.target.value });
    this.props.searchNews(event.target.value);
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

SearchForm.propTypes = {
  searchNews: PropTypes.func.isRequired
};
