"use strict";
exports.id = 82;
exports.ids = [82];
exports.modules = {

/***/ 9355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ UserApi)
/* harmony export */ });
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);

const UserApi = (instance)=>{
    const Login = async (dto)=>{
        try {
            const { data  } = await instance.post("/auth/login", dto);
            (0,nookies__WEBPACK_IMPORTED_MODULE_0__.setCookie)(null, "token", data.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/"
            });
            return data;
        } catch (err) {
            throw new Error(err.response.data.message);
        }
    };
    const Logout = ()=>{
        document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
        window.location.reload();
    };
    const GetMe = async ()=>{
        try {
            const { data  } = await instance.get("user/getMyData");
            return data;
        } catch (err) {
            throw new Error(err.response.data.message);
        }
    };
    return {
        Login,
        Logout,
        GetMe
    };
};


/***/ }),

/***/ 2082:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ Api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3053);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9355);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Api = (ctx)=>{
    const cookies = ctx ? nookies__WEBPACK_IMPORTED_MODULE_1___default().get(ctx) : (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)();
    const token = cookies.token;
    const instance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
        baseURL: "https://foswear.ru/_api",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return {
        Instance: instance,
        user: (0,_auth__WEBPACK_IMPORTED_MODULE_2__/* .UserApi */ .W)(instance)
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;