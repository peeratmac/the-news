import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import { fetchNews } from './App';

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

  it('should update the state of selectedNews and searchedNews when changeNewsCategory is called', () => {
    const mockState = {
      description:
        'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
      headline: 'The Who postpones Denver Concert at the Pepsi Center',
      id: 1,
      img:
        'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
      url:
        'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
    };
    const mockState2 = [
      {
        id: 5,
        headline:
          'Lockheed Martin wins NASA contract for Orion program, which will send first woman to the moon',
        img:
          'https://www.denverpost.com/wp-content/uploads/2018/04/lockheed-04-16-2018-ja-_ja28138a.jpg?w=863',
        description:
          'Lockheed Martin has won a contract from NASA to produce and operate six Orion spacecraft missions, a program the space agency calls the “backbone” of its plans for deep-space exploration and one that will send the first woman to the moon.',
        url:
          'https://www.denverpost.com/2019/09/27/jefferson-county-lockheed-martin-orion-nasa/'
      },
      {
        id: 6,
        headline: '3 monster black holes are going to collide',
        img:
          'https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/09/1862/1048/two-supermassive-black-holes-getty-images.jpg?ve=1&tl=1',
        description:
          "Three supermassive black holes are poised to collide.  These three monsters stand near one another in a system of merging galaxies that's about a billion light-years from Earth, according to a new study published in The Astrophysical Journal.",
        url:
          'https://www.foxnews.com/science/3-monster-black-holes-are-going-to-collide'
      }
    ];
    const expected = mockState2;

    expect(wrapper.state('selectedNews')).toEqual([]);

    wrapper.instance().changeNewsCategory(mockState2);

    expect(wrapper.state('selectedNews')).toEqual(expected);
  });

  it('should run searchNews and update the state based on userInput and filter through to only display appropriate news', () => {
    const mockState = [
      {
        id: 1,
        headline:
          'Unfixable iOS Device Exploit Is the Latest Apple Security Upheaval',
        img:
          'https://media.wired.com/photos/5d8e600f34cab0000861c48d/master/w_2560%2Cc_limit/security_jailbreak_MADEPD.jpg',
        description:
          "Any iPhone device from 2011 to 2017 could soon be jailbroken, thanks to an underlying flaw that there's no way to patch.",
        url: 'https://www.wired.com/story/ios-exploit-jailbreak-iphone-ipad/'
      },
      {
        id: 2,
        headline:
          'SpaceX’s orbital Starship prototype comes together ahead of update event',
        img:
          'https://techcrunch.com/wp-content/uploads/2019/09/EFfmFEEU8AA1SmA.jpeg?w=1390&crop=1',
        description:
          'SpaceX  has completed joining the bottom and top halves of the Starship orbital-scale prototype it’s building in Boca Chica, Texas.',
        url:
          'https://techcrunch.com/2019/09/27/spacexs-orbital-starship-prototype-comes-together-ahead-of-update-event/'
      }
    ];
    const mockState2 = [
      {
        id: 1,
        headline:
          'Unfixable iOS Device Exploit Is the Latest Apple Security Upheaval',
        img:
          'https://media.wired.com/photos/5d8e600f34cab0000861c48d/master/w_2560%2Cc_limit/security_jailbreak_MADEPD.jpg',
        description:
          "Any iPhone device from 2011 to 2017 could soon be jailbroken, thanks to an underlying flaw that there's no way to patch.",
        url: 'https://www.wired.com/story/ios-exploit-jailbreak-iphone-ipad/'
      }
    ];
    const expected = mockState2;

    wrapper.setState({ selectedNews: mockState, searchedNews: mockState });
    expect(wrapper.state('searchedNews')).toEqual(mockState);
    wrapper.instance().searchNews('Apple');
    expect(wrapper.state('selectedNews')).toEqual(expected);
  });

  it.skip('should call the fetch with the correct URL upon mounting', () => {
    const mockNewsData = [
      {
        id: 1,
        headline:
          'Unfixable iOS Device Exploit Is the Latest Apple Security Upheaval',
        img:
          'https://media.wired.com/photos/5d8e600f34cab0000861c48d/master/w_2560%2Cc_limit/security_jailbreak_MADEPD.jpg',
        description:
          "Any iPhone device from 2011 to 2017 could soon be jailbroken, thanks to an underlying flaw that there's no way to patch.",
        url: 'https://www.wired.com/story/ios-exploit-jailbreak-iphone-ipad/'
      },
      {
        id: 2,
        headline:
          'SpaceX’s orbital Starship prototype comes together ahead of update event',
        img:
          'https://techcrunch.com/wp-content/uploads/2019/09/EFfmFEEU8AA1SmA.jpeg?w=1390&crop=1',
        description:
          'SpaceX  has completed joining the bottom and top halves of the Starship orbital-scale prototype it’s building in Boca Chica, Texas.',
        url:
          'https://techcrunch.com/2019/09/27/spacexs-orbital-starship-prototype-comes-together-ahead-of-update-event/'
      }
    ];
    const mockResponse = {
      selectedNews: mockNewsData
    };

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });

    expect(window.fetch).toHaveBeenCalledWith(
      'https://whats-new-api.herokuapp.com/api/v1/news'
    );
  });
});
