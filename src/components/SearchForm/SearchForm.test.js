import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let wrapper;
  beforeEach(() => {
    const mockSearchNews = jest.fn();
    wrapper = shallow(<SearchForm searchNews={mockSearchNews} />);
  });
  it('should match the SearchForm Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state of searchInputQuery when handleSearchNews is called', () => {
    const mockEvent = {
      target: { name: 'search-input-query', value: 'iPhone' }
    };
    const expected = 'iPhone';

    wrapper.instance().handleSearchNews(mockEvent);
    expect(wrapper.state('searchInputQuery')).toEqual(expected);
  });
});
