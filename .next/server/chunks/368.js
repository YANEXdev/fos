"use strict";
exports.id = 368;
exports.ids = [368];
exports.modules = {

/***/ 4805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ setUserData),
/* harmony export */   "M3": () => (/* binding */ userReducer),
/* harmony export */   "rP": () => (/* binding */ setUserAuth),
/* harmony export */   "tT": () => (/* binding */ selectUserData)
/* harmony export */ });
/* unused harmony export userSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    data: null,
    isAuth: false
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state, action)=>{
            state.data = action.payload;
        },
        setUserAuth: (state, action)=>{
            state.isAuth = action.payload;
        }
    },
    extraReducers: {
        [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.HYDRATE]: (state, action)=>{
            state.data = action.payload.user.data;
            state.isAuth = action.payload.user.isAuth;
        }
    }
});
const { setUserData , setUserAuth  } = userSlice.actions;
const selectUserData = (state)=>state.user;
const userReducer = userSlice.reducer;


/***/ }),

/***/ 7368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YS": () => (/* binding */ wrapper)
/* harmony export */ });
/* unused harmony exports makeStore, store */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4805);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _slices_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2310);




function makeStore() {
    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
        reducer: {
            user: _slices_user__WEBPACK_IMPORTED_MODULE_1__/* .userReducer */ .M3,
            ui: _slices_ui__WEBPACK_IMPORTED_MODULE_3__/* .uiReducer */ ._3
        }
    });
}
const store = makeStore();
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(makeStore);


/***/ })

};
;