"use strict";
(() => {
var exports = {};
exports.id = 172;
exports.ids = [172];
exports.modules = {

/***/ 4758:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Profile),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UI_Navbars_AdminNavbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6338);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7368);
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2082);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7174);
/* harmony import */ var _redux_slices_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4805);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3758);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_UI_Navbars_AdminNavbar__WEBPACK_IMPORTED_MODULE_1__, _api_base__WEBPACK_IMPORTED_MODULE_3__]);
([_components_UI_Navbars_AdminNavbar__WEBPACK_IMPORTED_MODULE_1__, _api_base__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function Profile() {
    const user = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)(_redux_slices_user__WEBPACK_IMPORTED_MODULE_5__/* .selectUserData */ .tT).data;
    const DATE = new Date();
    const today = `${DATE.getDate()}.${DATE.getMonth() + 1}.${DATE.getFullYear()}`;
    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([
        {
            author: "Колупаева Анастасия",
            text: "Привет, как дела?)",
            status: "new",
            date: "18.12.2022"
        },
        {
            author: "Колупаева Анастасия",
            text: "Привет, как дела?)",
            status: "new",
            date: "18.12.2022"
        },
        {
            author: "Колупаева Анастасия",
            text: "Привет, как дела?)",
            status: "new",
            date: "18.12.2022"
        },
        {
            author: "Колупаева Анастасия",
            text: "Привет, как дела?)",
            status: "new",
            date: "18.12.2022"
        },
        {
            author: "Колупаева Анастасия",
            text: "Привет, как дела?)",
            status: "new",
            date: "18.12.2022"
        },
        {
            author: "Колупаева Анастасия",
            text: "Привет, как дела?)",
            status: "new",
            date: "18.12.2022"
        },
        {
            author: "Колупаева Анастасия",
            text: "Привет, как дела?)",
            status: "new",
            date: "18.12.2022"
        },
        {
            author: "Колупаева Анастасия",
            text: "Привет, как дела?)",
            status: "new",
            date: "18.12.2022"
        },
        {
            author: "Колупаева Анастасия",
            text: "Привет, как дела?)",
            status: "new",
            date: "18.12.2022"
        },
        {
            author: "Колупаева Анастасия",
            text: "Привет, как дела?)",
            status: "new",
            date: "18.12.2022"
        },
        {
            author: "Колупаева Анастасия",
            text: "Привет, как дела?)",
            status: "new",
            date: "18.12.2022"
        }
    ]);
    function view(index) {
        setMessages(messages.map((obj, i)=>{
            if (index == i) {
                obj.status = "view";
            }
            return obj;
        }));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                display: "flex"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Navbars_AdminNavbar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().messenger),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().profileField),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().profileFieldAvatar),
                                        src: `https://foswear.ru/_api/store-manager/avatar/get/${user?.email}`,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().profileFieldData),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().profileFieldDataName),
                                                children: [
                                                    user.surname,
                                                    " ",
                                                    user.name
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().profileFieldDataDateOfBirth),
                                                children: user.dateOfBirth || "26.07.2005"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().profileFieldDataJobTitle),
                                                children: user.jobTitle || "Ген-директор"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().messengerBox),
                                children: messages?.map((message, index)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        onClick: ()=>view(index),
                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().message),
                                        children: [
                                            message.status == "new" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().messageAlert)
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().messageAvatar),
                                                src: `https://foswear.ru/_api/store-manager/avatar/get/${user?.email}`,
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().messageData),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().messageAuthor),
                                                        children: message.author
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().messageText),
                                                        children: message.text
                                                    })
                                                ]
                                            })
                                        ]
                                    }, index);
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
const getServerSideProps = _redux_store__WEBPACK_IMPORTED_MODULE_2__/* .wrapper.getServerSideProps */ .YS.getServerSideProps((store)=>async (ctx)=>{
        try {
            const { userData  } = await (0,_api_base__WEBPACK_IMPORTED_MODULE_3__/* .Api */ .V)(ctx).user.GetMe();
            if (userData.email != "i.vanya.kolupaev@icloud.com") {
                return {
                    props: {},
                    redirect: {
                        permanent: false,
                        destination: "/admin/access-denied"
                    }
                };
            }
        } catch (e) {
            return {
                props: {},
                redirect: {
                    permanent: false,
                    destination: "/admin/access-denied"
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

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,82,310,368,765], () => (__webpack_exec__(4758)));
module.exports = __webpack_exports__;

})();