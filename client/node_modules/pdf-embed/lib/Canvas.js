'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _makeCancelable = require('./makeCancelable');

var _makeCancelable2 = _interopRequireDefault(_makeCancelable);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AnnotationEditor = require('./AnnotationEditor');

var _AnnotationEditor2 = _interopRequireDefault(_AnnotationEditor);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _lodash = require('lodash.findindex');

var _lodash2 = _interopRequireDefault(_lodash);

var _createShadow = require('./createShadow');

var _createShadow2 = _interopRequireDefault(_createShadow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('pdfjs-dist/build/pdf.combined');
require('pdfjs-dist/web/compatibility');

var Canvas = function (_React$Component) {
  (0, _inherits3.default)(Canvas, _React$Component);

  function Canvas() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Canvas);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      pdf: null,
      annotations: [],
      x: null,
      y: null,
      draggable: null,
      focus: 'BODY',
      selected: null
    }, _this.onMouseMove = function (_ref2) {
      var key = _ref2.key;
      var annotations = _this.state.annotations;

      var index = (0, _lodash2.default)(annotations, { key: key });

      return function (e) {
        annotations[index].x = e.pageX;
        annotations[index].y = e.pageY;
        _this.setState({ annotations: annotations });
      };
    }, _this.getBoundingClientRect = function () {
      var rect = _this.canvas.getBoundingClientRect();
      return {
        top: rect.top + 20,
        left: rect.left + 20
      };
    }, _this.onDocumentComplete = function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(pdf) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.setState({ pdf: pdf }, function () {
                  _this.drawPDF(_this.props.page);
                });

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref3.apply(this, arguments);
      };
    }(), _this.onDocumentError = function (err) {
      if (err.isCanceled && err.pdf) {
        err.pdf.destroy();
      }
    }, _this.getDocument = function (val) {
      if (_this.documentPromise) {
        _this.documentPromise.cancel();
      }
      _this.documentPromise = (0, _makeCancelable2.default)(window.PDFJS.getDocument(val).promise);

      _this.documentPromise.promise.then(_this.onDocumentComplete).catch(_this.onDocumentError);

      return _this.documentPromise;
    }, _this.drawPDF = function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(num) {
        var pdf, page, viewport, canvas, canvasContext;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pdf = _this.state.pdf;
                _context2.next = 3;
                return pdf.getPage(num);

              case 3:
                page = _context2.sent;
                viewport = page.getViewport(_this.props.scale);
                canvas = _this.canvas;
                canvasContext = canvas.getContext('2d');

                canvas.height = viewport.height;
                canvas.width = viewport.width;
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                page.render({ canvasContext: canvasContext, viewport: viewport });

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }(), _this.handleMouseMove = function (e) {
      var _this$state = _this.state,
          annotations = _this$state.annotations,
          draggable = _this$state.draggable;


      if (draggable) {
        var i = (0, _lodash2.default)(annotations, { key: draggable });
        annotations[i] = (0, _extends3.default)({}, annotations[i], {
          x: e.clientX - _this.getBoundingClientRect().left,
          y: e.clientY - _this.getBoundingClientRect().top
        });

        _this.setState({ x: e.clientX, y: e.clientY, annotations: annotations });
      } else {
        _this.setState({ x: e.clientX, y: e.clientY });
      }
    }, _this.handleClick = function () {
      var _this$state2 = _this.state,
          selected = _this$state2.selected,
          draggable = _this$state2.draggable;

      if (selected) {
        return _this.setState({ selected: null, draggable: null });
      }

      var _this$state3 = _this.state,
          x = _this$state3.x,
          y = _this$state3.y,
          annotations = _this$state3.annotations;

      var annotationKey = (0, _v2.default)();
      annotations.push({
        x: x - _this.getBoundingClientRect().left,
        y: y - _this.getBoundingClientRect().top,
        key: annotationKey
      });

      _this.setState({
        annotations: annotations,
        selected: annotationKey
      });
    }, _this.onKeyDown = function (event) {
      var selected = _this.state.selected;

      if (event.keyCode == 8 && selected) {
        _this.handleDelete({ key: selected });
      }
    }, _this.onMouseEnter = function (_ref5) {
      var key = _ref5.key;

      _this.setState({ hover: key });
    }, _this.onMouseLeave = function (_ref6) {
      var key = _ref6.key;

      _this.setState(function (prevState) {
        if (prevState.draggable === key) {
          return null;
        }
        return { hover: null };
      });
    }, _this.handleDelete = function (_ref7) {
      var annotationKey = _ref7.key;
      var _this$state4 = _this.state,
          selected = _this$state4.selected,
          annotations = _this$state4.annotations,
          draggable = _this$state4.draggable;

      if (!draggable) return;
      annotations = annotations.filter(function (_ref8) {
        var key = _ref8.key;
        return key !== annotationKey;
      });
      _this.setState({
        annotations: annotations,
        selected: null,
        draggable: null
      }, function () {
        window.localStorage.setItem('annotations', JSON.stringify(annotations));
      });
    }, _this.startDragging = function (_ref9) {
      var key = _ref9.key;

      _this.setState({ draggable: key });
    }, _this.stopDragging = function (_ref10) {
      var key = _ref10.key;

      _this.setState({ draggable: null });
    }, _this.selectAnnotation = function (_ref11, _ref12) {
      var currentTarget = _ref11.currentTarget;
      var key = _ref12.key;

      if (currentTarget.className !== 'pdf-embed-editor-wrapper') {
        _this.setState({ selected: null });
        return;
      }
      _this.setState(function (prevState) {
        if (prevState.selected === key) {
          return null;
        }
        return { selected: key };
      });
    }, _this.onFocus = function () {
      return _this.setState({ focus: 'SLATE' });
    }, _this.onBlur = function () {
      return _this.setState({ focus: 'BODY' });
    }, _this.update = function (_ref13, _ref14) {
      var value = _ref13.value,
          text = _ref13.value.document.text;
      var key = _ref14.key;
      var annotations = _this.state.annotations;

      var i = (0, _lodash2.default)(annotations, { key: key });
      var entry = annotations[i];
      annotations[i].text = text;
      _this.setState({ annotations: annotations }, function () {
        window.localStorage.setItem('annotations', JSON.stringify(_this.state.annotations));
      });
    }, _this.renderAnnotations = function () {
      var annotations = _this.state.annotations;


      return annotations.map(function (annotation, i) {
        return _react2.default.createElement(
          'div',
          {
            className: 'pdf-embed-editor-wrapper',
            style: {
              transform: 'translate3d(' + annotation.x + 'px, ' + annotation.y + 'px, 0px)'
            },
            ref: function ref(_ref15) {
              _this.wrapper = _ref15;
            },
            onMouseDown: function onMouseDown() {
              return _this.startDragging(annotation);
            },
            onMouseUp: function onMouseUp() {
              return _this.stopDragging(annotation);
            },
            onMouseEnter: function onMouseEnter() {
              return _this.onMouseEnter(annotation);
            },
            onMouseLeave: function onMouseLeave() {
              return _this.onMouseLeave(annotation);
            },
            onClick: function onClick(e) {
              return _this.selectAnnotation(e, annotation);
            },
            key: annotation.key + '-div'
          },
          _react2.default.createElement(_AnnotationEditor2.default, {
            key: annotation.key + '-annotation',
            annotation: annotation,
            onFocus: _this.onFocus,
            onBlur: _this.onBlur,
            handleDelete: function handleDelete() {
              return _this.handleDelete(annotation);
            },
            hover: _this.state.hover === annotation.key,
            selected: _this.state.selected === annotation.key,
            draggable: _this.state.draggable === annotation.key,
            update: function update(state) {
              return _this.update(state, annotation);
            }
          })
        );
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Canvas, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var url = this.props.url;

      if (url) {
        this.getDocument(url);
      }

      document.addEventListener('keydown', this.onKeyDown);
      var annotations = window.localStorage.getItem('annotations');

      if (annotations) {
        this.setState({
          annotations: JSON.parse(annotations)
        });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.page !== this.props.page) {
        this.drawPDF(nextProps.page);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var pdf = this.state.pdf;

      if (pdf) pdf.destroy();

      if (this.documentPromise) {
        this.documentPromise.cancel();
      }
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var pdf = this.state.pdf;

      if (!pdf) {
        return false;
      }
      var containerStyles = (0, _extends3.default)({
        display: 'block',
        fontFamily: 'arial',
        maxWidth: '' + 612 * 2,
        margin: '0 auto'
      }, this.props.containerStyles);
      var annotations = this.state.annotations;

      return _react2.default.createElement(
        'div',
        {
          style: containerStyles,
          onMouseMove: this.handleMouseMove
        },
        _react2.default.createElement(
          'div',
          null,
          this.renderAnnotations()
        ),
        _react2.default.createElement(
          'div',
          {
            className: 'pdf-embed-canvas-wrapper',
            style: {
              width: '' + 612 * 2,
              height: '' + 792 * 2
            } },
          _react2.default.createElement('canvas', {
            ref: function ref(c) {
              _this3.canvas = c;
            },
            className: this.props.className,
            onClick: this.handleClick
          })
        )
      );
    }
  }]);
  return Canvas;
}(_react2.default.Component);

Canvas.propTypes = {
  page: _propTypes2.default.number,
  scale: _propTypes2.default.number,
  styles: _propTypes2.default.object,
  className: _propTypes2.default.string,
  spinner: _propTypes2.default.func
};
Canvas.defaultProps = {
  page: 1,
  scale: 3,
  styles: {
    display: 'block'
  },
  className: 'pdf'
};
exports.default = Canvas;