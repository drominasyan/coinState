webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./Components/ListTable.js":
/*!*********************************!*\
  !*** ./Components/ListTable.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit_icomoon_starFull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/icomoon/starFull */ "./node_modules/react-icons-kit/icomoon/starFull.js");
/* harmony import */ var react_icons_kit_icomoon_starFull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_starFull__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "./node_modules/react-icons-kit/index.js");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Admin\\Desktop\\coinState\\Components\\ListTable.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var ListTable = function ListTable(props) {
  var renderValue = function renderValue(columnItem, listItem, index) {
    var UI = props.UI,
        favorits = props.favorits,
        updateFavorits = props.updateFavorits;
    var liked = favorits.includes(listItem.id) ? 'active' : 'inactive';

    switch (columnItem.dataIndex) {
      case 'id':
        return index + 1;

      case 'name':
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
          className: "starList ".concat(liked),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 29
          }
        }, __jsx(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          icon: react_icons_kit_icomoon_starFull__WEBPACK_IMPORTED_MODULE_2__["starFull"],
          size: 20,
          onClick: function onClick() {
            return updateFavorits(listItem.id);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 33
          }
        })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          href: "/coins/".concat(listItem.id),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 29
          }
        }, __jsx("a", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 33
          }
        }, __jsx("img", {
          src: listItem.icon,
          className: "coinIcon",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 37
          }
        }), listItem[columnItem.dataIndex])));

      default:
        return listItem[columnItem.dataIndex];
    }
  };

  var columns = props.columns,
      list = props.list,
      loading = props.UI.loading;
  return __jsx("div", {
    className: "table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }
  }, columns.map(function (columnItem, index) {
    return __jsx("div", {
      className: "cols",
      key: "".concat(columnItem.key, "_").concat(index),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "colTitle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 25
      }
    }, columnItem.title), __jsx("div", {
      className: "rows",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }, list.map(function (listItem, index) {
      return __jsx("div", {
        className: "rowItem",
        key: "".concat(listItem.id, "_").concat(index),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 60
        }
      }, renderValue(columnItem, listItem, index));
    })));
  }), trueing && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
    animation: "border",
    variant: "secondary",
    className: "spinner",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ListTable));

/***/ })

})
//# sourceMappingURL=index.js.76350685f3c6d7b59c3f.hot-update.js.map