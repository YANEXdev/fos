import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {AppState} from "../store";
import {HYDRATE} from "next-redux-wrapper";

type AuthForm = {
    message: string
    show: boolean
    error: string
    redirect: string
}

export interface uiState {
    AuthForm: AuthForm;
}

const initialState: uiState = {
    AuthForm: {
        message: '',
        show: false,
        error: 'success',
        redirect: ''
    }
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setAuthFormShow: (state, action: PayloadAction<boolean>) => {
            state.AuthForm.show = action.payload
        },
        setAuthFormMessage: (state, action: PayloadAction<string>) => {
            state.AuthForm.message = action.payload
        },
        setAuthFormType: (state, action: PayloadAction<string>) => {
            state.AuthForm.error = action.payload
        },
        setAuthFormRedirect: (state, action: PayloadAction<string>) => {
            state.AuthForm.redirect = action.payload
        },
        setAuthForm: (state, action: PayloadAction<any>) => {
            state = action.payload
        }
    },
})

export const { setAuthForm, setAuthFormShow, setAuthFormMessage, setAuthFormType, setAuthFormRedirect } = uiSlice.actions

export const selectUIData = (state: AppState) => state.ui.AuthForm;

export const uiReducer = uiSlice.reducer