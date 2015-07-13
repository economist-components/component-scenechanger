import ShareBar from './index';
import Omniture from '@economist/component-omniture';
import React from 'react';
const pageSetting = {
  s: {
    linkTrackVars: 'events,pageName,prop45,eVar52,eVar53',
    pageName: 'This is the pageName',
  },
  Omniture: {
    position: 'share-bar',
    page: 'Name of the page',
    hostpage: 'hostpage',
    linkinfo: [ 'the_world_if', 'section', 'article headline' ],
  },
};
export default (
  <div>
    <h2 style={{ border: 'solid red 1px' }}>Attention this component use .no-touch class by Modernizr</h2>
    <h1>SVG version</h1>
    <ShareBar {...pageSetting} background="#CCFFDD" />
    <hr/>
    <ShareBar layout="vertical" />
    <hr/>
    <Omniture />
    <h1>Flip version (Mouseover)</h1>
    <div className="no-touch">
      <ShareBar useFX={true}
      fxDirection="flip-to-top"
      fxType="cube"
      background="#333333"
      fxDefaultStateBackground="#999999" />
      <hr/>
      <ShareBar
      useFX={true}
      fxDirection="flip-to-bottom"
      fxType="cube"
      background="#333333"
      fxDefaultStateBackground="#999999" />
    </div>
    <h1>Touch version</h1>
    <div className="touch">
      <ShareBar useFX={true}
      fxDirection="flip-to-top"
      fxType="cube"
      background="#333333"
      fxDefaultStateBackground="#999999" />
    </div>
  </div>
);
