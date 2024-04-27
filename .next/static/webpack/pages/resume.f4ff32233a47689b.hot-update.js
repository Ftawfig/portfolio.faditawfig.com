"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/resume",{

/***/ "./components/project.tsx":
/*!********************************!*\
  !*** ./components/project.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=ListGroup!=!react-bootstrap */ \"__barrel_optimize__?names=ListGroup!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Row!=!react-bootstrap */ \"__barrel_optimize__?names=Col,Row!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowDown,IoIosArrowForward!=!react-icons/io */ \"__barrel_optimize__?names=IoIosArrowDown,IoIosArrowForward!=!./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_IoLink_react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=IoLink!=!react-icons/io5 */ \"__barrel_optimize__?names=IoLink!=!./node_modules/react-icons/io5/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Project(param) {\n    let { props, children } = param;\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleClick = ()=>{\n        setExpanded(!expanded);\n    };\n    const copyLink = ()=>{\n        let hostname = window.location.hostname;\n        navigator.clipboard.writeText(hostname + \":3000/projects?id=\" + props.id);\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Get the id parameter from the URL\n    const { id } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Expand the project if the id parameter matches the project id\n        if (props.id && id && props.id === id) {\n            setExpanded(true);\n        }\n    }, [\n        id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"project-button\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.ListGroup.Item, {\n            className: \"project-card\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                        className: \"project-details\",\n                        xs: 10,\n                        sm: 11,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"project-title\",\n                                children: props.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Row, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                                        xs: 6,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"project-category\",\n                                            children: props.category\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                                        xs: 6,\n                                        children: props.date && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"project-date\",\n                                            children: props.date\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 48\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 25\n                            }, this),\n                            expanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"project-description\",\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 39\n                            }, this),\n                            expanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                title: \"Copy link to this item\",\n                                onClick: copyLink,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoLink_react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoLink, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 100\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 39\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Col, {\n                        xs: 2,\n                        sm: 1,\n                        className: \"expand-button flex-column\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleClick,\n                            children: expanded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowDown, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 71\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowForward, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 92\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\components\\\\project.tsx\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_s(Project, \"XJrd97LFwLU+ZVpqLDZDBl6XQpE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2plY3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDYztBQUNJO0FBQzBCO0FBQzNCO0FBQ3dCO0FBQzFCO0FBRTFCLFNBQVNVLFFBQVEsS0FBbUI7UUFBbkIsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBbkI7O0lBQzVCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNWSxjQUFjO1FBQ2hCRCxZQUFZLENBQUNEO0lBQ2pCO0lBRUEsTUFBTUcsV0FBVztRQUNiLElBQUlDLFdBQVdDLE9BQU9DLFFBQVEsQ0FBQ0YsUUFBUTtRQUV2Q0csVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNMLFdBQVcsdUJBQXVCTixNQUFNWSxFQUFFO0lBQzVFO0lBRUEsTUFBTUMsU0FBU3ZCLHNEQUFTQTtJQUV4QixvQ0FBb0M7SUFDcEMsTUFBTSxFQUFFc0IsRUFBRSxFQUFFLEdBQUdDLE9BQU9DLEtBQUs7SUFFM0J2QixnREFBU0EsQ0FBQztRQUNOLGdFQUFnRTtRQUNoRSxJQUFJUyxNQUFNWSxFQUFFLElBQUlBLE1BQU1aLE1BQU1ZLEVBQUUsS0FBS0EsSUFBSTtZQUNuQ1QsWUFBWTtRQUNoQjtJQUNKLEdBQUc7UUFBQ1M7S0FBRztJQUVQLHFCQUVJLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDdkIsdUZBQVNBLENBQUN3QixJQUFJO1lBQUNELFdBQVU7c0JBQ3RCLDRFQUFDdEIsK0VBQUdBOztrQ0FDQSw4REFBQ0MsK0VBQUdBO3dCQUFDcUIsV0FBVTt3QkFBa0JFLElBQUk7d0JBQUlDLElBQUk7OzBDQUN6Qyw4REFBQ0M7Z0NBQUdKLFdBQVU7MENBQWlCaEIsTUFBTXFCLEtBQUs7Ozs7OzswQ0FDMUMsOERBQUMzQiwrRUFBR0E7O2tEQUNBLDhEQUFDQywrRUFBR0E7d0NBQUN1QixJQUFJO2tEQUNMLDRFQUFDSTs0Q0FBR04sV0FBVTtzREFBb0JoQixNQUFNdUIsUUFBUTs7Ozs7Ozs7Ozs7a0RBRXBELDhEQUFDNUIsK0VBQUdBO3dDQUFDdUIsSUFBSTtrREFDSmxCLE1BQU13QixJQUFJLGtCQUFJLDhEQUFDRjs0Q0FBR04sV0FBVTtzREFBZ0JoQixNQUFNd0IsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBRzdEdEIsMEJBQVksOERBQUN1QjtnQ0FBRVQsV0FBVTswQ0FBdUJmOzs7Ozs7NEJBQ2hEQywwQkFBWSw4REFBQ3dCO2dDQUFPTCxPQUFNO2dDQUF5Qk0sU0FBVXRCOzBDQUFZLDRFQUFDUCxpRkFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRXRGLDhEQUFDSCwrRUFBR0E7d0JBQUN1QixJQUFJO3dCQUFHQyxJQUFJO3dCQUFHSCxXQUFVO2tDQUN6Qiw0RUFBQ1U7NEJBQU9DLFNBQVV2QjtzQ0FBaUJGLHlCQUFXLDhEQUFDTCxrSEFBY0E7Ozs7cURBQU0sOERBQUNELHFIQUFpQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPN0c7R0FuRHdCRzs7UUFhTFQsa0RBQVNBOzs7S0FiSlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0LnRzeD83Y2U1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dGb3J3YXJkLCBJb0lvc0Fycm93RG93biB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgeyBJb0xpbmsgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHsgcHJvcHMsIGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29weUxpbmsgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGhvc3RuYW1lID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xyXG5cclxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChob3N0bmFtZSArIFwiOjMwMDAvcHJvamVjdHM/aWQ9XCIgKyBwcm9wcy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgLy8gR2V0IHRoZSBpZCBwYXJhbWV0ZXIgZnJvbSB0aGUgVVJMXHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBFeHBhbmQgdGhlIHByb2plY3QgaWYgdGhlIGlkIHBhcmFtZXRlciBtYXRjaGVzIHRoZSBwcm9qZWN0IGlkXHJcbiAgICAgICAgaWYgKHByb3BzLmlkICYmIGlkICYmIHByb3BzLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICBzZXRFeHBhbmRlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbaWRdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtYnV0dG9uXCIgPlxyXG4gICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicHJvamVjdC1kZXRhaWxzXCIgeHM9ezEwfSBzbT17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvamVjdC10aXRsZVwiPntwcm9wcy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInByb2plY3QtY2F0ZWdvcnlcIj57cHJvcHMuY2F0ZWdvcnl9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRhdGUgJiYgPGg0IGNsYXNzTmFtZT1cInByb2plY3QtZGF0ZVwiPntwcm9wcy5kYXRlfTwvaDQ+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGV4cGFuZGVkICYmIDxwIGNsYXNzTmFtZT1cInByb2plY3QtZGVzY3JpcHRpb25cIj57Y2hpbGRyZW59PC9wPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhwYW5kZWQgJiYgPGJ1dHRvbiB0aXRsZT1cIkNvcHkgbGluayB0byB0aGlzIGl0ZW1cIiBvbkNsaWNrPXsgY29weUxpbmsgfSA+PElvTGluayAvPjwvYnV0dG9uPiB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Mn0gc209ezF9IGNsYXNzTmFtZT1cImV4cGFuZC1idXR0b24gZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsgaGFuZGxlQ2xpY2sgfSA+eyBleHBhbmRlZCA/IDxJb0lvc0Fycm93RG93biAvPiA6IDxJb0lvc0Fycm93Rm9yd2FyZCAvPiB9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9MaXN0R3JvdXAuSXRlbT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpc3RHcm91cCIsIlJvdyIsIkNvbCIsIklvSW9zQXJyb3dGb3J3YXJkIiwiSW9Jb3NBcnJvd0Rvd24iLCJJb0xpbmsiLCJQcm9qZWN0IiwicHJvcHMiLCJjaGlsZHJlbiIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJoYW5kbGVDbGljayIsImNvcHlMaW5rIiwiaG9zdG5hbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImlkIiwicm91dGVyIiwicXVlcnkiLCJkaXYiLCJjbGFzc05hbWUiLCJJdGVtIiwieHMiLCJzbSIsImgzIiwidGl0bGUiLCJoNCIsImNhdGVnb3J5IiwiZGF0ZSIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/project.tsx\n"));

/***/ })

});