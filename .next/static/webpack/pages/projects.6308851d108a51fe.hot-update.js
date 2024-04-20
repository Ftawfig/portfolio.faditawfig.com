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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Container,ListGroup!=!react-bootstrap */ \"__barrel_optimize__?names=Container,ListGroup!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hero */ \"./components/hero.tsx\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/project */ \"./components/project.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Projects() {\n    _s();\n    const [selectedId, setSelectedId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)((0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)().get(\"id\"));\n    console.log(selectedId);\n    // Tags used for filtering the project list \n    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"Web\",\n        \"Data Engineering\",\n        \"Game-dev\"\n    ]);\n    // The currently selected tag. When set to null all tags will be displayed. \n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // List of project components to display: each project has a \"cat\" used for filtering \n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    id: \"mcserver\",\n                    title: \"Minecraft server management app\",\n                    category: \"Web\",\n                    selectedId: selectedId\n                },\n                children: \"Hosted on Google Compute Engine.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"Tic-tac-toe\",\n                    category: \"Web\"\n                },\n                children: \"A tic-tac-toe game built with React.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Data Engineering\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"Google Search Console / BigQuery ETL\",\n                    category: \"Data Engineering\"\n                },\n                children: \"ETL pipeline to load Google Search Console data into BigQuery.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Game-dev\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"Unity game-dev\",\n                    category: \"Game-dev\"\n                },\n                children: \"A 3D game built with Unity.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"Consulting website\",\n                    category: \"Web\"\n                },\n                children: [\n                    \"A consulting website built with WordPress.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 22\n                    }, this),\n                    \"Link: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"https://faditawfig.com\",\n                        children: \"faditawfig.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 33\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"this.portfolio\",\n                    category: \"Web\"\n                },\n                children: [\n                    \"Portfolio website to highlight my personal projects and resume. Built with React / Next.js. Hosted using Google Cloud Run.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Features:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Global dark-mode toggle with system-default detection\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"FIlterable projects and resume pages\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 18\n                    }, this),\n                    \"Link: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: \"portfolio.faditawfig.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 47,\n                columnNumber: 28\n            }, this)\n        }\n    ]);\n    // if the tag to be selected is the same as the currently selected tag, set the selected tag to null\n    // otherwise, set the selected tag to the newly selected tag\n    const selectTag = (tag)=>{\n        if (selectedTag === tag) {\n            setSelectedTag(null);\n        } else {\n            setSelectedTag(tag);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                props: {\n                    title: \"Projects\"\n                },\n                children: \"Click on a project for more details.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                className: \"main\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                        className: \"tags\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: \"Filter by category: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, this),\n                            // display the list of available tags\n                            // TODO - add a class to highlight the currently selected tag\n                            tags.map((tag, i)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: selectedTag === tag ? \"tag selected\" : \"tag unSelected\",\n                                            onClick: ()=>selectTag(tag),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"project-category\",\n                                                children: tag\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 143\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 39\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.ListGroup, {\n                        children: // filter the project list: only return each project if the selected tag is null or the selected tag matches the projects tag\n                        projects.map((project, i)=>{\n                            if (selectedTag === null || selectedTag === project.cat) {\n                                return project.prj;\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Projects, \"Rsdxlxxp5XE9XLyta+CZgr5ZOPk=\");\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDSDtBQUNrQjtBQUNNO0FBQ29CO0FBQ2hDO0FBQ007QUFFN0IsU0FBU1E7O0lBQ3BCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBQ0MsZ0VBQWVBLEdBQUdRLEdBQUcsQ0FBQztJQUVuRUMsUUFBUUMsR0FBRyxDQUFDSjtJQUVaLDRDQUE0QztJQUM1QyxNQUFNLENBQUNLLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7UUFBQztRQUFPO1FBQW9CO0tBQVc7SUFFeEUsNEVBQTRFO0lBQzVFLE1BQU0sQ0FBQ2MsYUFBYUMsZUFBZSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUUvQyxzRkFBc0Y7SUFDdEYsTUFBTSxDQUFDZ0IsVUFBVUMsWUFBWSxHQUFHakIsK0NBQVFBLENBQUM7UUFDckM7WUFBQ2tCLEtBQU07WUFBT0MsbUJBQ1YsOERBQUNkLDJEQUFPQTtnQkFBQ2UsT0FBTztvQkFBQ0MsSUFBSTtvQkFBWUMsT0FBTztvQkFBbUNDLFVBQVU7b0JBQU9oQixZQUFZQTtnQkFBVTswQkFBRzs7Ozs7O1FBR3pIO1FBQ0M7WUFBQ1csS0FBTTtZQUFPQyxtQkFDWCw4REFBQ2QsMkRBQU9BO2dCQUFDZSxPQUFPO29CQUFDRSxPQUFPO29CQUFlQyxVQUFVO2dCQUFLOzBCQUFHOzs7Ozs7UUFFL0M7UUFDYjtZQUFDTCxLQUFNO1lBQW9CQyxtQkFDeEIsOERBQUNkLDJEQUFPQTtnQkFBQ2UsT0FBTztvQkFBQ0UsT0FBTztvQkFBd0NDLFVBQVU7Z0JBQWtCOzBCQUFHOzs7Ozs7UUFHbkc7UUFDQztZQUFDTCxLQUFNO1lBQVlDLG1CQUNoQiw4REFBQ2QsMkRBQU9BO2dCQUFDZSxPQUFPO29CQUFDRSxPQUFPO29CQUFrQkMsVUFBVTtnQkFBVTswQkFBRzs7Ozs7O1FBR3JFO1FBQ0M7WUFBQ0wsS0FBTTtZQUFPQyxtQkFDWCw4REFBQ2QsMkRBQU9BO2dCQUFDZSxPQUFPO29CQUFDRSxPQUFPO29CQUFzQkMsVUFBVTtnQkFBSzs7b0JBQUc7a0NBRTVELDhEQUFDQzs7Ozs7a0NBQUksOERBQUNBOzs7OztvQkFBSTtrQ0FBTSw4REFBQzFCLGtEQUFJQTt3QkFBQzJCLE1BQUs7a0NBQXlCOzs7Ozs7Ozs7Ozs7UUFFNUQ7UUFDQztZQUFDUCxLQUFLO1lBQU9DLG1CQUFLLDhEQUFDZCwyREFBT0E7Z0JBQUNlLE9BQU87b0JBQUNFLE9BQU87b0JBQWtCQyxVQUFVO2dCQUFLOztvQkFBRztrQ0FHM0UsOERBQUNHO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDOzswQ0FDRyw4REFBQ0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ0E7MENBQUc7Ozs7Ozs7Ozs7OztrQ0FFUiw4REFBQ0o7Ozs7O2tDQUFJLDhEQUFDQTs7Ozs7b0JBQUk7a0NBQU0sOERBQUMxQixrREFBSUE7d0JBQUMyQixNQUFLO2tDQUFJOzs7Ozs7Ozs7Ozs7UUFDekI7S0FDYjtJQUVELG9HQUFvRztJQUNwRyw0REFBNEQ7SUFDNUQsTUFBTUksWUFBWSxDQUFDQztRQUNmLElBQUloQixnQkFBZ0JnQixLQUFLO1lBQ3JCZixlQUFlO1FBQ25CLE9BQU87WUFDSEEsZUFBZWU7UUFDbkI7SUFDSjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQzFCLHdEQUFJQTtnQkFBQ2dCLE9BQU87b0JBQUNFLE9BQU87Z0JBQVU7MEJBQUc7Ozs7OzswQkFHbEMsOERBQUNwQixpR0FBU0E7Z0JBQUM2QixXQUFVOztrQ0FDakIsOERBQUM3QixpR0FBU0E7d0JBQUM2QixXQUFVOzswQ0FDakIsOERBQUNMOzBDQUFHOzs7Ozs7NEJBRUEscUNBQXFDOzRCQUNyQyw2REFBNkQ7NEJBQzdEZCxLQUFLb0IsR0FBRyxDQUFDLENBQUNGLEtBQUtHO2dDQUNYLHFCQUFPOzt3Q0FBRTtzREFBQyw4REFBQ0M7NENBQUVILFdBQVlqQixnQkFBZ0JnQixNQUFNLGlCQUFpQjs0Q0FBbUJLLFNBQVMsSUFBTU4sVUFBVUM7c0RBQU0sNEVBQUNNO2dEQUFHTCxXQUFVOzBEQUFvQkQ7Ozs7Ozs7Ozs7O3dDQUFhOzs7NEJBQ3JLOzs7Ozs7O2tDQVdSLDhEQUFDM0IsaUdBQVNBO2tDQUdGYSw2SEFENkg7d0JBQzdIQSxTQUFTZ0IsR0FBRyxDQUFDLENBQUNLLFNBQVNKOzRCQUNuQixJQUFJbkIsZ0JBQWdCLFFBQVFBLGdCQUFnQnVCLFFBQVFuQixHQUFHLEVBQ3ZEO2dDQUNJLE9BQU9tQixRQUFRbEIsR0FBRzs0QkFDdEI7d0JBQ0o7Ozs7Ozs7Ozs7Ozs7O0FBTXhCO0dBbEd3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMudHN4PzYzNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8nO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZSh1c2VTZWFyY2hQYXJhbXMoKS5nZXQoJ2lkJykpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkSWQpO1xyXG5cclxuICAgIC8vIFRhZ3MgdXNlZCBmb3IgZmlsdGVyaW5nIHRoZSBwcm9qZWN0IGxpc3QgXHJcbiAgICBjb25zdCBbdGFncywgc2V0VGFnc10gPSB1c2VTdGF0ZShbXCJXZWJcIiwgXCJEYXRhIEVuZ2luZWVyaW5nXCIsIFwiR2FtZS1kZXZcIl0pO1xyXG4gICAgXHJcbiAgICAvLyBUaGUgY3VycmVudGx5IHNlbGVjdGVkIHRhZy4gV2hlbiBzZXQgdG8gbnVsbCBhbGwgdGFncyB3aWxsIGJlIGRpc3BsYXllZC4gXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUYWcsIHNldFNlbGVjdGVkVGFnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIC8vIExpc3Qgb2YgcHJvamVjdCBjb21wb25lbnRzIHRvIGRpc3BsYXk6IGVhY2ggcHJvamVjdCBoYXMgYSBcImNhdFwiIHVzZWQgZm9yIGZpbHRlcmluZyBcclxuICAgIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtjYXQgOiBcIldlYlwiLCBwcmogOiBcclxuICAgICAgICAgICAgPFByb2plY3QgcHJvcHM9e3tpZDogXCJtY3NlcnZlclwiLCB0aXRsZTogXCJNaW5lY3JhZnQgc2VydmVyIG1hbmFnZW1lbnQgYXBwXCIsIGNhdGVnb3J5OiBcIldlYlwiLCBzZWxlY3RlZElkOiBzZWxlY3RlZElkfX0+XHJcbiAgICAgICAgICAgICAgICBIb3N0ZWQgb24gR29vZ2xlIENvbXB1dGUgRW5naW5lLlxyXG4gICAgICAgICAgICA8L1Byb2plY3Q+XHJcbiAgICAgICAgfVxyXG4gICAgICAgICx7Y2F0IDogXCJXZWJcIiwgcHJqIDogXHJcbiAgICAgICAgICAgIDxQcm9qZWN0IHByb3BzPXt7dGl0bGU6IFwiVGljLXRhYy10b2VcIiwgY2F0ZWdvcnk6IFwiV2ViXCJ9fT5cclxuICAgICAgICAgICAgICAgIEEgdGljLXRhYy10b2UgZ2FtZSBidWlsdCB3aXRoIFJlYWN0LlxyXG4gICAgICAgICAgICA8L1Byb2plY3Q+fVxyXG4gICAgICAgICx7Y2F0IDogXCJEYXRhIEVuZ2luZWVyaW5nXCIsIHByaiA6IFxyXG4gICAgICAgICAgICA8UHJvamVjdCBwcm9wcz17e3RpdGxlOiBcIkdvb2dsZSBTZWFyY2ggQ29uc29sZSAvIEJpZ1F1ZXJ5IEVUTFwiLCBjYXRlZ29yeTogXCJEYXRhIEVuZ2luZWVyaW5nXCJ9fT5cclxuICAgICAgICAgICAgICAgIEVUTCBwaXBlbGluZSB0byBsb2FkIEdvb2dsZSBTZWFyY2ggQ29uc29sZSBkYXRhIGludG8gQmlnUXVlcnkuXHJcbiAgICAgICAgICAgIDwvUHJvamVjdD5cclxuICAgICAgICB9XHJcbiAgICAgICAgLHtjYXQgOiBcIkdhbWUtZGV2XCIsIHByaiA6IFxyXG4gICAgICAgICAgICA8UHJvamVjdCBwcm9wcz17e3RpdGxlOiBcIlVuaXR5IGdhbWUtZGV2XCIsIGNhdGVnb3J5OiBcIkdhbWUtZGV2XCJ9fT5cclxuICAgICAgICAgICAgICAgIEEgM0QgZ2FtZSBidWlsdCB3aXRoIFVuaXR5LlxyXG4gICAgICAgICAgICA8L1Byb2plY3Q+XHJcbiAgICAgICAgfVxyXG4gICAgICAgICx7Y2F0IDogXCJXZWJcIiwgcHJqIDogXHJcbiAgICAgICAgICAgIDxQcm9qZWN0IHByb3BzPXt7dGl0bGU6IFwiQ29uc3VsdGluZyB3ZWJzaXRlXCIsIGNhdGVnb3J5OiBcIldlYlwifX0+XHJcbiAgICAgICAgICAgICAgICBBIGNvbnN1bHRpbmcgd2Vic2l0ZSBidWlsdCB3aXRoIFdvcmRQcmVzcy4gXHJcbiAgICAgICAgICAgICAgICA8YnIvPjxici8+TGluazogPExpbmsgaHJlZj1cImh0dHBzOi8vZmFkaXRhd2ZpZy5jb21cIj5mYWRpdGF3ZmlnLmNvbTwvTGluaz5cclxuICAgICAgICAgICAgPC9Qcm9qZWN0PlxyXG4gICAgICAgIH1cclxuICAgICAgICAse2NhdDogXCJXZWJcIiwgcHJqOiA8UHJvamVjdCBwcm9wcz17e3RpdGxlOiBcInRoaXMucG9ydGZvbGlvXCIsIGNhdGVnb3J5OiBcIldlYlwifX0+XHJcbiAgICAgICAgICAgIFBvcnRmb2xpbyB3ZWJzaXRlIHRvIGhpZ2hsaWdodCBteSBwZXJzb25hbCBwcm9qZWN0cyBhbmQgcmVzdW1lLiBCdWlsdCB3aXRoIFJlYWN0IC8gTmV4dC5qcy4gSG9zdGVkIHVzaW5nIEdvb2dsZSBDbG91ZCBSdW4uIFxyXG5cclxuICAgICAgICAgICAgPGg1PkZlYXR1cmVzOjwvaDU+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaT5HbG9iYWwgZGFyay1tb2RlIHRvZ2dsZSB3aXRoIHN5c3RlbS1kZWZhdWx0IGRldGVjdGlvbjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+RklsdGVyYWJsZSBwcm9qZWN0cyBhbmQgcmVzdW1lIHBhZ2VzPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGJyLz48YnIvPkxpbms6IDxMaW5rIGhyZWY9XCIvXCI+cG9ydGZvbGlvLmZhZGl0YXdmaWcuY29tPC9MaW5rPlxyXG4gICAgICAgIDwvUHJvamVjdD59XHJcbiAgICBdKTtcclxuXHJcbiAgICAvLyBpZiB0aGUgdGFnIHRvIGJlIHNlbGVjdGVkIGlzIHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFnLCBzZXQgdGhlIHNlbGVjdGVkIHRhZyB0byBudWxsXHJcbiAgICAvLyBvdGhlcndpc2UsIHNldCB0aGUgc2VsZWN0ZWQgdGFnIHRvIHRoZSBuZXdseSBzZWxlY3RlZCB0YWdcclxuICAgIGNvbnN0IHNlbGVjdFRhZyA9ICh0YWcpID0+IHtcclxuICAgICAgICBpZiAoc2VsZWN0ZWRUYWcgPT09IHRhZykge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRhZyhudWxsKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRhZyh0YWcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVybyBwcm9wcz17e3RpdGxlOiBcIlByb2plY3RzXCJ9fT5cclxuICAgICAgICAgICAgICAgIENsaWNrIG9uIGEgcHJvamVjdCBmb3IgbW9yZSBkZXRhaWxzLlxyXG4gICAgICAgICAgICA8L0hlcm8+XHJcbiAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ0YWdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PkZpbHRlciBieSBjYXRlZ29yeTogPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgdGhlIGxpc3Qgb2YgYXZhaWxhYmxlIHRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyAtIGFkZCBhIGNsYXNzIHRvIGhpZ2hsaWdodCB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzLm1hcCgodGFnLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPD4gPGEgY2xhc3NOYW1lPXsgc2VsZWN0ZWRUYWcgPT09IHRhZyA/ICd0YWcgc2VsZWN0ZWQnIDogJ3RhZyB1blNlbGVjdGVkJyB9IG9uQ2xpY2s9eygpID0+IHNlbGVjdFRhZyh0YWcpfT48aDQgY2xhc3NOYW1lPVwicHJvamVjdC1jYXRlZ29yeVwiPnt0YWd9PC9oND48L2E+IDwvPjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICB7Lyogc2hvdyBzZWxlY3RlZCB0YWcgZm9yIHRlc3RpbmcgXHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+U2VsZWN0ZWQgdGFnOiA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicHJvamVjdC1jYXRlZ29yeVwiPntzZWxlY3RlZFRhZ308L2g0PlxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAqL31cclxuXHJcbiAgICAgICAgICAgICAgICA8TGlzdEdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlsdGVyIHRoZSBwcm9qZWN0IGxpc3Q6IG9ubHkgcmV0dXJuIGVhY2ggcHJvamVjdCBpZiB0aGUgc2VsZWN0ZWQgdGFnIGlzIG51bGwgb3IgdGhlIHNlbGVjdGVkIHRhZyBtYXRjaGVzIHRoZSBwcm9qZWN0cyB0YWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHMubWFwKChwcm9qZWN0LCBpKSA9PiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkVGFnID09PSBudWxsIHx8IHNlbGVjdGVkVGFnID09PSBwcm9qZWN0LmNhdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdC5wcmo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9MaXN0R3JvdXA+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlU2VhcmNoUGFyYW1zIiwiQ29udGFpbmVyIiwiTGlzdEdyb3VwIiwiSGVybyIsIlByb2plY3QiLCJQcm9qZWN0cyIsInNlbGVjdGVkSWQiLCJzZXRTZWxlY3RlZElkIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsInRhZ3MiLCJzZXRUYWdzIiwic2VsZWN0ZWRUYWciLCJzZXRTZWxlY3RlZFRhZyIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJjYXQiLCJwcmoiLCJwcm9wcyIsImlkIiwidGl0bGUiLCJjYXRlZ29yeSIsImJyIiwiaHJlZiIsImg1IiwidWwiLCJsaSIsInNlbGVjdFRhZyIsInRhZyIsImNsYXNzTmFtZSIsIm1hcCIsImkiLCJhIiwib25DbGljayIsImg0IiwicHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects.tsx\n"));

/***/ })

});