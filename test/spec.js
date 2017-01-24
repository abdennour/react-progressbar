import 'jsdom-global/register';
import React from 'react';
import {
  mount,
  shallow
} from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';

import Progress from '../src';

const rgb2hex = (rgb) => {
  if (rgb.search("rgb") === -1) return rgb;
  rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
  const hex = (x) => ("0" + parseInt(x).toString(16)).slice(-2);
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
};

const noCase = (string) => string.toLowerCase();

const getRange = (from, to) => {
   if(from === to ) return [from];
   if (from > to) return getRange(to, from);
   return Array.from({length: to-from+1} , (v, k) => k+from)
};
const getRanges = function() {
  return Array.from(arguments).map(
     ({from, to}) => getRange(from, to)
    ).reduce((a, b) => [...a, ...b] , []);
};

describe(`Progress`, () => {
  it(`renders two nested DIV`, () => {
    const wrapper = mount( <Progress /> );
    expect(wrapper.find('div').length).toEqual(2);
  });

  it(`renders green progressbar if no color specified `, () => {
    const wrapper = mount(<Progress completed={50} />);
    const actual = rgb2hex(wrapper.find('.progressbar-progress').get(0).style.backgroundColor);
    const expected = Progress.defaultProps.color;
    expect(noCase(actual)).toEqual(noCase(expected));
  });

  describe(`completeness`, () => {
    it(`renders by default with 0% of completeness`, () => {
      const wrapper = mount( <Progress /> );
      expect(wrapper.prop('completed')).toEqual(0);
    });

    it(`restrict completeness to  ∈ [0,100]`, () => {
      let wrapper = mount( <Progress completed={300} />);
      expect(wrapper.instance().completed).toEqual(100);
      wrapper = mount( <Progress completed={-10} />);
      expect(wrapper.instance().completed).toEqual(0);
    });

    it(`reflects completeness on the width of UI`, () => {
      const anyPercentage= 50;
      let wrapper;
      getRange(0, 100).forEach((value) => {
        wrapper = mount(<Progress completed={value} />);
        expect(wrapper.find('.progressbar-progress').get(0).style.width).toEqual(value+'%');
      });
    });

  })

})
