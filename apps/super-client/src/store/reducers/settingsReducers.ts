import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface SettingsState {
    userName: string | null
}

// Define the initial state using that type
const initialState: SettingsState = {
    userName: null,
}

export const settingsSlice = createSlice({
    name: 'settings',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload
        }
    },
})

export const { setUserName } = settingsSlice.actions

export default settingsSlice.reducer