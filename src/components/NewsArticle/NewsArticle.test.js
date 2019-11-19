import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should match the NewsArticle Snapshot', () => {
    const wrapper = shallow(
      <NewsArticle
        key={5}
        headline='The Chainsmokers are playing in Denver tonight!'
        image='https://github.com/peeratmac'
        description='Push My Luck, Closer, Paris, You Owe Me, Great Songs'
        url='https://www.linkedin.com/in/peerats'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
