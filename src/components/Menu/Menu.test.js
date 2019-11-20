import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('should match the Menu Snapshot', () => {
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
    const wrapper = shallow(
      <Menu changeNewsCategory={mockChangeNewsCategory} newsState={mockState} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
