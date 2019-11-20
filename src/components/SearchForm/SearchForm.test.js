import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  it('should match the SearchForm Snapshot', () => {
    const mockSearchNews = jest.fn();
    const wrapper = shallow(<SearchForm searchNews={mockSearchNews} />);
    expect(wrapper).toMatchSnapshot();
  });
});
