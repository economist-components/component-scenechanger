import SceneChanger from './index.es6';
import React from 'react';
export default (
  <SceneChanger background="#CCFFDD" onChangeIndex={function () { console.log('Wooo', arguments); }}/>
);
