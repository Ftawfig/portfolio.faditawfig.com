"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/footer.tsx":
/*!*******************************!*\
  !*** ./components/footer.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Container,Row!=!react-bootstrap */ \"__barrel_optimize__?names=Col,Container,Row!=!./node_modules/react-bootstrap/esm/index.js\");\n\n\nfunction Footer() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        className: \"footer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {\n                    children: \"Built by Fadi Tawfig using Next.js.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\footer.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Container_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {\n                    children: \"View this project on GitHub\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\footer.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\footer.tsx\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\footer.tsx\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = Footer;\nvar _c;\n$RefreshReg$(_c, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2Zvb3Rlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBc0Q7QUFFdkMsU0FBU0c7SUFDcEIscUJBQ0ksOERBQUNILCtGQUFTQTtRQUFDSSxXQUFVO2tCQUNqQiw0RUFBQ0gseUZBQUdBOzs4QkFDSiw4REFBQ0MseUZBQUdBOzhCQUFDOzs7Ozs7OEJBQ0wsOERBQUNBLHlGQUFHQTs4QkFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakI7S0FUd0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZm9vdGVyLnRzeD9lM2EwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sPkJ1aWx0IGJ5IEZhZGkgVGF3ZmlnIHVzaW5nIE5leHQuanMuPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2w+VmlldyB0aGlzIHByb2plY3Qgb24gR2l0SHViPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIlJvdyIsIkNvbCIsIkZvb3RlciIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/footer.tsx\n"));

/***/ })

});