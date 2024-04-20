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

/***/ "./pages/projects.tsx":
/*!****************************!*\
  !*** ./pages/projects.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Container,ListGroup!=!react-bootstrap */ \"__barrel_optimize__?names=Container,ListGroup!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hero */ \"./components/hero.tsx\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/project */ \"./components/project.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Projects() {\n    _s();\n    const searchParams = useSearchParams();\n    const idParam = searchParams.get(\"id\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const id = router.query;\n    console.log(id);\n    // Tags used for filtering the project list \n    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"Web\",\n        \"Data Engineering\",\n        \"Game-dev\"\n    ]);\n    // The currently selected tag. When set to null all tags will be displayed. \n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // List of project components to display: each project has a \"cat\" used for filtering \n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    id: \"mcserver\",\n                    title: \"Minecraft server management app\",\n                    category: \"Web\",\n                    selectedId: selectedId\n                },\n                children: \"Hosted on Google Compute Engine.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"Tic-tac-toe\",\n                    category: \"Web\"\n                },\n                children: \"A tic-tac-toe game built with React.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Data Engineering\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"Google Search Console / BigQuery ETL\",\n                    category: \"Data Engineering\"\n                },\n                children: \"ETL pipeline to load Google Search Console data into BigQuery.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Game-dev\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"Unity game-dev\",\n                    category: \"Game-dev\"\n                },\n                children: \"A 3D game built with Unity.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"Consulting website\",\n                    category: \"Web\"\n                },\n                children: [\n                    \"A consulting website built with WordPress.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 22\n                    }, this),\n                    \"Link: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"https://faditawfig.com\",\n                        children: \"faditawfig.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 33\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"this.portfolio\",\n                    category: \"Web\"\n                },\n                children: [\n                    \"Portfolio website to highlight my personal projects and resume. Built with React / Next.js. Hosted using Google Cloud Run.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Features:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Global dark-mode toggle with system-default detection\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"FIlterable projects and resume pages\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 18\n                    }, this),\n                    \"Link: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: \"portfolio.faditawfig.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 50,\n                columnNumber: 28\n            }, this)\n        }\n    ]);\n    // if the tag to be selected is the same as the currently selected tag, set the selected tag to null\n    // otherwise, set the selected tag to the newly selected tag\n    const selectTag = (tag)=>{\n        if (selectedTag === tag) {\n            setSelectedTag(null);\n        } else {\n            setSelectedTag(tag);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                props: {\n                    title: \"Projects\"\n                },\n                children: \"Click on a project for more details.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                className: \"main\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                        className: \"tags\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: \"Filter by category: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, this),\n                            // display the list of available tags\n                            // TODO - add a class to highlight the currently selected tag\n                            tags.map((tag, i)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: selectedTag === tag ? \"tag selected\" : \"tag unSelected\",\n                                            onClick: ()=>selectTag(tag),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"project-category\",\n                                                children: tag\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 143\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 39\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.ListGroup, {\n                        children: // filter the project list: only return each project if the selected tag is null or the selected tag matches the projects tag\n                        projects.map((project, i)=>{\n                            if (selectedTag === null || selectedTag === project.cat) {\n                                return project.prj;\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Projects, \"hmZFm4t00IRcVSC2aItm0s02VrA=\", true, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBQWlCOzRDQUFtQkssU0FBUyxJQUFNTixVQUFVQztzREFBTSw0RUFBQ007Z0RBQUdMLFdBQVU7MERBQW9CRDs7Ozs7Ozs7Ozs7d0NBQWE7Ozs0QkFDcks7Ozs7Ozs7a0NBV1IsOERBQUMvQixpR0FBU0E7a0NBR0ZpQiw2SEFENkg7d0JBQzdIQSxTQUFTZ0IsR0FBRyxDQUFDLENBQUNLLFNBQVNKOzRCQUNuQixJQUFJbkIsZ0JBQWdCLFFBQVFBLGdCQUFnQnVCLFFBQVFuQixHQUFHLEVBQ3ZEO2dDQUNJLE9BQU9tQixRQUFRbEIsR0FBRzs0QkFDdEI7d0JBQ0o7Ozs7Ozs7Ozs7Ozs7O0FBTXhCO0dBckd3QmpCOztRQUlMTCxrREFBU0E7OztLQUpKSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0cy50c3g/NjM1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgTGlzdEdyb3VwLCBMaXN0R3JvdXBJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xyXG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XHJcbiAgICBjb25zdCBpZFBhcmFtID0gc2VhcmNoUGFyYW1zLmdldChcImlkXCIpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgaWQgPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhpZCk7XHJcblxyXG4gICAgLy8gVGFncyB1c2VkIGZvciBmaWx0ZXJpbmcgdGhlIHByb2plY3QgbGlzdCBcclxuICAgIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtcIldlYlwiLCBcIkRhdGEgRW5naW5lZXJpbmdcIiwgXCJHYW1lLWRldlwiXSk7XHJcbiAgICBcclxuICAgIC8vIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFnLiBXaGVuIHNldCB0byBudWxsIGFsbCB0YWdzIHdpbGwgYmUgZGlzcGxheWVkLiBcclxuICAgIGNvbnN0IFtzZWxlY3RlZFRhZywgc2V0U2VsZWN0ZWRUYWddID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgLy8gTGlzdCBvZiBwcm9qZWN0IGNvbXBvbmVudHMgdG8gZGlzcGxheTogZWFjaCBwcm9qZWN0IGhhcyBhIFwiY2F0XCIgdXNlZCBmb3IgZmlsdGVyaW5nIFxyXG4gICAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAge2NhdCA6IFwiV2ViXCIsIHByaiA6IFxyXG4gICAgICAgICAgICA8UHJvamVjdCBwcm9wcz17e2lkOiBcIm1jc2VydmVyXCIsIHRpdGxlOiBcIk1pbmVjcmFmdCBzZXJ2ZXIgbWFuYWdlbWVudCBhcHBcIiwgY2F0ZWdvcnk6IFwiV2ViXCIsIHNlbGVjdGVkSWQ6IHNlbGVjdGVkSWR9fT5cclxuICAgICAgICAgICAgICAgIEhvc3RlZCBvbiBHb29nbGUgQ29tcHV0ZSBFbmdpbmUuXHJcbiAgICAgICAgICAgIDwvUHJvamVjdD5cclxuICAgICAgICB9XHJcbiAgICAgICAgLHtjYXQgOiBcIldlYlwiLCBwcmogOiBcclxuICAgICAgICAgICAgPFByb2plY3QgcHJvcHM9e3t0aXRsZTogXCJUaWMtdGFjLXRvZVwiLCBjYXRlZ29yeTogXCJXZWJcIn19PlxyXG4gICAgICAgICAgICAgICAgQSB0aWMtdGFjLXRvZSBnYW1lIGJ1aWx0IHdpdGggUmVhY3QuXHJcbiAgICAgICAgICAgIDwvUHJvamVjdD59XHJcbiAgICAgICAgLHtjYXQgOiBcIkRhdGEgRW5naW5lZXJpbmdcIiwgcHJqIDogXHJcbiAgICAgICAgICAgIDxQcm9qZWN0IHByb3BzPXt7dGl0bGU6IFwiR29vZ2xlIFNlYXJjaCBDb25zb2xlIC8gQmlnUXVlcnkgRVRMXCIsIGNhdGVnb3J5OiBcIkRhdGEgRW5naW5lZXJpbmdcIn19PlxyXG4gICAgICAgICAgICAgICAgRVRMIHBpcGVsaW5lIHRvIGxvYWQgR29vZ2xlIFNlYXJjaCBDb25zb2xlIGRhdGEgaW50byBCaWdRdWVyeS5cclxuICAgICAgICAgICAgPC9Qcm9qZWN0PlxyXG4gICAgICAgIH1cclxuICAgICAgICAse2NhdCA6IFwiR2FtZS1kZXZcIiwgcHJqIDogXHJcbiAgICAgICAgICAgIDxQcm9qZWN0IHByb3BzPXt7dGl0bGU6IFwiVW5pdHkgZ2FtZS1kZXZcIiwgY2F0ZWdvcnk6IFwiR2FtZS1kZXZcIn19PlxyXG4gICAgICAgICAgICAgICAgQSAzRCBnYW1lIGJ1aWx0IHdpdGggVW5pdHkuXHJcbiAgICAgICAgICAgIDwvUHJvamVjdD5cclxuICAgICAgICB9XHJcbiAgICAgICAgLHtjYXQgOiBcIldlYlwiLCBwcmogOiBcclxuICAgICAgICAgICAgPFByb2plY3QgcHJvcHM9e3t0aXRsZTogXCJDb25zdWx0aW5nIHdlYnNpdGVcIiwgY2F0ZWdvcnk6IFwiV2ViXCJ9fT5cclxuICAgICAgICAgICAgICAgIEEgY29uc3VsdGluZyB3ZWJzaXRlIGJ1aWx0IHdpdGggV29yZFByZXNzLiBcclxuICAgICAgICAgICAgICAgIDxici8+PGJyLz5MaW5rOiA8TGluayBocmVmPVwiaHR0cHM6Ly9mYWRpdGF3ZmlnLmNvbVwiPmZhZGl0YXdmaWcuY29tPC9MaW5rPlxyXG4gICAgICAgICAgICA8L1Byb2plY3Q+XHJcbiAgICAgICAgfVxyXG4gICAgICAgICx7Y2F0OiBcIldlYlwiLCBwcmo6IDxQcm9qZWN0IHByb3BzPXt7dGl0bGU6IFwidGhpcy5wb3J0Zm9saW9cIiwgY2F0ZWdvcnk6IFwiV2ViXCJ9fT5cclxuICAgICAgICAgICAgUG9ydGZvbGlvIHdlYnNpdGUgdG8gaGlnaGxpZ2h0IG15IHBlcnNvbmFsIHByb2plY3RzIGFuZCByZXN1bWUuIEJ1aWx0IHdpdGggUmVhY3QgLyBOZXh0LmpzLiBIb3N0ZWQgdXNpbmcgR29vZ2xlIENsb3VkIFJ1bi4gXHJcblxyXG4gICAgICAgICAgICA8aDU+RmVhdHVyZXM6PC9oNT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPkdsb2JhbCBkYXJrLW1vZGUgdG9nZ2xlIHdpdGggc3lzdGVtLWRlZmF1bHQgZGV0ZWN0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5GSWx0ZXJhYmxlIHByb2plY3RzIGFuZCByZXN1bWUgcGFnZXM8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8YnIvPjxici8+TGluazogPExpbmsgaHJlZj1cIi9cIj5wb3J0Zm9saW8uZmFkaXRhd2ZpZy5jb208L0xpbms+XHJcbiAgICAgICAgPC9Qcm9qZWN0Pn1cclxuICAgIF0pO1xyXG5cclxuICAgIC8vIGlmIHRoZSB0YWcgdG8gYmUgc2VsZWN0ZWQgaXMgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0YWcsIHNldCB0aGUgc2VsZWN0ZWQgdGFnIHRvIG51bGxcclxuICAgIC8vIG90aGVyd2lzZSwgc2V0IHRoZSBzZWxlY3RlZCB0YWcgdG8gdGhlIG5ld2x5IHNlbGVjdGVkIHRhZ1xyXG4gICAgY29uc3Qgc2VsZWN0VGFnID0gKHRhZykgPT4ge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFRhZyA9PT0gdGFnKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVGFnKG51bGwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVGFnKHRhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZXJvIHByb3BzPXt7dGl0bGU6IFwiUHJvamVjdHNcIn19PlxyXG4gICAgICAgICAgICAgICAgQ2xpY2sgb24gYSBwcm9qZWN0IGZvciBtb3JlIGRldGFpbHMuXHJcbiAgICAgICAgICAgIDwvSGVybz5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+RmlsdGVyIGJ5IGNhdGVnb3J5OiA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheSB0aGUgbGlzdCBvZiBhdmFpbGFibGUgdGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIC0gYWRkIGEgY2xhc3MgdG8gaGlnaGxpZ2h0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3MubWFwKCh0YWcsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8PiA8YSBjbGFzc05hbWU9eyBzZWxlY3RlZFRhZyA9PT0gdGFnID8gJ3RhZyBzZWxlY3RlZCcgOiAndGFnIHVuU2VsZWN0ZWQnIH0gb25DbGljaz17KCkgPT4gc2VsZWN0VGFnKHRhZyl9PjxoNCBjbGFzc05hbWU9XCJwcm9qZWN0LWNhdGVnb3J5XCI+e3RhZ308L2g0PjwvYT4gPC8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBzaG93IHNlbGVjdGVkIHRhZyBmb3IgdGVzdGluZyBcclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5TZWxlY3RlZCB0YWc6IDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwcm9qZWN0LWNhdGVnb3J5XCI+e3NlbGVjdGVkVGFnfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaWx0ZXIgdGhlIHByb2plY3QgbGlzdDogb25seSByZXR1cm4gZWFjaCBwcm9qZWN0IGlmIHRoZSBzZWxlY3RlZCB0YWcgaXMgbnVsbCBvciB0aGUgc2VsZWN0ZWQgdGFnIG1hdGNoZXMgdGhlIHByb2plY3RzIHRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5tYXAoKHByb2plY3QsIGkpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRUYWcgPT09IG51bGwgfHwgc2VsZWN0ZWRUYWcgPT09IHByb2plY3QuY2F0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LnByajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJDb250YWluZXIiLCJMaXN0R3JvdXAiLCJIZXJvIiwiUHJvamVjdCIsIlByb2plY3RzIiwic2VhcmNoUGFyYW1zIiwidXNlU2VhcmNoUGFyYW1zIiwiaWRQYXJhbSIsImdldCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwidGFncyIsInNldFRhZ3MiLCJzZWxlY3RlZFRhZyIsInNldFNlbGVjdGVkVGFnIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsImNhdCIsInByaiIsInByb3BzIiwidGl0bGUiLCJjYXRlZ29yeSIsInNlbGVjdGVkSWQiLCJiciIsImhyZWYiLCJoNSIsInVsIiwibGkiLCJzZWxlY3RUYWciLCJ0YWciLCJjbGFzc05hbWUiLCJtYXAiLCJpIiwiYSIsIm9uQ2xpY2siLCJoNCIsInByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects.tsx\n"));

/***/ })

});