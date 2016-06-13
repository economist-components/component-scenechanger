import 'babel-polyfill';
import Scenechanger from '../src';
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
chai.use(chaiEnzyme()).should();

describe('Scenechanger', () => {
  it('renders a React element', () => {
    React.isValidElement(<Scenechanger />).should.equal(true);
  });

  describe('Rendering', () => {
    let rendered = null;
    let scenechanger = null;
    beforeEach(() => {
      rendered = mount(<Scenechanger />);
      scenechanger = rendered.find('.scene-changer');
    });

    it('renders a top level div.scene-changer', () => {
      scenechanger.should.have.tagName('div');
      scenechanger.should.have.className('scene-changer');
    });

    it('defaults to the first scene', () => {
      scenechanger.find('.scene-changer__dots').childAt(0).should.have.className('scene-changer__dot--active');
    });

    it('adds active class to scene identifier', () => {
      scenechanger.find('.scene-changer__dots').childAt(1).simulate('click');
      scenechanger.find('.scene-changer__dots').childAt(1).should.have.className('scene-changer__dot--active');
    });
  });
});
