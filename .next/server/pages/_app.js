(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8499:
/***/ ((module) => {

// Exports
module.exports = {
	"subheader": "styles_subheader__jAYYP",
	"bl": "styles_bl__BkySS"
};


/***/ }),

/***/ 8157:
/***/ ((module) => {

// Exports
module.exports = {
	"alertBox": "error_alertBox__SL8Sk"
};


/***/ }),

/***/ 7578:
/***/ ((module) => {

// Exports
module.exports = {
	"alertBox": "success_alertBox__bOAHY"
};


/***/ }),

/***/ 9944:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "style_box__80gqD",
	"form": "style_form__1BQM8",
	"input": "style_input__4v1Ey",
	"sendBtn": "style_sendBtn__K3E35",
	"closeBtn": "style_closeBtn__pTJKl"
};


/***/ }),

/***/ 7580:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__b9T6q",
	"logo_container": "footer_logo_container__CdT6k",
	"logo": "footer_logo__EQPQY",
	"info_links": "footer_info_links__x2uDS",
	"info_link": "footer_info_link__gyltx",
	"social_links": "footer_social_links__PY4jZ"
};


/***/ }),

/***/ 1151:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__FAT0Y",
	"burger_container": "header_burger_container__coie7",
	"burger": "header_burger__M4txt",
	"burger_active": "header_burger_active__UM_1m",
	"logo_container": "header_logo_container__cVkGr",
	"logo": "header_logo__It3Dv",
	"links": "header_links__v8ya9",
	"link": "header_link__vh7gs",
	"tools": "header_tools__GB1IM",
	"tool": "header_tool__1OWcM",
	"icon": "header_icon__Ck_CT",
	"domain": "header_domain__5P5j5",
	"burger_menu": "header_burger_menu__8_u4r",
	"burger_menu_link": "header_burger_menu_link__letve",
	"burger_menu_active": "header_burger_menu_active__e1w6W"
};


/***/ }),

/***/ 437:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "global_container__jOeyO",
	"main": "global_main__CoZNq"
};


/***/ }),

/***/ 7554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Subheader_component)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7174);
/* harmony import */ var _redux_slices_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4805);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8499);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2082);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_base__WEBPACK_IMPORTED_MODULE_3__]);
_api_base__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Subheader_component() {
    const { data , isAuth  } = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useAppSelector */ .C)(_redux_slices_user__WEBPACK_IMPORTED_MODULE_2__/* .selectUserData */ .tT);
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const startWith = pathname.startsWith("/admin");
    return isAuth && !startWith && data?.email == "i.vanya.kolupaev@icloud.com" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().subheader),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().bl),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        href: "/admin",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "В админ панель: ",
                                data?.surname,
                                " ",
                                data?.name
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().bl),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        onClick: ()=>(0,_api_base__WEBPACK_IMPORTED_MODULE_3__/* .Api */ .V)().user.Logout(),
                        children: "Выйти"
                    })
                })
            ]
        })
    }) : null;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MainAlert)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function MainAlert({ show , type , message , title  }) {
    const getStyles = ()=>{
        switch(type){
            case "error":
                return __webpack_require__(8157);
            case "success":
                return __webpack_require__(7578);
            default:
                return __webpack_require__(8157);
        }
    };
    const styles = getStyles();
    return show ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: styles.alertBox,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: message
            })
        })
    }) : null;
}


/***/ }),

/***/ 5740:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuthorizationForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9944);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Alerts_MainAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5196);
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2082);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7174);
/* harmony import */ var _redux_slices_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4805);
/* harmony import */ var _redux_slices_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2310);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_base__WEBPACK_IMPORTED_MODULE_3__]);
_api_base__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









function AuthorizationForm() {
    const state = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppSelector */ .C)(_redux_slices_ui__WEBPACK_IMPORTED_MODULE_6__/* .selectUIData */ .kG);
    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const fullpath = router.pathname.split("/");
    const path = fullpath[fullpath.length - 1];
    const login = async ()=>{
        dispatch((0,_redux_slices_ui__WEBPACK_IMPORTED_MODULE_6__/* .setAuthFormRedirect */ .lc)(""));
        try {
            setLoading(true);
            const { userData  } = await (0,_api_base__WEBPACK_IMPORTED_MODULE_3__/* .Api */ .V)().user.Login({
                email: email,
                password: password
            });
            dispatch((0,_redux_slices_user__WEBPACK_IMPORTED_MODULE_5__/* .setUserData */ .M)(userData));
            dispatch((0,_redux_slices_ui__WEBPACK_IMPORTED_MODULE_6__/* .setAuthFormType */ .N)("success"));
            dispatch((0,_redux_slices_ui__WEBPACK_IMPORTED_MODULE_6__/* .setAuthFormMessage */ .O1)("Успешная авторизация"));
            dispatch((0,_redux_slices_ui__WEBPACK_IMPORTED_MODULE_6__/* .setAuthFormShow */ .TO)(false));
            dispatch((0,_redux_slices_ui__WEBPACK_IMPORTED_MODULE_6__/* .setAuthFormRedirect */ .lc)(""));
            setLoading(false);
            if (state.redirect != "") {
                dispatch((0,_redux_slices_ui__WEBPACK_IMPORTED_MODULE_6__/* .setAuthFormRedirect */ .lc)(""));
                window.location.replace(state.redirect);
            }
            window.location.reload();
        } catch (err) {
            dispatch((0,_redux_slices_ui__WEBPACK_IMPORTED_MODULE_6__/* .setAuthFormMessage */ .O1)(err.message));
            dispatch((0,_redux_slices_ui__WEBPACK_IMPORTED_MODULE_6__/* .setAuthFormType */ .N)("error"));
        }
        setLoading(false);
    };
    if (state.show) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().box),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().form),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().closeBtn),
                            onClick: ()=>dispatch((0,_redux_slices_ui__WEBPACK_IMPORTED_MODULE_6__/* .setAuthFormShow */ .TO)(false)),
                            children: "Закрыть"
                        }),
                        state.message && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Alerts_MainAlert__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            type: state.error,
                            show: true,
                            message: state.message
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().input),
                            type: "email",
                            placeholder: "Email",
                            value: email,
                            onChange: (e)=>setEmail(e.target.value)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().input),
                            type: "password",
                            placeholder: "Пароль",
                            value: password,
                            onChange: (e)=>setPassword(e.target.value)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            disabled: isLoading,
                            className: (_style_module_css__WEBPACK_IMPORTED_MODULE_8___default().sendBtn),
                            onClick: ()=>login(),
                            children: "Войти"
                        })
                    ]
                })
            })
        });
    } else {
        return null;
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer_component)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7580);
/* harmony import */ var _footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_global_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(437);
/* harmony import */ var _styles_global_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_module_css__WEBPACK_IMPORTED_MODULE_3__);




function Footer_component() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
            className: `${(_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().footer)} ${(_styles_global_module_css__WEBPACK_IMPORTED_MODULE_3___default().container)}`,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().info_links),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().info_link),
                            href: "/info/about",
                            children: "О компании"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().info_link),
                            href: "/info/agreement",
                            children: "Соглашение"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().info_link),
                            href: "/info/paymnet",
                            children: "Оплата"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().info_link),
                            href: "/info/delivery>Доставка",
                            children: "Доставка"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().logo_container),
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().logo),
                        src: "/logo/logo_text.png",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().social_links),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().info_link),
                            href: "https://www.youtube.com/@fos3203",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/social_links/youtube.png",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().info_link),
                            href: "https://instagram.com/fos_ru",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/social_links/instagram.png",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().info_link),
                            href: "https://t.me/+zqcxV21mNNkzNzJi",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/social_links/telegram.png",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().info_link),
                            href: "https://vk.com/foswear",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/social_links/vk.png",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: (_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().info_link),
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/social_links/gmail.png",
                                alt: ""
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header_component)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1151);
/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_global_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(437);
/* harmony import */ var _styles_global_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_global_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7174);
/* harmony import */ var _redux_slices_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4805);
/* harmony import */ var _redux_slices_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2310);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);









function Header_component() {
    const { isAuth , data  } = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppSelector */ .C)(_redux_slices_user__WEBPACK_IMPORTED_MODULE_4__/* .selectUserData */ .tT);
    const [burger, setBurger] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const dispatch = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: burger ? `${(_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().burger_menu_active)} ${(_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().burger_menu)}` : (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().burger_menu),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        onClick: ()=>setBurger(false),
                        className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().burger_menu_link),
                        href: "/catalog?gender=men",
                        children: "Для него"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        onClick: ()=>setBurger(false),
                        className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().burger_menu_link),
                        href: "/catalog?gender=woman",
                        children: "Для неё"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        onClick: ()=>setBurger(false),
                        className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().burger_menu_link),
                        href: "/catalog?gender=unisex",
                        children: "Унисекс"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                style: burger ? {
                    position: "fixed",
                    top: 0,
                    width: "100%"
                } : {},
                className: `${(_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().header)} ${(_styles_global_module_css__WEBPACK_IMPORTED_MODULE_8___default().container)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().burger_container),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>setBurger(!burger),
                            className: burger ? `${(_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().burger_active)} ${(_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().burger)}` : (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().burger),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        onClick: ()=>setBurger(false),
                        className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo_container),
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().logo),
                            src: "/logo/logo_form.png",
                            alt: ""
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().links),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                onClick: ()=>setBurger(false),
                                className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().link),
                                href: "/catalog?gender=men",
                                children: "Для него"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                onClick: ()=>setBurger(false),
                                className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().link),
                                href: "/catalog?gender=woman",
                                children: "Для неё"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                onClick: ()=>setBurger(false),
                                className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().link),
                                href: "/catalog?gender=unisex",
                                children: "Унисекс"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().tools),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                onClick: ()=>setBurger(false),
                                href: "/cart",
                                className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().tool),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon),
                                    src: "/base/cart.png",
                                    alt: ""
                                })
                            }),
                            !isAuth ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().tool),
                                onClick: ()=>{
                                    dispatch((0,_redux_slices_ui__WEBPACK_IMPORTED_MODULE_5__/* .setAuthFormRedirect */ .lc)(""));
                                    dispatch((0,_redux_slices_ui__WEBPACK_IMPORTED_MODULE_5__/* .setAuthFormMessage */ .O1)(""));
                                    dispatch((0,_redux_slices_ui__WEBPACK_IMPORTED_MODULE_5__/* .setAuthFormShow */ .TO)(true));
                                    setBurger(false);
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon),
                                    src: "/base/profile.png",
                                    alt: ""
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().tool),
                                onClick: async ()=>{
                                    setBurger(false);
                                    await router.push("/profile");
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_header_module_css__WEBPACK_IMPORTED_MODULE_7___default().icon),
                                    src: "/base/profile.png",
                                    alt: ""
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7368);
/* harmony import */ var _redux_slices_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4805);
/* harmony import */ var _api_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2082);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_UI_Forms_AuthorizationForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5740);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_AdminUI_Subheader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7554);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_UI_base_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(361);
/* harmony import */ var _components_UI_base_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2331);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(808);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_Nprogress_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7182);
/* harmony import */ var _styles_Nprogress_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Nprogress_css__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_base__WEBPACK_IMPORTED_MODULE_4__, _components_UI_Forms_AuthorizationForm__WEBPACK_IMPORTED_MODULE_6__, _components_AdminUI_Subheader__WEBPACK_IMPORTED_MODULE_8__]);
([_api_base__WEBPACK_IMPORTED_MODULE_4__, _components_UI_Forms_AuthorizationForm__WEBPACK_IMPORTED_MODULE_6__, _components_AdminUI_Subheader__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















nprogress__WEBPACK_IMPORTED_MODULE_12___default().configure({
    showSpinner: false
});
next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on("routeChangeStart", ()=>nprogress__WEBPACK_IMPORTED_MODULE_12___default().start());
next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on("routeChangeComplete", ()=>nprogress__WEBPACK_IMPORTED_MODULE_12___default().done());
next_router__WEBPACK_IMPORTED_MODULE_9___default().events.on("routeChangeError", ()=>nprogress__WEBPACK_IMPORTED_MODULE_12___default().done());
function App({ Component , pageProps , ...rest }) {
    const { store  } = _redux_store__WEBPACK_IMPORTED_MODULE_2__/* .wrapper.useWrappedStore */ .YS.useWrappedStore(rest);
    const isAuth = store.getState().user.isAuth;
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const startWith = pathname.startsWith("/admin");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "FOS"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=0.8 user-scalable=no"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_redux__WEBPACK_IMPORTED_MODULE_7__.Provider, {
                store: store,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_Forms_AuthorizationForm__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    !startWith && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_AdminUI_Subheader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    !startWith && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            height: "120px"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_base_header_component__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    !startWith && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_base_footer_component__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
}
App.getInitialProps = _redux_store__WEBPACK_IMPORTED_MODULE_2__/* .wrapper.getInitialAppProps */ .YS.getInitialAppProps((store)=>async ({ ctx , Component  })=>{
        try {
            const { userData  } = await (0,_api_base__WEBPACK_IMPORTED_MODULE_4__/* .Api */ .V)(ctx).user.GetMe();
            if (userData) {
                store.dispatch((0,_redux_slices_user__WEBPACK_IMPORTED_MODULE_3__/* .setUserData */ .M)(userData));
                store.dispatch((0,_redux_slices_user__WEBPACK_IMPORTED_MODULE_3__/* .setUserAuth */ .rP)(true));
            }
        } catch (err) {}
        return {
            pageProps: {
                ...Component.getInitialProps ? await Component.getInitialProps({
                    ...ctx,
                    store
                }) : {}
            }
        };
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

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


/***/ }),

/***/ 7182:
/***/ (() => {



/***/ }),

/***/ 6764:
/***/ (() => {



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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 3053:
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ 808:
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,82,310,368], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();