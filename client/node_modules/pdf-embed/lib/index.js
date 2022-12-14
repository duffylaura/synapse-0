'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Canvas = require('./Canvas');

var _Canvas2 = _interopRequireDefault(_Canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pdf = function (_React$Component) {
  (0, _inherits3.default)(Pdf, _React$Component);

  function Pdf() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Pdf);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Pdf.__proto__ || Object.getPrototypeOf(Pdf)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      page: 1,
      pages: 1
    }, _this.handleNext = function () {
      _this.setState(function (prevState) {
        return { page: prevState.page + 1 };
      });
    }, _this.handlePrevious = function () {
      _this.setState(function (prevState) {
        return { page: Math.max(prevState.page - 1, 1) };
      });
    }, _this.onDocumentComplete = function (pdf) {
      return new Promise(function (resolve, reject) {
        _this.setState({ pages: pdf.numPages }, resolve);
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Pdf, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          page = _state.page,
          pages = _state.pages;
      var _props = this.props,
          nextButton = _props.nextButton,
          previousButton = _props.previousButton;


      return _react2.default.createElement(
        'div',
        { className: 'pdf-embed' },
        _react2.default.createElement(_Canvas2.default, (0, _extends3.default)({}, this.props, {
          page: page,
          onDocumentComplete: this.onDocumentComplete
        })),
        _react2.default.createElement(
          'div',
          { className: 'pdf-embed-buttons' },
          _react2.default.cloneElement(previousButton, {
            disabled: page === 1,
            onClick: this.handlePrevious
          }),
          _react2.default.cloneElement(nextButton, {
            disabled: page === pages,
            onClick: this.handleNext
          })
        )
      );
    }
  }]);
  return Pdf;
}(_react2.default.Component);

Pdf.propTypes = {
  page: _propTypes2.default.number,
  scale: _propTypes2.default.number,
  styles: _propTypes2.default.object,
  className: _propTypes2.default.string,
  nextButton: _propTypes2.default.object,
  previousButton: _propTypes2.default.object,
  containerStyles: _propTypes2.default.object
};
Pdf.defaultProps = {
  containerStyles: {}
};


Pdf.displayName = 'pdf-embed';

exports.default = Pdf;