import React from 'react';
import Icon from '@economist/component-icon';

export default class SceneChanger extends React.Component {

  static get propTypes() {
    return {
      sceneTotal: React.PropTypes.number,         // Number of 'scenes'
      defaultSceneIndex: React.PropTypes.number,  // Default scene
      dotThreshold: React.PropTypes.number,       // Dots would disappear below this val (inactive)
      icon: React.PropTypes.object,
      icons: React.PropTypes.array,
      onChangeIndex: React.PropTypes.function
    };
  }

  static get defaultProps() {
    return {
      sceneTotal: 5,
      defaultSceneIndex: 0,
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

  // Set default state:
  constructor(props) {
    console.log(props);
    super(props);
    this.state = { sceneIndex: props.defaultSceneIndex };
  }


  // EVENT LISTENERS
  // Arrows:
  arrowClick(arrow, event) {
    var index = this.state.sceneIndex;
    if (arrow === "left") {
      if (index > 0) {
        index --;
      }
    }
    else {
      if ( index < (this.props.sceneTotal - 1) ) {
        index ++;
      }
    }
    this.changeIndex(index);    
  }
  // Dots:
  dotClick(index, event) {
    this.changeIndex(index);
  }
  //
  changeIndex(newIndex) {
    if (this.props.onChangeIndex) {
      this.props.onChangeIndex(newIndex, this.state.index);
    }
    this.setState({ sceneIndex: newIndex });
  }
  // EVENT LISTENERS END


  // RENDER
  render() {
    var sceneIndex, sceneTotal, arrowLeft, arrowRight, dots, i, leftClass, rightClass, dotClass;
    sceneIndex = this.state.sceneIndex;
    sceneTotal = this.props.sceneTotal;
    console.log("hjkjjjjjjjjjjjjjjjjjjjj")
    // Left and right arrows
    // Class strings to hide at start/finish
    leftClass = "mnv-ec-scenechanger-arrow-wrapper-left";
    rightClass = "mnv-ec-scenechanger-arrow-wrapper-right";
    if (sceneIndex === 0) {
      leftClass += " arrow-hidden";
    }
    else if (sceneIndex === (sceneTotal - 1 )) {
      rightClass += " arrow-hidden";
    }
    arrowLeft = 
      <div className={leftClass} key="left" onClick = {this.arrowClick.bind(this,"left")}>
        <Icon icon="left" background={this.props.icon.background} color={this.props.icon.color}/>
      </div>;
    arrowRight = 
      <div className={rightClass} key="right" onClick = {this.arrowClick.bind(this,"right")}>
        <Icon icon="right" background={this.props.icon.background} color={this.props.icon.color}/>
      </div>;
    // Dots
    dots = [];
    for (i = 0; i < sceneTotal; i ++) {
      // Class to highlight current index
      dotClass = "mnv-ec-scenechanger-dot";
      if (i === sceneIndex) { 
        dotClass += " dot-highlight"
      };
      dots.push(
        <div className="mnv-ec-scenechanger-onedot-wrapper" key={i} onClick={this.dotClick.bind(this,i)}>
          <div className={dotClass}>
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
  // RENDER ends
}