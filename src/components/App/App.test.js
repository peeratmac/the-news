import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the App Snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should be able to update the state of selectedNews and searchedNews', () => {
    const news = [
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
    ];
    const mockState = {
      selectedNews: [],
      local: [],
      technology: [],
      entertainment: [],
      science: [],
      health: [],
      searchNews: []
    };

    expect(wrapper.state()).toEqual(mockState);
    wrapper.setState({ selectedNews: news, searchedNews: news });
    expect(wrapper.state('selectedNews')).toEqual(news);
    expect(wrapper.state('searchedNews')).toEqual(news);
  });
});
