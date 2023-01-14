(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 437:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "global_container__jOeyO",
	"main": "global_main__CoZNq"
};


/***/ }),

/***/ 1404:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_global_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(437);
/* harmony import */ var _styles_global_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_global_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7368);
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2082);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_base__WEBPACK_IMPORTED_MODULE_2__]);
_api_base__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Cart(props) {
    const cartPage = props.seo.page.cartPage;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: cartPage.title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: `${(_styles_global_module_css__WEBPACK_IMPORTED_MODULE_4___default().main)} ${(_styles_global_module_css__WEBPACK_IMPORTED_MODULE_4___default().container)}`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    children: "Cart"
                })
            })
        ]
    });
}
const getServerSideProps = _redux_store__WEBPACK_IMPORTED_MODULE_1__/* .wrapper.getServerSideProps */ .YS.getServerSideProps((store)=>async (ctx)=>{
        try {
            const { userData  } = await (0,_api_base__WEBPACK_IMPORTED_MODULE_2__/* .Api */ .V)(ctx).user.GetMe();
            if (!userData) {
                return {
                    props: {},
                    redirect: {
                        permanent: false,
                        destination: "/"
                    }
                };
            }
        } catch (e) {
            return {
                props: {},
                redirect: {
                    permanent: false,
                    destination: "/"
                }
            };
        }
        return {
            props: {}
        };
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 5648:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 3053:
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [82,310,368], () => (__webpack_exec__(1404)));
module.exports = __webpack_exports__;

})();