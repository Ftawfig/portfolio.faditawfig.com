"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./components/project.tsx":
/*!********************************!*\
  !*** ./components/project.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=ListGroup!=!react-bootstrap */ \"__barrel_optimize__?names=ListGroup!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Row!=!react-bootstrap */ \"__barrel_optimize__?names=Col,Row!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowDown,IoIosArrowForward!=!react-icons/io */ \"__barrel_optimize__?names=IoIosArrowDown,IoIosArrowForward!=!./node_modules/react-icons/io/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Project(param) {\n    let { props, children } = param;\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setExpanded(!expanded);\n    };\n    if (props.id && props.id === props.selectedId) {\n        console.log(props.selectedId);\n        setExpanded(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleClick,\n        className: \"project-button\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.ListGroup.Item, {\n            className: \"project-card\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                        xs: 10,\n                        sm: 11,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"project-title\",\n                                children: props.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Row, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                                        xs: 6,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"project-category\",\n                                            children: props.category\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                                        xs: 6,\n                                        children: props.date && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"project-date\",\n                                            children: props.date\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 48\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                        lineNumber: 32,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 25\n                            }, this),\n                            expanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"project-description\",\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 39\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Col, {\n                        xs: 2,\n                        sm: 1,\n                        children: expanded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoIosArrowDown, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 39\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoIosArrowForward, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 60\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                lineNumber: 25,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(Project, \"DuL5jiiQQFgbn7gBKAyxwS/H4Ek=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFFa0I7QUFDMEI7QUFDM0I7QUFDd0I7QUFHcEQsU0FBU08sUUFBUSxLQUFtQjtRQUFuQixFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFuQjs7SUFDNUIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1XLGNBQWM7UUFDaEJELFlBQVksQ0FBQ0Q7SUFDakI7SUFFQSxJQUFJRixNQUFNSyxFQUFFLElBQUlMLE1BQU1LLEVBQUUsS0FBS0wsTUFBTU0sVUFBVSxFQUFFO1FBQzNDQyxRQUFRQyxHQUFHLENBQUNSLE1BQU1NLFVBQVU7UUFDNUJILFlBQVk7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ007UUFBT0MsU0FBVU47UUFBY08sV0FBVTtrQkFDdEMsNEVBQUNqQix1RkFBU0EsQ0FBQ2tCLElBQUk7WUFBQ0QsV0FBVTtzQkFDdEIsNEVBQUNoQiwrRUFBR0E7O2tDQUNBLDhEQUFDQywrRUFBR0E7d0JBQUNpQixJQUFJO3dCQUFJQyxJQUFJOzswQ0FDYiw4REFBQ0M7Z0NBQUdKLFdBQVU7MENBQWlCWCxNQUFNZ0IsS0FBSzs7Ozs7OzBDQUMxQyw4REFBQ3JCLCtFQUFHQTs7a0RBQ0EsOERBQUNDLCtFQUFHQTt3Q0FBQ2lCLElBQUk7a0RBQ0wsNEVBQUNJOzRDQUFHTixXQUFVO3NEQUFvQlgsTUFBTWtCLFFBQVE7Ozs7Ozs7Ozs7O2tEQUVwRCw4REFBQ3RCLCtFQUFHQTt3Q0FBQ2lCLElBQUk7a0RBQ0piLE1BQU1tQixJQUFJLGtCQUFJLDhEQUFDRjs0Q0FBR04sV0FBVTtzREFBZ0JYLE1BQU1tQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFHN0RqQiwwQkFBWSw4REFBQ2tCO2dDQUFFVCxXQUFVOzBDQUF1QlY7Ozs7Ozs7Ozs7OztrQ0FFdEQsOERBQUNMLCtFQUFHQTt3QkFBQ2lCLElBQUk7d0JBQUdDLElBQUk7a0NBQ1RaLHlCQUFXLDhEQUFDSixrSEFBY0E7Ozs7aURBQU0sOERBQUNELHFIQUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTdFO0dBbkN3QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0LnRzeD83Y2U1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dGb3J3YXJkLCBJb0lvc0Fycm93RG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh7IHByb3BzLCBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRFeHBhbmRlZCghZXhwYW5kZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwcm9wcy5pZCAmJiBwcm9wcy5pZCA9PT0gcHJvcHMuc2VsZWN0ZWRJZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnNlbGVjdGVkSWQpO1xyXG4gICAgICAgIHNldEV4cGFuZGVkKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgaGFuZGxlQ2xpY2sgfSBjbGFzc05hbWU9XCJwcm9qZWN0LWJ1dHRvblwiID5cclxuICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT1cInByb2plY3QtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMH0gc209ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2plY3QtdGl0bGVcIj57cHJvcHMudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwcm9qZWN0LWNhdGVnb3J5XCI+e3Byb3BzLmNhdGVnb3J5fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRlICYmIDxoNCBjbGFzc05hbWU9XCJwcm9qZWN0LWRhdGVcIj57cHJvcHMuZGF0ZX08L2g0Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBleHBhbmRlZCAmJiA8cCBjbGFzc05hbWU9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+e2NoaWxkcmVufTwvcD4gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezJ9IHNtPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhwYW5kZWQgPyA8SW9Jb3NBcnJvd0Rvd24gLz4gOiA8SW9Jb3NBcnJvd0ZvcndhcmQgLz4gIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaXN0R3JvdXAiLCJSb3ciLCJDb2wiLCJJb0lvc0Fycm93Rm9yd2FyZCIsIklvSW9zQXJyb3dEb3duIiwiUHJvamVjdCIsInByb3BzIiwiY2hpbGRyZW4iLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiaGFuZGxlQ2xpY2siLCJpZCIsInNlbGVjdGVkSWQiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsIkl0ZW0iLCJ4cyIsInNtIiwiaDMiLCJ0aXRsZSIsImg0IiwiY2F0ZWdvcnkiLCJkYXRlIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/project.tsx\n"));

/***/ })

});