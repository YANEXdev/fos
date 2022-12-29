import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {AppState} from "../store";
import {HYDRATE} from "next-redux-wrapper";

export interface UserState {
    data: object | null;
    isAuth: boolean;
}

const initialState: UserState = {
    data: null,
    isAuth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<any>) => {
            state.data = action.payload
        },
        setUserAuth: (state, action: PayloadAction<any>) => {
            state.isAuth = action.payload
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            state.data = action.payload.user.data
            state.isAuth = action.payload.user.isAuth
        },
    },

})

export const { setUserData, setUserAuth } = userSlice.actions

export const selectUserData = (state: AppState) => state.user;

export const userReducer = userSlice.reducer