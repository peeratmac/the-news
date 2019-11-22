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

  it('should call the changeNewsCategory prop with the appropriate news category (local news) when button is clicked', () => {
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

    expect(mockChangeNewsCategory).toHaveBeenCalledWith(mockState.local);
  });

  it('should call the changeNewsCategory prop with the appropriate news category (technology news) when button is clicked', () => {
    const mockChangeNewsCategory = jest.fn();
    const mockState = {
      selectedNews: [],
      local: [],
      technology: [
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
      ],
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
      .at(1)
      .simulate('click');

    expect(mockChangeNewsCategory).toHaveBeenCalledWith(mockState.technology);
  });

  it('should call the changeNewsCategory prop with the appropriate news category (entertainment news) when button is clicked', () => {
    const mockChangeNewsCategory = jest.fn();
    const mockState = {
      selectedNews: [],
      local: [],
      technology: [],
      entertainment: [
        {
          id: 1,
          headline: 'Spider-Man Will Remain in the Marvel Cinematic Universe',
          img:
            'https://static01.nyt.com/images/2019/09/27/multimedia/27xp-spiderman/27xp-spiderman-superJumbo.jpg?quality=90&auto=webp',
          description:
            'The web slinger will be the only superhero with the ability to cross between Disney and Sony’s cinematic universes, according to Marvel Studios.',
          url:
            'https://www.nytimes.com/2019/09/27/business/media/spiderman-mcu-sony-marvel.html'
        }
      ],
      science: [],
      health: [],
      searchNews: []
    };
    const wrapper = shallow(
      <Menu changeNewsCategory={mockChangeNewsCategory} newsState={mockState} />
    );

    wrapper
      .find('h2')
      .at(2)
      .simulate('click');

    expect(mockChangeNewsCategory).toHaveBeenCalledWith(
      mockState.entertainment
    );
  });

  it('should call the changeNewsCategory prop with the appropriate news category (science news) when button is clicked', () => {
    const mockChangeNewsCategory = jest.fn();
    const mockState = {
      selectedNews: [],
      local: [],
      technology: [],
      entertainment: [],
      science: [
        {
          id: 1,
          headline: "India's Lost Moon Lander Is Somewhere in This Photo",
          img:
            'https://cdn.mos.cms.futurecdn.net/FsUeVGmY89BWeb36U8cUj5-650-80.jpg',
          description:
            "The image was captured by NASA's Lunar Reconnaissance Orbiter (LRO) on Sept. 17 as it flew over the targeted landing site of India's Chandrayaan-2 mission.",
          url:
            'https://www.livescience.com/india-moon-landing-site-nasa-photo.html'
        }
      ],
      health: [],
      searchNews: []
    };
    const wrapper = shallow(
      <Menu changeNewsCategory={mockChangeNewsCategory} newsState={mockState} />
    );

    wrapper
      .find('h2')
      .at(3)
      .simulate('click');

    expect(mockChangeNewsCategory).toHaveBeenCalledWith(mockState.science);
  });

  it('should call the changeNewsCategory prop with the appropriate news category (health news) when button is clicked', () => {
    const mockChangeNewsCategory = jest.fn();
    const mockState = {
      selectedNews: [],
      local: [],
      technology: [],
      entertainment: [],
      science: [],
      health: [
        {
          id: 3,
          headline:
            'OUTBREAK UPDATE: Confirmed Legionnaires cases in NC, SC increase to more than 60',
          img:
            'https://wlos.com/resources/media/ba379555-ba08-4d1e-831b-5886e5176db3-large16x9_09.27legionnaires1.jpg?1569600723150',
          description:
            'On Friday, Buncombe County Health and Human Services (BCHHS) reports 20 confirmed cases of Legionnaires disease in the county, including one fatality, as of 5 p.m. on Thursday.',
          url:
            'https://wlos.com/news/local/update-legionnaires-cases-in-buncombe-increase-from-15-to-20'
        }
      ],
      searchNews: []
    };
    const wrapper = shallow(
      <Menu changeNewsCategory={mockChangeNewsCategory} newsState={mockState} />
    );

    wrapper
      .find('h2')
      .at(4)
      .simulate('click');

    expect(mockChangeNewsCategory).toHaveBeenCalledWith(mockState.health);
  });
});
