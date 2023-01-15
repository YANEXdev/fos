(() => {
var exports = {};
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 437:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "global_container__jOeyO",
	"main": "global_main__CoZNq"
};


/***/ }),

/***/ 8086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(437);
/* harmony import */ var _styles_global_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_module_css__WEBPACK_IMPORTED_MODULE_1__);


function ProductPage(props) {
    const { seo  } = props;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
            className: `${(_styles_global_module_css__WEBPACK_IMPORTED_MODULE_1___default().main)} ${(_styles_global_module_css__WEBPACK_IMPORTED_MODULE_1___default().container)}`,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: seo.h1
            })
        })
    });
}


/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8086));
module.exports = __webpack_exports__;

})();