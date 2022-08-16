import { configureStore } from "@reduxjs/toolkit";
import countriesReducers from "./reducers/countriesReducers";
import settingsReducers from "./reducers/settingsReducers";

export const store = configureStore({
    reducer: {
        settings: settingsReducers,
        countries: countriesReducers
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

