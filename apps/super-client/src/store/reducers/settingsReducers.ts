import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//  part of state

interface ISettingsState {
    userName: string | null
}

const initialState: ISettingsState = {
    userName: null
}

export const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload
        }
    }
})

export const { setUserName } = settingsSlice.actions
export default settingsSlice.reducer