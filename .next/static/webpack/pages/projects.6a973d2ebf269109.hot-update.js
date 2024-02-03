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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: function() { return /* binding */ Project; },\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Container,ListGroup!=!react-bootstrap */ \"__barrel_optimize__?names=Container,ListGroup!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Col,Row!=!react-bootstrap */ \"__barrel_optimize__?names=Col,Row!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=IoIosArrowDown,IoIosArrowForward!=!react-icons/io */ \"__barrel_optimize__?names=IoIosArrowDown,IoIosArrowForward!=!./node_modules/react-icons/io/index.esm.js\");\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/hero */ \"./components/hero.tsx\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Project(param) {\n    let { props, children } = param;\n    _s();\n    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleClick = ()=>{\n        setExpanded(!expanded);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleClick,\n        className: \"project-button\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.ListGroup.Item, {\n            className: \"project-card\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                        xs: 10,\n                        sm: 11,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"project-title\",\n                                children: props.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"project-category\",\n                                children: props.category\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, this),\n                            props.date && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"project-date\",\n                                children: props.date\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 41\n                            }, this),\n                            expanded && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"project-description\",\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 39\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Col_Row_react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {\n                        xs: 2,\n                        sm: 1,\n                        children: expanded ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowDown, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 39\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_IoIosArrowDown_IoIosArrowForward_react_icons_io__WEBPACK_IMPORTED_MODULE_6__.IoIosArrowForward, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 60\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(Project, \"DuL5jiiQQFgbn7gBKAyxwS/H4Ek=\");\n_c = Project;\nfunction Projects() {\n    _s1();\n    // Tags used for filtering the project list\n    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"Web\",\n        \"Data Engineering\",\n        \"Game-dev\"\n    ]);\n    // The currently selected tag. When set to null all tags will be displayed. \n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // List of project components to display: each project has a \"cat\" used for filtering \n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Project, {\n                props: {\n                    title: \"Minecraft server management app\",\n                    category: \"Web\"\n                },\n                children: \"Hosted on Google Compute Engine.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Project, {\n                props: {\n                    title: \"Tic-tac-toe\",\n                    category: \"Web\"\n                },\n                children: \"A tic-tac-toe game built with React.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Data Engineering\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Project, {\n                props: {\n                    title: \"Google Search Console / BigQuery ETL\",\n                    category: \"Data Engineering\"\n                },\n                children: \"ETL pipeline to load Google Search Console data into BigQuery.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Game-dev\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Project, {\n                props: {\n                    title: \"Unity game-dev\",\n                    category: \"Game-dev\"\n                },\n                children: \"A 3D game built with Unity.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Project, {\n                props: {\n                    title: \"Consulting website\",\n                    category: \"Web\"\n                },\n                children: [\n                    \"A consulting website built with WordPress.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 22\n                    }, this),\n                    \"Link: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"https://faditawfig.com\",\n                        children: \"faditawfig.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 33\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Project, {\n                props: {\n                    title: \"this.portfolio\",\n                    category: \"Web\"\n                },\n                children: [\n                    \"Portfolio website to highlight my personal projects and resume. Built with React / Next.js. Hosted using Google Cloud Run.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Features:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Global dark-mode toggle with system-default detection\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"FIlterable projects and resume pages\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 18\n                    }, this),\n                    \"Link: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: \"portfolio.faditawfig.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 69,\n                columnNumber: 28\n            }, this)\n        }\n    ]);\n    // if the tag to be selected is the same as the currently selected tag, set the selected tag to null\n    // otherwise, set the selected tag to the newly selected tag\n    const selectTag = (tag)=>{\n        if (selectedTag === tag) {\n            setSelectedTag(null);\n        } else {\n            setSelectedTag(tag);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                props: {\n                    title: \"Projects\"\n                },\n                children: \"Click on a project for more details.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 93,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                className: \"main\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Container, {\n                        className: \"tags\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: \"Filter by category: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 21\n                            }, this),\n                            // display the list of available tags\n                            // TODO - add a class to highlight the currently selected tag\n                            tags.map((tag, i)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: selectedTag === tag ? \"tag selected\" : \"tag unSelected\",\n                                            onClick: ()=>selectTag(tag),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"project-category\",\n                                                children: tag\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                                lineNumber: 103,\n                                                columnNumber: 143\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 39\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.ListGroup, {\n                        children: // filter the project list: only return each project if the selected tag is null or the selected tag matches the projects tag\n                        projects.map((project, i)=>{\n                            if (selectedTag === null || selectedTag === project.cat) {\n                                return project.prj;\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 96,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s1(Projects, \"Llan9+iAcBGQSokTZ7LhZnzSbdg=\");\n_c1 = Projects;\nvar _c, _c1;\n$RefreshReg$(_c, \"Project\");\n$RefreshReg$(_c1, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJQTt3QkFBQ3NDLE1BQUs7a0NBQUk7Ozs7Ozs7Ozs7OztRQUN6QjtLQUNiO0lBRUQsb0dBQW9HO0lBQ3BHLDREQUE0RDtJQUM1RCxNQUFNSSxZQUFZLENBQUNDO1FBQ2YsSUFBSVosZ0JBQWdCWSxLQUFLO1lBQ3JCWCxlQUFlO1FBQ25CLE9BQU87WUFDSEEsZUFBZVc7UUFDbkI7SUFDSjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ2xDLHdEQUFJQTtnQkFBQ0UsT0FBTztvQkFBQ1ksT0FBTztnQkFBVTswQkFBRzs7Ozs7OzBCQUdsQyw4REFBQ3BCLGlHQUFTQTtnQkFBQ2UsV0FBVTs7a0NBQ2pCLDhEQUFDZixpR0FBU0E7d0JBQUNlLFdBQVU7OzBDQUNqQiw4REFBQ3FCOzBDQUFHOzs7Ozs7NEJBRUEscUNBQXFDOzRCQUNyQyw2REFBNkQ7NEJBQzdEVixLQUFLZSxHQUFHLENBQUMsQ0FBQ0QsS0FBS0U7Z0NBQ1gscUJBQU87O3dDQUFFO3NEQUFDLDhEQUFDQzs0Q0FBRTVCLFdBQVlhLGdCQUFnQlksTUFBTSxpQkFBaUI7NENBQW1CMUIsU0FBUyxJQUFNeUIsVUFBVUM7c0RBQU0sNEVBQUNuQjtnREFBR04sV0FBVTswREFBb0J5Qjs7Ozs7Ozs7Ozs7d0NBQWE7Ozs0QkFDcks7Ozs7Ozs7a0NBV1IsOERBQUN2QyxpR0FBU0E7a0NBR0Y2Qiw2SEFENkg7d0JBQzdIQSxTQUFTVyxHQUFHLENBQUMsQ0FBQ0csU0FBU0Y7NEJBQ25CLElBQUlkLGdCQUFnQixRQUFRQSxnQkFBZ0JnQixRQUFRWixHQUFHLEVBQ3ZEO2dDQUNJLE9BQU9ZLFFBQVFYLEdBQUc7NEJBQ3RCO3dCQUNKOzs7Ozs7Ozs7Ozs7OztBQU14QjtJQTlGd0JSO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3RzLnRzeD82MzUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgTGlzdEdyb3VwLCBMaXN0R3JvdXBJdGVtIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93Rm9yd2FyZCwgSW9Jb3NBcnJvd0Rvd24gfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9oZXJvJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9qZWN0KHsgcHJvcHMsIGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEV4cGFuZGVkKCFleHBhbmRlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyBoYW5kbGVDbGljayB9IGNsYXNzTmFtZT1cInByb2plY3QtYnV0dG9uXCIgPlxyXG4gICAgICAgICAgICA8TGlzdEdyb3VwLkl0ZW0gY2xhc3NOYW1lPVwicHJvamVjdC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEwfSBzbT17MTF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHJvamVjdC10aXRsZVwiPntwcm9wcy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwicHJvamVjdC1jYXRlZ29yeVwiPntwcm9wcy5jYXRlZ29yeX08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHByb3BzLmRhdGUgJiYgPGg0IGNsYXNzTmFtZT1cInByb2plY3QtZGF0ZVwiPntwcm9wcy5kYXRlfTwvaDQ+IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBleHBhbmRlZCAmJiA8cCBjbGFzc05hbWU9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+e2NoaWxkcmVufTwvcD4gfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezJ9IHNtPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIHsgZXhwYW5kZWQgPyA8SW9Jb3NBcnJvd0Rvd24gLz4gOiA8SW9Jb3NBcnJvd0ZvcndhcmQgLz4gIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0xpc3RHcm91cC5JdGVtPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0cygpIHtcclxuICAgIC8vIFRhZ3MgdXNlZCBmb3IgZmlsdGVyaW5nIHRoZSBwcm9qZWN0IGxpc3RcclxuICAgIGNvbnN0IFt0YWdzLCBzZXRUYWdzXSA9IHVzZVN0YXRlKFtcIldlYlwiLCBcIkRhdGEgRW5naW5lZXJpbmdcIiwgXCJHYW1lLWRldlwiXSk7XHJcbiAgICBcclxuICAgIC8vIFRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFnLiBXaGVuIHNldCB0byBudWxsIGFsbCB0YWdzIHdpbGwgYmUgZGlzcGxheWVkLiBcclxuICAgIGNvbnN0IFtzZWxlY3RlZFRhZywgc2V0U2VsZWN0ZWRUYWddID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgLy8gTGlzdCBvZiBwcm9qZWN0IGNvbXBvbmVudHMgdG8gZGlzcGxheTogZWFjaCBwcm9qZWN0IGhhcyBhIFwiY2F0XCIgdXNlZCBmb3IgZmlsdGVyaW5nIFxyXG4gICAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShbXHJcbiAgICAgICAge2NhdCA6IFwiV2ViXCIsIHByaiA6IFxyXG4gICAgICAgICAgICA8UHJvamVjdCBwcm9wcz17e3RpdGxlOiBcIk1pbmVjcmFmdCBzZXJ2ZXIgbWFuYWdlbWVudCBhcHBcIiwgY2F0ZWdvcnk6IFwiV2ViXCJ9fT5cclxuICAgICAgICAgICAgICAgIEhvc3RlZCBvbiBHb29nbGUgQ29tcHV0ZSBFbmdpbmUuXHJcbiAgICAgICAgICAgIDwvUHJvamVjdD5cclxuICAgICAgICB9XHJcbiAgICAgICAgLHtjYXQgOiBcIldlYlwiLCBwcmogOiBcclxuICAgICAgICAgICAgPFByb2plY3QgcHJvcHM9e3t0aXRsZTogXCJUaWMtdGFjLXRvZVwiLCBjYXRlZ29yeTogXCJXZWJcIn19PlxyXG4gICAgICAgICAgICAgICAgQSB0aWMtdGFjLXRvZSBnYW1lIGJ1aWx0IHdpdGggUmVhY3QuXHJcbiAgICAgICAgICAgIDwvUHJvamVjdD59XHJcbiAgICAgICAgLHtjYXQgOiBcIkRhdGEgRW5naW5lZXJpbmdcIiwgcHJqIDogXHJcbiAgICAgICAgICAgIDxQcm9qZWN0IHByb3BzPXt7dGl0bGU6IFwiR29vZ2xlIFNlYXJjaCBDb25zb2xlIC8gQmlnUXVlcnkgRVRMXCIsIGNhdGVnb3J5OiBcIkRhdGEgRW5naW5lZXJpbmdcIn19PlxyXG4gICAgICAgICAgICAgICAgRVRMIHBpcGVsaW5lIHRvIGxvYWQgR29vZ2xlIFNlYXJjaCBDb25zb2xlIGRhdGEgaW50byBCaWdRdWVyeS5cclxuICAgICAgICAgICAgPC9Qcm9qZWN0PlxyXG4gICAgICAgIH1cclxuICAgICAgICAse2NhdCA6IFwiR2FtZS1kZXZcIiwgcHJqIDogXHJcbiAgICAgICAgICAgIDxQcm9qZWN0IHByb3BzPXt7dGl0bGU6IFwiVW5pdHkgZ2FtZS1kZXZcIiwgY2F0ZWdvcnk6IFwiR2FtZS1kZXZcIn19PlxyXG4gICAgICAgICAgICAgICAgQSAzRCBnYW1lIGJ1aWx0IHdpdGggVW5pdHkuXHJcbiAgICAgICAgICAgIDwvUHJvamVjdD5cclxuICAgICAgICB9XHJcbiAgICAgICAgLHtjYXQgOiBcIldlYlwiLCBwcmogOiBcclxuICAgICAgICAgICAgPFByb2plY3QgcHJvcHM9e3t0aXRsZTogXCJDb25zdWx0aW5nIHdlYnNpdGVcIiwgY2F0ZWdvcnk6IFwiV2ViXCJ9fT5cclxuICAgICAgICAgICAgICAgIEEgY29uc3VsdGluZyB3ZWJzaXRlIGJ1aWx0IHdpdGggV29yZFByZXNzLiBcclxuICAgICAgICAgICAgICAgIDxici8+PGJyLz5MaW5rOiA8TGluayBocmVmPVwiaHR0cHM6Ly9mYWRpdGF3ZmlnLmNvbVwiPmZhZGl0YXdmaWcuY29tPC9MaW5rPlxyXG4gICAgICAgICAgICA8L1Byb2plY3Q+XHJcbiAgICAgICAgfVxyXG4gICAgICAgICx7Y2F0OiBcIldlYlwiLCBwcmo6IDxQcm9qZWN0IHByb3BzPXt7dGl0bGU6IFwidGhpcy5wb3J0Zm9saW9cIiwgY2F0ZWdvcnk6IFwiV2ViXCJ9fT5cclxuICAgICAgICAgICAgUG9ydGZvbGlvIHdlYnNpdGUgdG8gaGlnaGxpZ2h0IG15IHBlcnNvbmFsIHByb2plY3RzIGFuZCByZXN1bWUuIEJ1aWx0IHdpdGggUmVhY3QgLyBOZXh0LmpzLiBIb3N0ZWQgdXNpbmcgR29vZ2xlIENsb3VkIFJ1bi4gXHJcblxyXG4gICAgICAgICAgICA8aDU+RmVhdHVyZXM6PC9oNT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPkdsb2JhbCBkYXJrLW1vZGUgdG9nZ2xlIHdpdGggc3lzdGVtLWRlZmF1bHQgZGV0ZWN0aW9uPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5GSWx0ZXJhYmxlIHByb2plY3RzIGFuZCByZXN1bWUgcGFnZXM8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8YnIvPjxici8+TGluazogPExpbmsgaHJlZj1cIi9cIj5wb3J0Zm9saW8uZmFkaXRhd2ZpZy5jb208L0xpbms+XHJcbiAgICAgICAgPC9Qcm9qZWN0Pn1cclxuICAgIF0pO1xyXG5cclxuICAgIC8vIGlmIHRoZSB0YWcgdG8gYmUgc2VsZWN0ZWQgaXMgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0YWcsIHNldCB0aGUgc2VsZWN0ZWQgdGFnIHRvIG51bGxcclxuICAgIC8vIG90aGVyd2lzZSwgc2V0IHRoZSBzZWxlY3RlZCB0YWcgdG8gdGhlIG5ld2x5IHNlbGVjdGVkIHRhZ1xyXG4gICAgY29uc3Qgc2VsZWN0VGFnID0gKHRhZykgPT4ge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFRhZyA9PT0gdGFnKSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVGFnKG51bGwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVGFnKHRhZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZXJvIHByb3BzPXt7dGl0bGU6IFwiUHJvamVjdHNcIn19PlxyXG4gICAgICAgICAgICAgICAgQ2xpY2sgb24gYSBwcm9qZWN0IGZvciBtb3JlIGRldGFpbHMuXHJcbiAgICAgICAgICAgIDwvSGVybz5cclxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cInRhZ3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDU+RmlsdGVyIGJ5IGNhdGVnb3J5OiA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheSB0aGUgbGlzdCBvZiBhdmFpbGFibGUgdGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPIC0gYWRkIGEgY2xhc3MgdG8gaGlnaGxpZ2h0IHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgdGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3MubWFwKCh0YWcsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8PiA8YSBjbGFzc05hbWU9eyBzZWxlY3RlZFRhZyA9PT0gdGFnID8gJ3RhZyBzZWxlY3RlZCcgOiAndGFnIHVuU2VsZWN0ZWQnIH0gb25DbGljaz17KCkgPT4gc2VsZWN0VGFnKHRhZyl9PjxoNCBjbGFzc05hbWU9XCJwcm9qZWN0LWNhdGVnb3J5XCI+e3RhZ308L2g0PjwvYT4gPC8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBzaG93IHNlbGVjdGVkIHRhZyBmb3IgdGVzdGluZyBcclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5TZWxlY3RlZCB0YWc6IDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJwcm9qZWN0LWNhdGVnb3J5XCI+e3NlbGVjdGVkVGFnfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICovfVxyXG5cclxuICAgICAgICAgICAgICAgIDxMaXN0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaWx0ZXIgdGhlIHByb2plY3QgbGlzdDogb25seSByZXR1cm4gZWFjaCBwcm9qZWN0IGlmIHRoZSBzZWxlY3RlZCB0YWcgaXMgbnVsbCBvciB0aGUgc2VsZWN0ZWQgdGFnIG1hdGNoZXMgdGhlIHByb2plY3RzIHRhZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0cy5tYXAoKHByb2plY3QsIGkpID0+IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRUYWcgPT09IG51bGwgfHwgc2VsZWN0ZWRUYWcgPT09IHByb2plY3QuY2F0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0LnByajtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RHcm91cD5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJMaXN0R3JvdXAiLCJSb3ciLCJDb2wiLCJJb0lvc0Fycm93Rm9yd2FyZCIsIklvSW9zQXJyb3dEb3duIiwiSGVybyIsIlByb2plY3QiLCJwcm9wcyIsImNoaWxkcmVuIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsImhhbmRsZUNsaWNrIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsIkl0ZW0iLCJ4cyIsInNtIiwiaDMiLCJ0aXRsZSIsImg0IiwiY2F0ZWdvcnkiLCJkYXRlIiwicCIsIlByb2plY3RzIiwidGFncyIsInNldFRhZ3MiLCJzZWxlY3RlZFRhZyIsInNldFNlbGVjdGVkVGFnIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsImNhdCIsInByaiIsImJyIiwiaHJlZiIsImg1IiwidWwiLCJsaSIsInNlbGVjdFRhZyIsInRhZyIsIm1hcCIsImkiLCJhIiwicHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects.tsx\n"));

/***/ })

});