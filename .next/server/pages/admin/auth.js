"use strict";
(() => {
var exports = {};
exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 9508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2082);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7174);
/* harmony import */ var _redux_slices_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2310);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_base__WEBPACK_IMPORTED_MODULE_1__]);
_api_base__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Auth() {
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppDispatch */ .T)();
    dispatch((0,_redux_slices_ui__WEBPACK_IMPORTED_MODULE_3__/* .setAuthFormShow */ .TO)(true));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
}
const getServerSideProps = async (ctx)=>{
    try {
        const { userData  } = await (0,_api_base__WEBPACK_IMPORTED_MODULE_1__/* .Api */ .V)(ctx).user.GetMe();
        if (userData.email != "i.vanya.kolupaev@icloud.com") {
            ctx.res.writeHead(302, {
                Location: "/admin/access-denied"
            });
            ctx.res.end();
        }
    } catch (e) {
        ctx.res.writeHead(302, {
            Location: "/admin/access-denied"
        });
        ctx.res.end();
    }
    return {
        props: {}
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [82,310], () => (__webpack_exec__(9508)));
module.exports = __webpack_exports__;

})();