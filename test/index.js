import 'babel-polyfill';
import React from 'react';
import SceneChanger from '..';
import chai from 'chai';
chai.should();
describe('SceneChanger', () => {
  it('is compatible with React.Component', () => {
    SceneChanger.should.be.a('function')
      .and.respondTo('render');
  });

  it('renders a React element', () => {
    React.isValidElement(<SceneChanger />).should.equal(true);
  });
});
