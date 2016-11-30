import 'jsdom-global/register';
import React from 'react';
import {
  mount,
  shallow
} from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';

import Progress from '../src';

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

  describe(`completeness`, () => {
    it(`renders by default with 0% of completeness`, () => {
      const wrapper = mount( <Progress /> );
      expect(wrapper.prop('completed')).toEqual(0);
    });

    it(`does not accept completeness ∉ [0,100]`, () => {
      const spy = sinon.stub(console, 'error').returns(false);
      const rangesOutOf_0_100 = getRanges({from: 101, to: 450}, {from: -1, to: -400});

      rangesOutOf_0_100.forEach(
        (value) => <Progress completed = {value} />
      );

      expect(spy.callCount).toEqual(rangesOutOf_0_100.length);
      spy.restore();
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
