import React from 'react';
import Icon from '@economist/component-icon';

export default class SceneChanger extends React.Component {

  static get propTypes() {
    return {
      // Number of scenes
      sceneTotal: React.PropTypes.number,
      // Scene index
      defaultSceneIndex: React.PropTypes.number,
      // Not used: threshold below which dots would not display
      dotThreshold: React.PropTypes.number,
      icon: React.PropTypes.object,
      icons: React.PropTypes.array,
      onChangeIndex: React.PropTypes.func,
    };
  }

  static get defaultProps() {
    return {
      sceneTotal: 5,
      defaultSceneIndex: 0,
      dotThreshold: 300,
      icon: {
        color: '#DADADA',
        background: 'transparent',
      },
      icons: [
        {
          title: 'Left arrow',
          className: 'la',
          icon: 'left',
          size: '160px',
          background: 'transparent',
        },
        {
          title: 'Right arrow',
          className: 'ra',
          icon: 'right',
          size: '160px',
          background: 'transparent',
        },
      ],
      test: 'Just testing',
    };
  }

  // Set default state:
  constructor(props) {
    super(props);
    this.state = { sceneIndex: props.defaultSceneIndex };
  }

  // EVENT LISTENERS
  // Arrows:
  arrowClick(arrow) {
    let index = this.state.sceneIndex;
    if (arrow === 'left') {
      if (index > 0) {
        index--;
      }
    } else if (index < (this.props.sceneTotal - 1)) {
      index++;
    }

    this.changeIndex(index);
  }
  // Dots:
  dotClick(index) {
    this.changeIndex(index);
  }
  //
  changeIndex(newIndex) {
    if (this.props.onChangeIndex) {
      this.props.onChangeIndex(newIndex, this.state.sceneIndex);
    }
    this.setState({ sceneIndex: newIndex });
  }
  // EVENT LISTENERS END


  // RENDER
  render() {
    const sceneIndex = this.state.sceneIndex;
    const sceneTotal = this.props.sceneTotal;
    // Left and right arrows
    // Class strings to hide at start/finish
    let leftClass = 'mnv-ec-scenechanger-arrow-wrapper-left';
    let rightClass = 'mnv-ec-scenechanger-arrow-wrapper-right';
    if (sceneIndex === 0) {
      leftClass += ' arrow-hidden';
    } else if (sceneIndex === (sceneTotal - 1)) {
      rightClass += ' arrow-hidden';
    }
    const arrowLeft = (
      <div className={leftClass} key="left" onClick = {this.arrowClick.bind(this, 'left')}>
        <Icon icon="left" background={this.props.icon.background} color={this.props.icon.color}/>
      </div>
    );
    const arrowRight = (
      <div className={rightClass} key="right" onClick = {this.arrowClick.bind(this, 'right')}>
        <Icon icon="right" background={this.props.icon.background} color={this.props.icon.color}/>
      </div>);
    // Dots
    const dots = [];
    for (let i = 0; i < sceneTotal; i++) {
      // Class to highlight current index
      let dotClass = 'mnv-ec-scenechanger-dot';
      if (i === sceneIndex) {
        dotClass += ' dot-highlight';
      }
      dots.push(
        <div className="mnv-ec-scenechanger-onedot-wrapper" key={i} onClick={this.dotClick.bind(this, i)}>
          <div className={dotClass}>
          </div>
        </div>
      );
    }
    // Glue it all together
    return (
      <div className="mnv-ec-scenechanger-own-wrapper">
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
