import React from 'react';
import Icon from '@economist/component-icon';

export default class SceneChanger extends React.Component {

  static get propTypes() {
    return {
      sceneTotal: React.PropTypes.number,
      // sceneIndex: React.PropTypes.number,
      dotThreshold: React.PropTypes.number,
      icon: React.PropTypes.object,
      icons: React.PropTypes.array,
      test: React.PropTypes.string,
    };
  }

  static get defaultProps() {
    return {
      sceneTotal: 5,
      // sceneIndex: 0,
      dotThreshold: 300,
      icon: {
        color: '#DADADA',
        background: 'transparent'
      },
      icons: [
        {
          title: 'Left arrow',
          className: 'la',
          icon:'left',
          size: '160px',
          background: 'transparent',
        },
        {
          title: 'Right arrow',
          className: 'ra',
          icon: 'right',
          size: '160px',
          background: 'transparent',
        }
      ],
      test: 'Just testing'
    };
  }

  componentWillMount() {
   
  }

  constructor() {
    super();
    this.state = { sceneIndex: 0 };
  }

  arrowClick(arrow, event) {
    var i;
    i = this.state.sceneIndex;
    console.log("State is " + i);
    if (arrow === "left") {
      if (i > 0) {
        i --;
      }
    }
    else {
      if ( i < (this.props.sceneTotal - 1) ) {
        i ++;
      }
    }
    this.setState({ sceneIndex: i });
    this.updateScenechanger(index);
  }

  dotClick(index, event) {
    this.setState({ sceneIndex: index });
    this.updateScenechanger(index);
  }

  updateScenechanger(i) {
    alert("Set appearance to " + i);
  };

  render() {
    var sceneTotal, arrowLeft, arrowRight, dots, i;
    sceneTotal = this.props.sceneTotal;
    // Left and right arrows
    arrowLeft = 
      <div className="mnv-ec-scenechanger-arrow-wrapper-left" key="left" onClick = {this.arrowClick.bind(this,"left")}>
        <Icon icon="left" background={this.props.icon.background} color={this.props.icon.color}/>
      </div>;
    arrowRight = 
      <div className="mnv-ec-scenechanger-arrow-wrapper-right" key="right" onClick = {this.arrowClick.bind(this,"right")}>
        <Icon icon="right" background={this.props.icon.background} color={this.props.icon.color}/>
      </div>;
    // Dots
    dots = [];
    for (i = 0; i < sceneTotal; i ++) {
      dots.push(
        <div className="mnv-ec-scenechanger-onedot-wrapper" key={i} onClick={this.dotClick.bind(this,i)}>
          <div className="mnv-ec-scenechanger-dot">
          </div>
        </div>
      )
    }
    // Glue it all together
    return (
      <div className="mnv-ec-scenechanger-wrapper">
        {arrowLeft}
        {arrowRight}
        <div className="mnv-ec-scenechanger-alldots-wrapper">
          {dots}
        </div>
      </div>
    );

  }
}

//        <Icon type="left"  onClick = {this.handleClick.bind(this)}/>
//        <Icon type="right"  onClick = {this.handleClick.bind(this)} />