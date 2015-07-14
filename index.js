'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentIcon = require('@economist/component-icon');

var _economistComponentIcon2 = _interopRequireDefault(_economistComponentIcon);

var SceneChanger = (function (_React$Component) {
  _inherits(SceneChanger, _React$Component);

  function SceneChanger() {
    _classCallCheck(this, SceneChanger);

    _React$Component.apply(this, arguments);
  }

  SceneChanger.prototype.componentWillMount = function componentWillMount() {
    console.log('Hello ' + this.props.sceneTotal);
  };

  SceneChanger.prototype.handleClick = function handleClick(index, event) {
    console.log('Dot ' + index);
  };

  SceneChanger.prototype.render = function render() {
    var sceneTotal,
        wrapOpen,
        wrapClose,
        content,
        i,
        val = 'Donald';
    sceneTotal = this.props.sceneTotal;
    wrapOpen = _react2['default'].createElement(
      'div',
      { className: 'mnv-ec-scenechanger-wrapper' },
      _react2['default'].createElement(
        'div',
        { className: 'mnv-ec-scenechanger-alldots-wrapper' },
        '; wrapClose = '
      )
    );

    content = [];
    for (i = 0; i < sceneTotal; i++) {
      content.push(_react2['default'].createElement(
        'div',
        { className: 'mnv-ec-scenechanger-onedot-wrapper', key: i },
        _react2['default'].createElement('div', { className: 'mnv-ec-scenechanger-dot', onClick: this.handleClick.bind(this, i) })
      ));
    }

    return _react2['default'].createElement(
      'div',
      { className: 'mnv-ec-scenechanger-wrapper' },
      _react2['default'].createElement(_economistComponentIcon2['default'], { icon: 'left', onClick: this.handleClick.bind(this) }),
      _react2['default'].createElement(
        'div',
        { className: 'mnv-ec-scenechanger-alldots-wrapper' },
        content
      )
    );
  };

  _createClass(SceneChanger, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        sceneTotal: _react2['default'].PropTypes.number,
        sceneIndex: _react2['default'].PropTypes.number,
        dotThreshold: _react2['default'].PropTypes.number,
        icon: _react2['default'].PropTypes.object,
        icons: _react2['default'].PropTypes.array,
        test: _react2['default'].PropTypes.string
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        sceneTotal: 4,
        sceneIndex: 0,
        dotThreshold: 300,
        icon: {
          color: '#FFFFFF'
        },
        icons: [{
          title: 'Left arrow',
          className: 'la',
          icon: 'left'
        }, {
          title: 'Right arrow',
          className: 'ra',
          icon: 'right'
        }],
        test: 'Just testing'
      };
    }
  }]);

  return SceneChanger;
})(_react2['default'].Component);

exports['default'] = SceneChanger;
module.exports = exports['default'];

//        <Icon type="left"  onClick = {this.handleClick.bind(this)}/>
//        <Icon type="right"  onClick = {this.handleClick.bind(this)} />

