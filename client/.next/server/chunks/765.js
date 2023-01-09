exports.id = 765;
exports.ids = [765];
exports.modules = {

/***/ 2785:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "style_navbar__vMxPB",
	"navigation": "style_navigation__OMwYP",
	"navigationBtnText": "style_navigationBtnText__SF8fv",
	"navigationBtnIcon": "style_navigationBtnIcon__cwicM",
	"profileBox": "style_profileBox__oatbD",
	"avatar": "style_avatar__Qj_pK",
	"infoBox": "style_infoBox__OqqNQ",
	"userData": "style_userData__PKg_H",
	"name": "style_name__A15dz",
	"jobTitle": "style_jobTitle__kOerX",
	"button": "style_button__FD6EM",
	"buttonText": "style_buttonText__Qzf7U",
	"buttonIcon": "style_buttonIcon__ECgF_",
	"hr": "style_hr__zJlu4",
	"sectionTitle": "style_sectionTitle__kPkiE",
	"sectionTitleIcon": "style_sectionTitleIcon__CrU7t",
	"section": "style_section__y5gfT",
	"sectionSelector": "style_sectionSelector__tSCXF",
	"sectionSelectorIcon": "style_sectionSelectorIcon__57G9F",
	"sectionSelectorTitle": "style_sectionSelectorTitle__L_uvB"
};


/***/ }),

/***/ 3758:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "style_main__mLueM",
	"messenger": "style_messenger__mfF5i",
	"profileField": "style_profileField__a6VHF",
	"profileFieldAvatar": "style_profileFieldAvatar__Pd7jD",
	"profileFieldData": "style_profileFieldData__DX3SX",
	"profileFieldDataName": "style_profileFieldDataName__tf6dw",
	"profileFieldDataDateOfBirth": "style_profileFieldDataDateOfBirth__EjV_E",
	"profileFieldDataJobTitle": "style_profileFieldDataJobTitle__YwZnr",
	"messengerBox": "style_messengerBox__tBM7V",
	"message": "style_message__76z_o",
	"messageAvatar": "style_messageAvatar__UYHCV",
	"messageData": "style_messageData__Rwr2K",
	"messageAuthor": "style_messageAuthor__bhv30",
	"messageText": "style_messageText__7GVX1",
	"messageAlert": "style_messageAlert__2sgTy"
};


/***/ }),

/***/ 6338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AdminNavbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2785);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7174);
/* harmony import */ var _redux_slices_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4805);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2082);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_base__WEBPACK_IMPORTED_MODULE_4__]);
_api_base__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function AdminNavbar() {
    const user = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(_redux_slices_user__WEBPACK_IMPORTED_MODULE_2__/* .selectUserData */ .tT).data;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbar),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().navigation),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: ()=>(0,_api_base__WEBPACK_IMPORTED_MODULE_4__/* .Api */ .V)().user.Logout(),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().navigationBtnText),
                                    children: "Выйти"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().navigationBtnIcon),
                                    src: "/logout.png",
                                    alt: ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            onClick: ()=>router.push("/"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().navigationBtnText),
                                    children: "На сайт"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().navigationBtnIcon),
                                    src: "/www.png",
                                    alt: ""
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().profileBox),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().avatar),
                            src: `https://foswear.ru/_api/store-manager/avatar/get/${user?.email}`,
                            alt: ""
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().infoBox),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().userData),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().name),
                                            children: [
                                                user?.name,
                                                " ",
                                                user?.surname
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().jobTitle),
                                            children: "Менеджер"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    onClick: ()=>router.push("/admin/profile"),
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().buttonText),
                                            children: "В профиль"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().buttonIcon),
                                            src: `https://foswear.ru/_api/store-manager/avatar/get/${user?.email}`,
                                            alt: ""
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().hr)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionTitle),
                    children: "Продажи"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionTitleIcon),
                    src: "/cart.png",
                    alt: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().hr)
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().section),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/admin/orders",
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelector),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorTitle),
                                    children: "Заказы"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorIcon),
                                    src: "/order.png",
                                    alt: ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/admin/products",
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelector),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorTitle),
                                    children: "Товары"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorIcon),
                                    src: "/product.png",
                                    alt: ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/admin/stats",
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelector),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorTitle),
                                    children: "Статистика"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorIcon),
                                    src: "/statistic.png",
                                    alt: ""
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().hr)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionTitle),
                    children: "Пользователи"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionTitleIcon),
                    src: "/customer.png",
                    alt: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().hr)
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().section),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/admin/users?type=employee",
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelector),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorTitle),
                                    children: "Сотрудники"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorIcon),
                                    src: "/user.png",
                                    alt: ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/admin/users?type=blocked",
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelector),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorTitle),
                                    children: "Заблокированные"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorIcon),
                                    src: "/block.png",
                                    alt: ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/admin/users?type=clients",
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelector),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorTitle),
                                    children: "Клиенты"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorIcon),
                                    src: "/customer.png",
                                    alt: ""
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().hr)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionTitle),
                    children: "Настройка"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionTitleIcon),
                    src: "/setting.png",
                    alt: ""
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().hr)
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().section),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/admin/pages",
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelector),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorTitle),
                                    children: "Страницы"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorIcon),
                                    src: "/page.png",
                                    alt: ""
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/admin/seo",
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelector),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorTitle),
                                    children: "SEO"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().sectionSelectorIcon),
                                    src: "/seo.png",
                                    alt: ""
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useAppSelector),
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ })

};
;