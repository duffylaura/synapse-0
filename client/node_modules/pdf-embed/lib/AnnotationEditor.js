'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _slatePlainSerializer = require('slate-plain-serializer');

var _slatePlainSerializer2 = _interopRequireDefault(_slatePlainSerializer);

var _slateReact = require('slate-react');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContentEditable = function (_React$Component) {
  (0, _inherits3.default)(ContentEditable, _React$Component);

  function ContentEditable() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, ContentEditable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContentEditable.__proto__ || Object.getPrototypeOf(ContentEditable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: _slatePlainSerializer2.default.deserialize('')
    }, _this.onChange = function (state) {
      _this.setState({ value: state.value }, function () {
        _this.props.update(state);
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(ContentEditable, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var annotation = this.props.annotation;

      if (annotation.text) {
        this.setState({
          value: _slatePlainSerializer2.default.deserialize(annotation.text)
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return nextState.value !== this.state.value || nextProps.selected !== this.props.selected || nextProps.draggable !== this.props.draggable || nextProps.hover !== this.props.hover;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          selected = _props.selected,
          hover = _props.hover,
          draggable = _props.draggable;

      console.log({ selected: selected, hover: hover, draggable: draggable });
      var className = (0, _classnames2.default)('pdf-embed-editor', selected ? 'pdf-embed-editor-selected' : '', hover ? 'pdf-embed-editor-hover' : '', draggable ? 'pdf-embed-editor-draggable' : '');
      return _react2.default.createElement(
        'div',
        {
          className: className
        },
        _react2.default.createElement(_slateReact.Editor, {
          ref: function ref(_ref2) {
            _this2.editor = _ref2;
          },
          placeholder: this.props.placeholder,
          value: this.state.value,
          onChange: this.onChange
        })
      );
    }
  }]);
  return ContentEditable;
}(_react2.default.Component);

ContentEditable.defaultProps = {
  placeholder: 'Enter some text...'
};
exports.default = ContentEditable;