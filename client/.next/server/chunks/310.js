"use strict";
exports.id = 310;
exports.ids = [310];
exports.modules = {

/***/ 2310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ setAuthFormType),
/* harmony export */   "O1": () => (/* binding */ setAuthFormMessage),
/* harmony export */   "TO": () => (/* binding */ setAuthFormShow),
/* harmony export */   "_3": () => (/* binding */ uiReducer),
/* harmony export */   "kG": () => (/* binding */ selectUIData),
/* harmony export */   "lc": () => (/* binding */ setAuthFormRedirect)
/* harmony export */ });
/* unused harmony exports uiSlice, setAuthForm */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    AuthForm: {
        message: "",
        show: false,
        error: "success",
        redirect: ""
    }
};
const uiSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "ui",
    initialState,
    reducers: {
        setAuthFormShow: (state, action)=>{
            state.AuthForm.show = action.payload;
        },
        setAuthFormMessage: (state, action)=>{
            state.AuthForm.message = action.payload;
        },
        setAuthFormType: (state, action)=>{
            state.AuthForm.error = action.payload;
        },
        setAuthFormRedirect: (state, action)=>{
            state.AuthForm.redirect = action.payload;
        },
        setAuthForm: (state, action)=>{
            state = action.payload;
        }
    }
});
const { setAuthForm , setAuthFormShow , setAuthFormMessage , setAuthFormType , setAuthFormRedirect  } = uiSlice.actions;
const selectUIData = (state)=>state.ui.AuthForm;
const uiReducer = uiSlice.reducer;


/***/ })

};
;