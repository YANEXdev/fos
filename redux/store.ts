import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import { userReducer } from './slices/user'
import {createWrapper} from "next-redux-wrapper";
import {uiReducer} from "./slices/ui";

export function makeStore() {
    return configureStore({
        reducer: {
            user: userReducer,
            ui: uiReducer
        },
    })
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);