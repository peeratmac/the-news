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
    const mockChangeNewsCategory = jest.fn();
    const mockState = {
      selectedNews: [],
      local: [
        {
          description:
            'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
          headline: 'The Who postpones Denver Concert at the Pepsi Center',
          id: 1,
          img:
            'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
          url:
            'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
        }
      ],
      technology: [],
      entertainment: [],
      science: [],
      health: [],
      searchNews: []
    };
    const wrapper = shallow(
      <Menu changeNewsCategory={mockChangeNewsCategory} newsState={mockState} />
    );

    wrapper
      .find('h2')
      .at(0)
      .simulate('click');

    expect(mockChangeNewsCategory).toHaveBeenCalled();
  });
});
