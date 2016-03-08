import 'babel-polyfill';
import React from 'react';
import Scenechanger from './';

function onChangeIndex() {
  // do something on change
}

export default (
  <Scenechanger
    background="#CCFFDD"
    onChangeIndex={onChangeIndex}
  />
);
