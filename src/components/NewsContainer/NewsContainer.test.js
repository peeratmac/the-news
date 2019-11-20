import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it('should match the NewsContainer Snapshot', () => {
    const mockSelectedNews = [
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
          'SpaceX has completed joining the bottom and top halves of the Starship orbital-scale prototype it’s building in Boca Chica, Texas.',
        url:
          'https://techcrunch.com/2019/09/27/spacexs-orbital-starship-prototype-comes-together-ahead-of-update-event/'
      }
    ];
    const wrapper = shallow(<NewsContainer articles={mockSelectedNews} />);
    expect(wrapper).toMatchSnapshot();
  });
});
