import React, { createContext, useReducer } from "react"

interface IGlobalState {
    pieChartSettings: string,
    isUtc: boolean
    dispatch?: Function
}

const initialState: IGlobalState = {
    pieChartSettings: "precentage",
    isUtc: false,
}

export const SettingsContext = createContext<IGlobalState>(initialState)

function settingsReducer(state: IGlobalState, action: { type: string, payload?: any }): IGlobalState {
    switch (action.type) {
        case "SET_PIECHART_SETTINGS": {
            return { ...state, pieChartSettings: action.payload }
        }
        case "SET_ISUTC": {
            return { ...state, isUtc: !state.isUtc }
        }
        default: {
            return state;
        }
    }
}

export default function SettingsProvider({ children }: { children: React.ReactElement }) {
    const [state, dispatch] = useReducer(settingsReducer, initialState)
    return <SettingsContext.Provider value={{ ...state, dispatch }}>{children} </SettingsContext.Provider>
}