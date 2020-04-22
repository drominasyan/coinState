webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/Coins/List.js":
/*!**********************************!*\
  !*** ./containers/Coins/List.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Redux_Coins_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Redux/Coins/actions */ "./Redux/Coins/actions.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./containers/Coins/utils.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");







var _jsxFileName = "/home/user/Desktop/CoinState/Coins/containers/Coins/List.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





 // import Spinner from 'react-bootstrap/Spinner';
// import Tabs from 'react-bootstrap/Tabs'
// import Tab from 'react-bootstrap/Tab'
// import Container from 'react-bootstrap/Container'




var List = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(List, _React$Component);

  var _super = _createSuper(List);

  function List() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, List);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "loadMoreCoins", function () {
      var _this$props = _this.props,
          listReload = _this$props.listReload,
          uiRefresh = _this$props.uiRefresh,
          UI = _this$props.UI;
      var skip = UI.skip;
      uiRefresh({
        skip: skip + 1
      });
      listReload();
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(List, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var listReload = this.props.listReload;
      listReload();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          list = _this$props2.list,
          UI = _this$props2.UI;
      var loading = UI.loading;

      var renderValue = function renderValue(columnItem, listItem, index) {
        switch (columnItem.dataIndex) {
          case 'id':
            return index + 1;

          case 'name':
            return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("img", {
              src: listItem.icon,
              className: "coinIcon",
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 21
              }
            }), listItem[columnItem.dataIndex]);

          default:
            return listItem[columnItem.dataIndex];
        }
      };

      return (// <div className = 'container'>
        __jsx("div", {
          className: "table",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Tabs"], {
          defaultActiveKey: "Coins",
          transition: false,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 17
          }
        }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Tab"], {
          eventKey: "Coins",
          title: "Coins",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 21
          }
        }, _utils__WEBPACK_IMPORTED_MODULE_10__["columns"].map(function (columnItem) {
          return __jsx("div", {
            className: "cols",
            key: columnItem.key,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 33
            }
          }, __jsx("div", {
            className: "colTitle",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 37
            }
          }, columnItem.title), __jsx("div", {
            className: "rows",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 37
            }
          }, list.map(function (listItem, index) {
            return __jsx("div", {
              className: "rowItem",
              key: listItem.id,
              __self: _this2,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 72
              }
            }, renderValue(columnItem, listItem, index));
          })));
        }), loading && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Spinner"], {
          animation: "border",
          variant: "secondary",
          className: "spinner",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 41
          }
        }), __jsx("button", {
          onClick: this.loadMoreCoins,
          className: "showMore",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 29
          }
        }, "Show More")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Tab"], {
          eventKey: "profile",
          title: "Profile",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 21
          }
        }))) // </div>

      );
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps() {}
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(List, "propTypes", {
  list: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.array.isRequired,
  UI: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired,
  listReload: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  uiRefresh: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired
});

function mapStateToProps(state) {
  return {
    list: state.Coins.get('list'),
    UI: state.Coins.get('UI')
  };
}

var mapDispatchToProps = {
  listReload: _Redux_Coins_actions__WEBPACK_IMPORTED_MODULE_9__["default"].listReload,
  uiRefresh: _Redux_Coins_actions__WEBPACK_IMPORTED_MODULE_9__["default"].uiRefresh
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(List));

/***/ })

})
//# sourceMappingURL=index.js.142a4b6051f5026a02c5.hot-update.js.map