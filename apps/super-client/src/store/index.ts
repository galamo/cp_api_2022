import { configureStore } from "@reduxjs/toolkit";
import countriesReducers from "./reducers/countriesReducers";
import loginReducers from "./reducers/loginReducers";
import settingsReducers from "./reducers/settingsReducers";

export const store = configureStore({
    reducer: {
        settings: settingsReducers,
        countries: countriesReducers,
        login: loginReducers
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

