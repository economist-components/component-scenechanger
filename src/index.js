import Icon from '@economist/component-icon';
import React from 'react';

const zero = 0;
const one = 1;
export default class SceneChanger extends React.Component {
  constructor(props) {
    super(props);
    this.handleNext = this.handleNext.bind(this);
    this.state = { sceneIndex: props.defaultSceneIndex };
  }

  handleNext(event) {
    if (!event && !event.target && !event.currentTarget.dataset) {
      return;
    }

    const { action } = event.currentTarget.dataset;
    const { sceneTotal, onChangeIndex } = this.props;
    const { sceneIndex } = this.state;
    let newIndex = sceneIndex;
    if (isNaN(action)) {
      if (action === 'left') {
        if (sceneIndex > zero) {
          newIndex--;
        }
      } else if (sceneIndex < (sceneTotal - one)) {
        newIndex++;
      }
    } else {
      newIndex = parseInt(action, 10);
    }

    if (onChangeIndex) {
      onChangeIndex(newIndex, sceneIndex);
    }

    this.setState({ sceneIndex: newIndex });
  }

  generateNextButton(direction, modifier) {
    const { background, color } = this.props.icon;
    const className = `scene-changer__arrow scene-changer__arrow--${ direction } scene-changer__arrow--${ modifier }`;
    return (
      <button
        type="button"
        className={className}
        key={direction}
        data-action={direction}
        onClick={this.handleNext}
      >
        <Icon icon={direction} background={background} color={color} />
      </button>
    );
  }

  generateSceneIndex(index) {
    const { sceneIndex } = this.state;
    let className = 'scene-changer__dot';
    if (index === sceneIndex) {
      className = `${ className } scene-changer__dot--active`;
    }

    return (
      <button
        type="button"
        className={className}
        data-action={index}
        key={index}
        onClick={this.handleNext}
      />
    );
  }

  render() {
    const { sceneTotal } = this.props;
    const { sceneIndex } = this.state;
    const rightArrowModifier = (sceneIndex === zero) ? 'inactive' : 'active';
    const leftArrowModifier = (sceneIndex === (sceneTotal - one)) ? 'inactive' : 'active';
    const leftArrow = this.generateNextButton('left', rightArrowModifier);
    const rightArrow = this.generateNextButton('right', leftArrowModifier);
    const dots = [];
    for (let index = 0; index < sceneTotal; index++) {
      dots.push(
        this.generateSceneIndex(index)
      );
    }

    return (
      <div className="scene-changer">
        {leftArrow}
        {rightArrow}
        <div className="scene-changer__dots">
          {dots}
        </div>
      </div>
    );
  }
}

SceneChanger.defaultProps = {
  sceneTotal: 5,
  defaultSceneIndex: 0,
  icon: {
    color: '#dadada',
    background: 'transparent',
  },
};

if (process.env.NODE_ENV !== 'production') {
  SceneChanger.propTypes = {
    sceneTotal: React.PropTypes.number,
    defaultSceneIndex: React.PropTypes.number,
    icon: React.PropTypes.shape({
      color: React.PropTypes.string,
      background: React.PropTypes.string,
    }),
    onChangeIndex: React.PropTypes.func,
  };
}
