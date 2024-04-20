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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Container,ListGroup!=!react-bootstrap */ \"__barrel_optimize__?names=Container,ListGroup!=!./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/hero */ \"./components/hero.tsx\");\n/* harmony import */ var _components_project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/project */ \"./components/project.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Projects() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const [selectedId, setSelectedId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(searchParams.get(\"id\"));\n    console.log(selectedId);\n    // Tags used for filtering the project list \n    const [tags, setTags] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        \"Web\",\n        \"Data Engineering\",\n        \"Game-dev\"\n    ]);\n    // The currently selected tag. When set to null all tags will be displayed. \n    const [selectedTag, setSelectedTag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // List of project components to display: each project has a \"cat\" used for filtering \n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    id: \"mcserver\",\n                    title: \"Minecraft server management app\",\n                    category: \"Web\",\n                    selectedId: selectedId\n                },\n                children: \"Hosted on Google Compute Engine.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"Tic-tac-toe\",\n                    category: \"Web\"\n                },\n                children: \"A tic-tac-toe game built with React.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Data Engineering\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"Google Search Console / BigQuery ETL\",\n                    category: \"Data Engineering\"\n                },\n                children: \"ETL pipeline to load Google Search Console data into BigQuery.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Game-dev\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"Unity game-dev\",\n                    category: \"Game-dev\"\n                },\n                children: \"A 3D game built with Unity.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"Consulting website\",\n                    category: \"Web\"\n                },\n                children: [\n                    \"A consulting website built with WordPress.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 22\n                    }, this),\n                    \"Link: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"https://faditawfig.com\",\n                        children: \"faditawfig.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 33\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this)\n        },\n        {\n            cat: \"Web\",\n            prj: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_project__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                props: {\n                    title: \"this.portfolio\",\n                    category: \"Web\"\n                },\n                children: [\n                    \"Portfolio website to highlight my personal projects and resume. Built with React / Next.js. Hosted using Google Cloud Run.\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Features:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"Global dark-mode toggle with system-default detection\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: \"FIlterable projects and resume pages\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 18\n                    }, this),\n                    \"Link: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        children: \"portfolio.faditawfig.com\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 29\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 49,\n                columnNumber: 28\n            }, this)\n        }\n    ]);\n    // if the tag to be selected is the same as the currently selected tag, set the selected tag to null\n    // otherwise, set the selected tag to the newly selected tag\n    const selectTag = (tag)=>{\n        if (selectedTag === tag) {\n            setSelectedTag(null);\n        } else {\n            setSelectedTag(tag);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_hero__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                props: {\n                    title: \"Projects\"\n                },\n                children: \"Click on a project for more details.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                className: \"main\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.Container, {\n                        className: \"tags\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: \"Filter by category: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, this),\n                            // display the list of available tags\n                            // TODO - add a class to highlight the currently selected tag\n                            tags.map((tag, i)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: selectedTag === tag ? \"tag selected\" : \"tag unSelected\",\n                                            onClick: ()=>selectTag(tag),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                                className: \"project-category\",\n                                                children: tag\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 143\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 39\n                                        }, this),\n                                        \" \"\n                                    ]\n                                }, void 0, true);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Container_ListGroup_react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.ListGroup, {\n                        children: // filter the project list: only return each project if the selected tag is null or the selected tag matches the projects tag\n                        projects.map((project, i)=>{\n                            if (selectedTag === null || selectedTag === project.cat) {\n                                return project.prj;\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                        lineNumber: 95,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ftawf\\\\Documents\\\\portfolio\\\\pages\\\\projects.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Projects, \"UT0U3UxrYuoOBflDN+y8BNgW2BE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVVDO3NEQUFNLDRFQUFDTTtnREFBR0wsV0FBVTswREFBb0JEOzs7Ozs7Ozs7Ozt3Q0FBYTs7OzRCQUNySzs7Ozs7OztrQ0FXUiw4REFBQzVCLGlHQUFTQTtrQ0FHRmMsNkhBRDZIO3dCQUM3SEEsU0FBU2dCLEdBQUcsQ0FBQyxDQUFDSyxTQUFTSjs0QkFDbkIsSUFBSW5CLGdCQUFnQixRQUFRQSxnQkFBZ0J1QixRQUFRbkIsR0FBRyxFQUN2RDtnQ0FDSSxPQUFPbUIsUUFBUWxCLEdBQUc7NEJBQ3RCO3dCQUNKOzs7Ozs7Ozs7Ozs7OztBQU14QjtHQXBHd0JkOztRQUNDTCw0REFBZUE7OztLQURoQksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMudHN4PzYzNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBMaXN0R3JvdXAsIExpc3RHcm91cEl0ZW0gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL2hlcm8nO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoKSB7XHJcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShzZWFyY2hQYXJhbXMuZ2V0KCdpZCcpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZElkKTtcclxuXHJcbiAgICAvLyBUYWdzIHVzZWQgZm9yIGZpbHRlcmluZyB0aGUgcHJvamVjdCBsaXN0IFxyXG4gICAgY29uc3QgW3RhZ3MsIHNldFRhZ3NdID0gdXNlU3RhdGUoW1wiV2ViXCIsIFwiRGF0YSBFbmdpbmVlcmluZ1wiLCBcIkdhbWUtZGV2XCJdKTtcclxuICAgIFxyXG4gICAgLy8gVGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0YWcuIFdoZW4gc2V0IHRvIG51bGwgYWxsIHRhZ3Mgd2lsbCBiZSBkaXNwbGF5ZWQuIFxyXG4gICAgY29uc3QgW3NlbGVjdGVkVGFnLCBzZXRTZWxlY3RlZFRhZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICAvLyBMaXN0IG9mIHByb2plY3QgY29tcG9uZW50cyB0byBkaXNwbGF5OiBlYWNoIHByb2plY3QgaGFzIGEgXCJjYXRcIiB1c2VkIGZvciBmaWx0ZXJpbmcgXHJcbiAgICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKFtcclxuICAgICAgICB7Y2F0IDogXCJXZWJcIiwgcHJqIDogXHJcbiAgICAgICAgICAgIDxQcm9qZWN0IHByb3BzPXt7aWQ6IFwibWNzZXJ2ZXJcIiwgdGl0bGU6IFwiTWluZWNyYWZ0IHNlcnZlciBtYW5hZ2VtZW50IGFwcFwiLCBjYXRlZ29yeTogXCJXZWJcIiwgc2VsZWN0ZWRJZDogc2VsZWN0ZWRJZH19PlxyXG4gICAgICAgICAgICAgICAgSG9zdGVkIG9uIEdvb2dsZSBDb21wdXRlIEVuZ2luZS5cclxuICAgICAgICAgICAgPC9Qcm9qZWN0PlxyXG4gICAgICAgIH1cclxuICAgICAgICAse2NhdCA6IFwiV2ViXCIsIHByaiA6IFxyXG4gICAgICAgICAgICA8UHJvamVjdCBwcm9wcz17e3RpdGxlOiBcIlRpYy10YWMtdG9lXCIsIGNhdGVnb3J5OiBcIldlYlwifX0+XHJcbiAgICAgICAgICAgICAgICBBIHRpYy10YWMtdG9lIGdhbWUgYnVpbHQgd2l0aCBSZWFjdC5cclxuICAgICAgICAgICAgPC9Qcm9qZWN0Pn1cclxuICAgICAgICAse2NhdCA6IFwiRGF0YSBFbmdpbmVlcmluZ1wiLCBwcmogOiBcclxuICAgICAgICAgICAgPFByb2plY3QgcHJvcHM9e3t0aXRsZTogXCJHb29nbGUgU2VhcmNoIENvbnNvbGUgLyBCaWdRdWVyeSBFVExcIiwgY2F0ZWdvcnk6IFwiRGF0YSBFbmdpbmVlcmluZ1wifX0+XHJcbiAgICAgICAgICAgICAgICBFVEwgcGlwZWxpbmUgdG8gbG9hZCBHb29nbGUgU2VhcmNoIENvbnNvbGUgZGF0YSBpbnRvIEJpZ1F1ZXJ5LlxyXG4gICAgICAgICAgICA8L1Byb2plY3Q+XHJcbiAgICAgICAgfVxyXG4gICAgICAgICx7Y2F0IDogXCJHYW1lLWRldlwiLCBwcmogOiBcclxuICAgICAgICAgICAgPFByb2plY3QgcHJvcHM9e3t0aXRsZTogXCJVbml0eSBnYW1lLWRldlwiLCBjYXRlZ29yeTogXCJHYW1lLWRldlwifX0+XHJcbiAgICAgICAgICAgICAgICBBIDNEIGdhbWUgYnVpbHQgd2l0aCBVbml0eS5cclxuICAgICAgICAgICAgPC9Qcm9qZWN0PlxyXG4gICAgICAgIH1cclxuICAgICAgICAse2NhdCA6IFwiV2ViXCIsIHByaiA6IFxyXG4gICAgICAgICAgICA8UHJvamVjdCBwcm9wcz17e3RpdGxlOiBcIkNvbnN1bHRpbmcgd2Vic2l0ZVwiLCBjYXRlZ29yeTogXCJXZWJcIn19PlxyXG4gICAgICAgICAgICAgICAgQSBjb25zdWx0aW5nIHdlYnNpdGUgYnVpbHQgd2l0aCBXb3JkUHJlc3MuIFxyXG4gICAgICAgICAgICAgICAgPGJyLz48YnIvPkxpbms6IDxMaW5rIGhyZWY9XCJodHRwczovL2ZhZGl0YXdmaWcuY29tXCI+ZmFkaXRhd2ZpZy5jb208L0xpbms+XHJcbiAgICAgICAgICAgIDwvUHJvamVjdD5cclxuICAgICAgICB9XHJcbiAgICAgICAgLHtjYXQ6IFwiV2ViXCIsIHByajogPFByb2plY3QgcHJvcHM9e3t0aXRsZTogXCJ0aGlzLnBvcnRmb2xpb1wiLCBjYXRlZ29yeTogXCJXZWJcIn19PlxyXG4gICAgICAgICAgICBQb3J0Zm9saW8gd2Vic2l0ZSB0byBoaWdobGlnaHQgbXkgcGVyc29uYWwgcHJvamVjdHMgYW5kIHJlc3VtZS4gQnVpbHQgd2l0aCBSZWFjdCAvIE5leHQuanMuIEhvc3RlZCB1c2luZyBHb29nbGUgQ2xvdWQgUnVuLiBcclxuXHJcbiAgICAgICAgICAgIDxoNT5GZWF0dXJlczo8L2g1PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+R2xvYmFsIGRhcmstbW9kZSB0b2dnbGUgd2l0aCBzeXN0ZW0tZGVmYXVsdCBkZXRlY3Rpb248L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkZJbHRlcmFibGUgcHJvamVjdHMgYW5kIHJlc3VtZSBwYWdlczwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxici8+PGJyLz5MaW5rOiA8TGluayBocmVmPVwiL1wiPnBvcnRmb2xpby5mYWRpdGF3ZmlnLmNvbTwvTGluaz5cclxuICAgICAgICA8L1Byb2plY3Q+fVxyXG4gICAgXSk7XHJcblxyXG4gICAgLy8gaWYgdGhlIHRhZyB0byBiZSBzZWxlY3RlZCBpcyB0aGUgc2FtZSBhcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHRhZywgc2V0IHRoZSBzZWxlY3RlZCB0YWcgdG8gbnVsbFxyXG4gICAgLy8gb3RoZXJ3aXNlLCBzZXQgdGhlIHNlbGVjdGVkIHRhZyB0byB0aGUgbmV3bHkgc2VsZWN0ZWQgdGFnXHJcbiAgICBjb25zdCBzZWxlY3RUYWcgPSAodGFnKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkVGFnID09PSB0YWcpIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYWcobnVsbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYWcodGFnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlcm8gcHJvcHM9e3t0aXRsZTogXCJQcm9qZWN0c1wifX0+XHJcbiAgICAgICAgICAgICAgICBDbGljayBvbiBhIHByb2plY3QgZm9yIG1vcmUgZGV0YWlscy5cclxuICAgICAgICAgICAgPC9IZXJvPlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwidGFnc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNT5GaWx0ZXIgYnkgY2F0ZWdvcnk6IDwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IHRoZSBsaXN0IG9mIGF2YWlsYWJsZSB0YWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gLSBhZGQgYSBjbGFzcyB0byBoaWdobGlnaHQgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCB0YWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFncy5tYXAoKHRhZywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDw+IDxhIGNsYXNzTmFtZT17IHNlbGVjdGVkVGFnID09PSB0YWcgPyAndGFnIHNlbGVjdGVkJyA6ICd0YWcgdW5TZWxlY3RlZCcgfSBvbkNsaWNrPXsoKSA9PiBzZWxlY3RUYWcodGFnKX0+PGg0IGNsYXNzTmFtZT1cInByb2plY3QtY2F0ZWdvcnlcIj57dGFnfTwvaDQ+PC9hPiA8Lz47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIHNob3cgc2VsZWN0ZWQgdGFnIGZvciB0ZXN0aW5nIFxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJ0YWdzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PlNlbGVjdGVkIHRhZzogPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInByb2plY3QtY2F0ZWdvcnlcIj57c2VsZWN0ZWRUYWd9PC9oND5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgKi99XHJcblxyXG4gICAgICAgICAgICAgICAgPExpc3RHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbHRlciB0aGUgcHJvamVjdCBsaXN0OiBvbmx5IHJldHVybiBlYWNoIHByb2plY3QgaWYgdGhlIHNlbGVjdGVkIHRhZyBpcyBudWxsIG9yIHRoZSBzZWxlY3RlZCB0YWcgbWF0Y2hlcyB0aGUgcHJvamVjdHMgdGFnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzLm1hcCgocHJvamVjdCwgaSkgPT4geyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFRhZyA9PT0gbnVsbCB8fCBzZWxlY3RlZFRhZyA9PT0gcHJvamVjdC5jYXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2plY3QucHJqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvTGlzdEdyb3VwPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVNlYXJjaFBhcmFtcyIsIkNvbnRhaW5lciIsIkxpc3RHcm91cCIsIkhlcm8iLCJQcm9qZWN0IiwiUHJvamVjdHMiLCJzZWFyY2hQYXJhbXMiLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJ0YWdzIiwic2V0VGFncyIsInNlbGVjdGVkVGFnIiwic2V0U2VsZWN0ZWRUYWciLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwiY2F0IiwicHJqIiwicHJvcHMiLCJpZCIsInRpdGxlIiwiY2F0ZWdvcnkiLCJiciIsImhyZWYiLCJoNSIsInVsIiwibGkiLCJzZWxlY3RUYWciLCJ0YWciLCJjbGFzc05hbWUiLCJtYXAiLCJpIiwiYSIsIm9uQ2xpY2siLCJoNCIsInByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects.tsx\n"));

/***/ })

});