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

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[2]!./styles/globals.css":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[2]!./styles/globals.css ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".navbar-main {\\r\\n    /*box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);*/\\r\\n    border-bottom: solid 1px #eaeaea;\\r\\n    padding-top: 40px;\\r\\n    padding-bottom: 12px;\\r\\n}\\r\\n\\r\\n.nav-container {\\r\\n    max-width: 1000px;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n    border-top: solid 1px #eaeaea;\\r\\n    text-align: center;\\r\\n    background-color: rgba(56, 56, 56, 0.75);\\r\\n}\\r\\n\\r\\n.main {\\r\\n    margin-top: 0px;\\r\\n    padding-bottom: 200px;\\r\\n    padding-left: 0 !important;\\r\\n    padding-right: 0 !important;\\r\\n    max-width: 750px;\\r\\n}\\r\\n\\r\\n.main-content {\\r\\n    margin-bottom: 100px;\\r\\n}\\r\\n\\r\\n.hero {\\r\\n    height: 25vh;\\r\\n    min-height: 275px;\\r\\n    max-width: 750px;\\r\\n\\r\\n    /*background-image: url(../public/mc.png); \\r\\n    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.35);\\r\\n    background-color: rgb(44, 44, 44); */\\r\\n}\\r\\n\\r\\n.hero-content {\\r\\n    position: relative;\\r\\n    top: 30%;   \\r\\n}\\r\\n\\r\\n.hero p {\\r\\n    font-size: 1.5rem;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.list-group-item {\\r\\n    font-size: 1.1rem;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.expand-button {\\r\\n    height: 100%;\\r\\n    min-height: 100%;\\r\\n    border-left  : 1px solid #eaeaea;\\r\\n    align-items: stretch;\\r\\n}\\r\\n\\r\\n.list-group-item:hover {\\r\\n    /* apply a dark transparent filter */\\r\\n    background-color: rgba(0, 0, 0, 0.1);\\r\\n\\r\\n}\\r\\n\\r\\n.navbar-main button {\\r\\n    padding-bottom: 8px;\\r\\n}\\r\\n\\r\\n.project-button {\\r\\n    border: 0px !important;\\r\\n    padding: 0px !important;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.project-card {\\r\\n    text-align: left;\\r\\n    padding: 0px !important;\\r\\n}\\r\\n\\r\\n.project-details {\\r\\n    padding: 15px;\\r\\n}\\r\\n\\r\\n.project-title {\\r\\n    font-size: 1.5rem;\\r\\n    font-weight: 400;\\r\\n}\\r\\n\\r\\n.project-category, .project-date {\\r\\n    display: inline;\\r\\n    margin-top: 10px;\\r\\n    font-size: 1.1rem;\\r\\n    font-weight: 300;\\r\\n    text-decoration: underline;\\r\\n    margin-left: 15px;\\r\\n    margin-right: 15px;\\r\\n}\\r\\n\\r\\n.project-date {\\r\\n    float: right;\\r\\n    text-align: right;\\r\\n}\\r\\n\\r\\n.project-description {\\r\\n    margin-top: 20px;\\r\\n    font-size: 1.1rem;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.project-card .col-1, .project-card .col-2  {\\r\\n    display: flex;\\r\\n    align-self: center;\\r\\n    justify-content: center;\\r\\n    height: 100%;\\r\\n    padding: 0px;\\r\\n}\\r\\n\\r\\n.project-card button {\\r\\n    padding: 5px;\\r\\n    border: 0px;\\r\\n    background-color: transparent;\\r\\n}\\r\\n\\r\\n.project-card button:hover {\\r\\n    cursor: pointer;\\r\\n    background-color: rgba(255, 255, 255, 0.1);\\r\\n}\\r\\n\\r\\n.project-card button svg {\\r\\n    margin: 0px !important;\\r\\n}\\r\\n\\r\\n.tags {\\r\\n    margin-bottom: 25px;\\r\\n}\\r\\n\\r\\n.tag {\\r\\n    display: inline-block;\\r\\n    text-align: center;\\r\\n    padding: 4px;\\r\\n}\\r\\n\\r\\n.tag:hover {\\r\\n    cursor:pointer;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n    background-color: rgba(126, 126, 126, 0.35);\\r\\n}\\r\\n\\r\\n.subheader {\\r\\n    font-size: 1.5rem;\\r\\n    font-weight: 400;\\r\\n    margin: 20px;\\r\\n}\\r\\n\\r\\ndiv.row {\\r\\n    margin: 0px;\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,8CAA8C;IAC9C,gCAAgC;IAChC,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,wCAAwC;AAC5C;;AAEA;IACI,eAAe;IACf,qBAAqB;IACrB,0BAA0B;IAC1B,2BAA2B;IAC3B,gBAAgB;AACpB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;;IAEhB;;wCAEoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,gCAAgC;IAChC,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;IACpC,oCAAoC;;AAExC;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,uBAAuB;IACvB,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,0BAA0B;IAC1B,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,uBAAuB;IACvB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,0CAA0C;AAC9C;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,2CAA2C;AAC/C;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,WAAW;AACf\",\"sourcesContent\":[\".navbar-main {\\r\\n    /*box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);*/\\r\\n    border-bottom: solid 1px #eaeaea;\\r\\n    padding-top: 40px;\\r\\n    padding-bottom: 12px;\\r\\n}\\r\\n\\r\\n.nav-container {\\r\\n    max-width: 1000px;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n    border-top: solid 1px #eaeaea;\\r\\n    text-align: center;\\r\\n    background-color: rgba(56, 56, 56, 0.75);\\r\\n}\\r\\n\\r\\n.main {\\r\\n    margin-top: 0px;\\r\\n    padding-bottom: 200px;\\r\\n    padding-left: 0 !important;\\r\\n    padding-right: 0 !important;\\r\\n    max-width: 750px;\\r\\n}\\r\\n\\r\\n.main-content {\\r\\n    margin-bottom: 100px;\\r\\n}\\r\\n\\r\\n.hero {\\r\\n    height: 25vh;\\r\\n    min-height: 275px;\\r\\n    max-width: 750px;\\r\\n\\r\\n    /*background-image: url(../public/mc.png); \\r\\n    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.35);\\r\\n    background-color: rgb(44, 44, 44); */\\r\\n}\\r\\n\\r\\n.hero-content {\\r\\n    position: relative;\\r\\n    top: 30%;   \\r\\n}\\r\\n\\r\\n.hero p {\\r\\n    font-size: 1.5rem;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.list-group-item {\\r\\n    font-size: 1.1rem;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.expand-button {\\r\\n    height: 100%;\\r\\n    min-height: 100%;\\r\\n    border-left  : 1px solid #eaeaea;\\r\\n    align-items: stretch;\\r\\n}\\r\\n\\r\\n.list-group-item:hover {\\r\\n    /* apply a dark transparent filter */\\r\\n    background-color: rgba(0, 0, 0, 0.1);\\r\\n\\r\\n}\\r\\n\\r\\n.navbar-main button {\\r\\n    padding-bottom: 8px;\\r\\n}\\r\\n\\r\\n.project-button {\\r\\n    border: 0px !important;\\r\\n    padding: 0px !important;\\r\\n    width: 100%;\\r\\n}\\r\\n\\r\\n.project-card {\\r\\n    text-align: left;\\r\\n    padding: 0px !important;\\r\\n}\\r\\n\\r\\n.project-details {\\r\\n    padding: 15px;\\r\\n}\\r\\n\\r\\n.project-title {\\r\\n    font-size: 1.5rem;\\r\\n    font-weight: 400;\\r\\n}\\r\\n\\r\\n.project-category, .project-date {\\r\\n    display: inline;\\r\\n    margin-top: 10px;\\r\\n    font-size: 1.1rem;\\r\\n    font-weight: 300;\\r\\n    text-decoration: underline;\\r\\n    margin-left: 15px;\\r\\n    margin-right: 15px;\\r\\n}\\r\\n\\r\\n.project-date {\\r\\n    float: right;\\r\\n    text-align: right;\\r\\n}\\r\\n\\r\\n.project-description {\\r\\n    margin-top: 20px;\\r\\n    font-size: 1.1rem;\\r\\n    font-weight: 300;\\r\\n}\\r\\n\\r\\n.project-card .col-1, .project-card .col-2  {\\r\\n    display: flex;\\r\\n    align-self: center;\\r\\n    justify-content: center;\\r\\n    height: 100%;\\r\\n    padding: 0px;\\r\\n}\\r\\n\\r\\n.project-card button {\\r\\n    padding: 5px;\\r\\n    border: 0px;\\r\\n    background-color: transparent;\\r\\n}\\r\\n\\r\\n.project-card button:hover {\\r\\n    cursor: pointer;\\r\\n    background-color: rgba(255, 255, 255, 0.1);\\r\\n}\\r\\n\\r\\n.project-card button svg {\\r\\n    margin: 0px !important;\\r\\n}\\r\\n\\r\\n.tags {\\r\\n    margin-bottom: 25px;\\r\\n}\\r\\n\\r\\n.tag {\\r\\n    display: inline-block;\\r\\n    text-align: center;\\r\\n    padding: 4px;\\r\\n}\\r\\n\\r\\n.tag:hover {\\r\\n    cursor:pointer;\\r\\n}\\r\\n\\r\\n.selected {\\r\\n    background-color: rgba(126, 126, 126, 0.35);\\r\\n}\\r\\n\\r\\n.subheader {\\r\\n    font-size: 1.5rem;\\r\\n    font-weight: 400;\\r\\n    margin: 20px;\\r\\n}\\r\\n\\r\\ndiv.row {\\r\\n    margin: 0px;\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDd0g7QUFDeEgsOEJBQThCLGtIQUEyQjtBQUN6RDtBQUNBLHdEQUF3RCxxREFBcUQsMkNBQTJDLDBCQUEwQiw2QkFBNkIsS0FBSyx3QkFBd0IsMEJBQTBCLEtBQUssaUJBQWlCLHNDQUFzQywyQkFBMkIsaURBQWlELEtBQUssZUFBZSx3QkFBd0IsOEJBQThCLG1DQUFtQyxvQ0FBb0MseUJBQXlCLEtBQUssdUJBQXVCLDZCQUE2QixLQUFLLGVBQWUscUJBQXFCLDBCQUEwQix5QkFBeUIsdURBQXVELDJEQUEyRCwyQ0FBMkMsT0FBTyx1QkFBdUIsMkJBQTJCLG9CQUFvQixLQUFLLGlCQUFpQiwwQkFBMEIseUJBQXlCLEtBQUssMEJBQTBCLDBCQUEwQix5QkFBeUIsS0FBSyx3QkFBd0IscUJBQXFCLHlCQUF5Qix5Q0FBeUMsNkJBQTZCLEtBQUssZ0NBQWdDLDBGQUEwRixTQUFTLDZCQUE2Qiw0QkFBNEIsS0FBSyx5QkFBeUIsK0JBQStCLGdDQUFnQyxvQkFBb0IsS0FBSyx1QkFBdUIseUJBQXlCLGdDQUFnQyxLQUFLLDBCQUEwQixzQkFBc0IsS0FBSyx3QkFBd0IsMEJBQTBCLHlCQUF5QixLQUFLLDBDQUEwQyx3QkFBd0IseUJBQXlCLDBCQUEwQix5QkFBeUIsbUNBQW1DLDBCQUEwQiwyQkFBMkIsS0FBSyx1QkFBdUIscUJBQXFCLDBCQUEwQixLQUFLLDhCQUE4Qix5QkFBeUIsMEJBQTBCLHlC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K0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzJkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5uYXZiYXItbWFpbiB7XFxyXFxuICAgIC8qYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpOyovXFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWFlYWVhO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2VhZWFlYTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NiwgNTYsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xcclxcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gICAgaGVpZ2h0OiAyNXZoO1xcclxcbiAgICBtaW4taGVpZ2h0OiAyNzVweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcXHJcXG5cXHJcXG4gICAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vcHVibGljL21jLnBuZyk7IFxcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxMDAwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0NCwgNDQpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDMwJTsgICBcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1ncm91cC1pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXItbGVmdCAgOiAxcHggc29saWQgI2VhZWFlYTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xcclxcbiAgICAvKiBhcHBseSBhIGRhcmsgdHJhbnNwYXJlbnQgZmlsdGVyICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1tYWluIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kZXRhaWxzIHtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2F0ZWdvcnksIC5wcm9qZWN0LWRhdGUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGF0ZSB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQgLmNvbC0xLCAucHJvamVjdC1jYXJkIC5jb2wtMiAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZCBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZCBidXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZCBidXR0b24gc3ZnIHtcXHJcXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZ3Mge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFnIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZzpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNiwgMTI2LCAxMjYsIDAuMzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnJvdyB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksOENBQThDO0lBQzlDLGdDQUFnQztJQUNoQyxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCOzt3Q0FFb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsb0NBQW9DOztBQUV4Qzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uYXZiYXItbWFpbiB7XFxyXFxuICAgIC8qYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpOyovXFxyXFxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZWFlYWVhO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29udGFpbmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2VhZWFlYTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU2LCA1NiwgNTYsIDAuNzUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xcclxcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1jb250ZW50IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gICAgaGVpZ2h0OiAyNXZoO1xcclxcbiAgICBtaW4taGVpZ2h0OiAyNzVweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcXHJcXG5cXHJcXG4gICAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vcHVibGljL21jLnBuZyk7IFxcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxMDAwcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ0LCA0NCwgNDQpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby1jb250ZW50IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IDMwJTsgICBcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8gcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC1ncm91cC1pdGVtIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXItbGVmdCAgOiAxcHggc29saWQgI2VhZWFlYTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWdyb3VwLWl0ZW06aG92ZXIge1xcclxcbiAgICAvKiBhcHBseSBhIGRhcmsgdHJhbnNwYXJlbnQgZmlsdGVyICovXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1tYWluIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1kZXRhaWxzIHtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2F0ZWdvcnksIC5wcm9qZWN0LWRhdGUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZGF0ZSB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNhcmQgLmNvbC0xLCAucHJvamVjdC1jYXJkIC5jb2wtMiAge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZCBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZCBidXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY2FyZCBidXR0b24gc3ZnIHtcXHJcXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZ3Mge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFnIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhZzpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNiwgMTI2LCAxMjYsIDAuMzUpO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViaGVhZGVyIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuZGl2LnJvdyB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[13].use[2]!./styles/globals.css\n"));

/***/ })

});