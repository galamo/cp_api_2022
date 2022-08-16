import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//  part of state
export enum RESOLUTION {
    PRECENTAGE = "precentage",
    NUMBER = "number",
}
interface ISettingsState {
    userName: string | null,
    token: string | null,
    resolution: RESOLUTION;
}

const initialState: ISettingsState = {
    userName: null,
    token: null,
    resolution: RESOLUTION.PRECENTAGE
}



export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        setReportResolution: (state, action: PayloadAction<RESOLUTION>) => {
            state.resolution = action.payload
        }
    }
})

export const { setUserName, setToken, setReportResolution } = settingsSlice.actions
export default settingsSlice.reducer