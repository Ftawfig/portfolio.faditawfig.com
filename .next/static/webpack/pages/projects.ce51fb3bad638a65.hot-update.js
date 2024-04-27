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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ListGroup!=!react-bootstrap */ \"__barrel_optimize__?names=ListGroup!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Row!=!react-bootstrap */ \"__barrel_optimize__?names=Col,Row!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowDown,IoIosArrowForward!=!react-icons/io */ \"__barrel_optimize__?names=IoIosArrowDown,IoIosArrowForward!=!./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_IoLink_react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoLink!=!react-icons/io5 */ \"__barrel_optimize__?names=IoLink!=!./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Project(param) {\n    let { props, children } = param;\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setExpanded(!expanded);\n    };\n    const copyLink = ()=>{\n        let hostname = window.location.hostname;\n        navigator.clipboard.writeText(hostname + \":3000/projects?id=\" + props.id);\n        setExpanded(false);\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Get the id parameter from the URL\n    const { id } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Expand the project if the id parameter matches the project id\n        if (props.id && id && props.id === id) {\n            setExpanded(true);\n        }\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleClick,\n        className: \"project-button\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ListGroup.Item, {\n            className: \"project-card\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                        xs: 10,\n                        sm: 11,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"project-title\",\n                                children: props.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                                        xs: 6,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"project-category\",\n                                            children: props.category\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                                        xs: 6,\n                                        children: props.date && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"project-date\",\n                                            children: props.date\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 48\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 25\n                            }, this),\n                            expanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"project-description\",\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 39\n                            }, this),\n                            expanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                title: \"Copy link to this item\",\n                                onClick: copyLink,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoLink_react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoLink, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 100\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 39\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                        xs: 2,\n                        sm: 1,\n                        className: \"expand-button\",\n                        children: expanded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowDown, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 38\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowForward, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 59\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(Project, \"XJrd97LFwLU+ZVpqLDZDBl6XQpE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDYztBQUNJO0FBQzBCO0FBQzNCO0FBQ3dCO0FBQzFCO0FBRTFCLFNBQVNVLFFBQVEsS0FBbUI7UUFBbkIsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBbkI7O0lBQzVCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNWSxjQUFjO1FBQ2hCRCxZQUFZLENBQUNEO0lBQ2pCO0lBRUEsTUFBTUcsV0FBVztRQUNiLElBQUlDLFdBQVdDLE9BQU9DLFFBQVEsQ0FBQ0YsUUFBUTtRQUV2Q0csVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNMLFdBQVcsdUJBQXVCTixNQUFNWSxFQUFFO1FBRXhFVCxZQUFZO0lBQ2hCO0lBRUEsTUFBTVUsU0FBU3ZCLHNEQUFTQTtJQUV4QixvQ0FBb0M7SUFDcEMsTUFBTSxFQUFFc0IsRUFBRSxFQUFFLEdBQUdDLE9BQU9DLEtBQUs7SUFFM0J2QixnREFBU0EsQ0FBQztRQUNOLGdFQUFnRTtRQUNoRSxJQUFJUyxNQUFNWSxFQUFFLElBQUlBLE1BQU1aLE1BQU1ZLEVBQUUsS0FBS0EsSUFBSTtZQUNuQ1QsWUFBWTtRQUNoQjtJQUNKLEdBQUc7UUFBQ1M7S0FBRztJQUVQLHFCQUVJLDhEQUFDRztRQUFRQyxTQUFVWjtRQUFjYSxXQUFVO2tCQUN2Qyw0RUFBQ3hCLHVGQUFTQSxDQUFDeUIsSUFBSTtZQUFDRCxXQUFVO3NCQUN0Qiw0RUFBQ3ZCLCtFQUFHQTs7a0NBQ0EsOERBQUNDLCtFQUFHQTt3QkFBQ3dCLElBQUk7d0JBQUlDLElBQUk7OzBDQUNiLDhEQUFDQztnQ0FBR0osV0FBVTswQ0FBaUJqQixNQUFNc0IsS0FBSzs7Ozs7OzBDQUMxQyw4REFBQzVCLCtFQUFHQTs7a0RBQ0EsOERBQUNDLCtFQUFHQTt3Q0FBQ3dCLElBQUk7a0RBQ0wsNEVBQUNJOzRDQUFHTixXQUFVO3NEQUFvQmpCLE1BQU13QixRQUFROzs7Ozs7Ozs7OztrREFFcEQsOERBQUM3QiwrRUFBR0E7d0NBQUN3QixJQUFJO2tEQUNKbkIsTUFBTXlCLElBQUksa0JBQUksOERBQUNGOzRDQUFHTixXQUFVO3NEQUFnQmpCLE1BQU15QixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFHN0R2QiwwQkFBWSw4REFBQ3dCO2dDQUFFVCxXQUFVOzBDQUF1QmhCOzs7Ozs7NEJBQ2hEQywwQkFBWSw4REFBQ2E7Z0NBQU9PLE9BQU07Z0NBQXlCTixTQUFVWDswQ0FBWSw0RUFBQ1AsaUZBQU1BOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUV0Riw4REFBQ0gsK0VBQUdBO3dCQUFDd0IsSUFBSTt3QkFBR0MsSUFBSTt3QkFBR0gsV0FBVTtrQ0FDdkJmLHlCQUFXLDhEQUFDTCxrSEFBY0E7Ozs7aURBQU0sOERBQUNELHFIQUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVFO0dBckR3Qkc7O1FBZUxULGtEQUFTQTs7O0tBZkpTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdC50c3g/N2NlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgTGlzdEdyb3VwLCBMaXN0R3JvdXBJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93Rm9yd2FyZCwgSW9Jb3NBcnJvd0Rvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IHsgSW9MaW5rIH0gZnJvbSBcInJlYWN0LWljb25zL2lvNVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh7IHByb3BzLCBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRFeHBhbmRlZCghZXhwYW5kZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvcHlMaW5rID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBob3N0bmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcclxuXHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoaG9zdG5hbWUgKyBcIjozMDAwL3Byb2plY3RzP2lkPVwiICsgcHJvcHMuaWQpO1xyXG5cclxuICAgICAgICBzZXRFeHBhbmRlZChmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBpZCBwYXJhbWV0ZXIgZnJvbSB0aGUgVVJMXHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBFeHBhbmQgdGhlIHByb2plY3QgaWYgdGhlIGlkIHBhcmFtZXRlciBtYXRjaGVzIHRoZSBwcm9qZWN0IGlkXHJcbiAgICAgICAgaWYgKHByb3BzLmlkICYmIGlkICYmIHByb3BzLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICBzZXRFeHBhbmRlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8YnV0dG9uICBvbkNsaWNrPXsgaGFuZGxlQ2xpY2sgfSBjbGFzc05hbWU9XCJwcm9qZWN0LWJ1dHRvblwiID5cclxuICAgICAgICAgICAgPExpc3RHcm91cC5JdGVtIGNsYXNzTmFtZT1cInByb2plY3QtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMH0gc209ezExfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInByb2plY3QtdGl0bGVcIj57cHJvcHMudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwcm9qZWN0LWNhdGVnb3J5XCI+e3Byb3BzLmNhdGVnb3J5fTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5kYXRlICYmIDxoNCBjbGFzc05hbWU9XCJwcm9qZWN0LWRhdGVcIj57cHJvcHMuZGF0ZX08L2g0Pn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBleHBhbmRlZCAmJiA8cCBjbGFzc05hbWU9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+e2NoaWxkcmVufTwvcD4gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4cGFuZGVkICYmIDxidXR0b24gdGl0bGU9XCJDb3B5IGxpbmsgdG8gdGhpcyBpdGVtXCIgb25DbGljaz17IGNvcHlMaW5rIH0gPjxJb0xpbmsgLz48L2J1dHRvbj4gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezJ9IHNtPXsxfSBjbGFzc05hbWU9XCJleHBhbmQtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhwYW5kZWQgPyA8SW9Jb3NBcnJvd0Rvd24gLz4gOiA8SW9Jb3NBcnJvd0ZvcndhcmQgLz4gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvTGlzdEdyb3VwLkl0ZW0+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGlzdEdyb3VwIiwiUm93IiwiQ29sIiwiSW9Jb3NBcnJvd0ZvcndhcmQiLCJJb0lvc0Fycm93RG93biIsIklvTGluayIsIlByb2plY3QiLCJwcm9wcyIsImNoaWxkcmVuIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImhhbmRsZUNsaWNrIiwiY29weUxpbmsiLCJob3N0bmFtZSIsIndpbmRvdyIsImxvY2F0aW9uIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiaWQiLCJyb3V0ZXIiLCJxdWVyeSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJJdGVtIiwieHMiLCJzbSIsImgzIiwidGl0bGUiLCJoNCIsImNhdGVnb3J5IiwiZGF0ZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/project.tsx\n"));

/***/ })

});