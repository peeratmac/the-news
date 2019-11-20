import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  let wrapper;

  beforeEach(() => {
    const mockChangeNewsCategory = jest.fn();
    const mockState = {
      selectedNews: [],
      local: [],
      technology: [],
      entertainment: [],
      science: [],
      health: [],
      searchNews: []
    };
    wrapper = shallow(
      <Menu changeNewsCategory={mockChangeNewsCategory} newsState={mockState} />
    );
  });

  it('should match the Menu Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the changeNewsCategory prop with the appropriate news category when button is clicked', () => {
    wrapper
      .find('h2')
      .at(0)
      .simulate('click');

    expect(mockChangeNewsCategory).toHaveBeenCalled();
  });
});
