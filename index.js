import React from 'react';
import Icon from '@economist/component-icon';

export default class SceneChanger extends React.Component {

  static get propTypes() {
    return {
      sceneTotal: React.PropTypes.number,
      sceneIndex: React.PropTypes.number,
      dotThreshold: React.PropTypes.number,
      icon: React.PropTypes.object,
      icons: React.PropTypes.array,
      test: React.PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      sceneTotal: 4,
      sceneIndex: 0,
      dotThreshold: 300,
      icon: {
        color: '#FFFFFF',
      },
      icons: [
        {
          title: 'Left arrow',
          className: 'la',
          type: 'left'
        },
        {
          title: 'Right arrow',
          className: 'ra',
          type: 'right'
        }
      ],
      test: 'Just testing'
    };
  }

  componentWillMount() {
   console.log("Hello " + this.props.sceneTotal);
  }

  handleClick(index, event) {
    console.log("Dot " + index);
  }


  render() {
    var sceneTotal, wrapOpen, wrapClose, content, i, val="Donald";
    sceneTotal = this.props.sceneTotal;
    wrapOpen =  <div className="mnv-ec-scenechanger-wrapper">
                <div className="mnv-ec-scenechanger-alldots-wrapper">
                ;
    wrapClose = </div></div>;

    content = [];
    for (i = 0; i < sceneTotal; i ++) {
      content.push(
        <div className="mnv-ec-scenechanger-onedot-wrapper" key={i}>
          <div className="mnv-ec-scenechanger-dot" onClick={this.handleClick.bind(this,i)}>
          </div>
        </div>
      )
    }

    return (
      <div className="mnv-ec-scenechanger-wrapper">
        <div className="mnv-ec-scenechanger-alldots-wrapper">
          {content}
        </div>
      </div>
    );

  }
}

//        <Icon type="left"  onClick = {this.handleClick.bind(this)}/>
//        <Icon type="right"  onClick = {this.handleClick.bind(this)} />