import React, { createContext, useReducer } from 'react'

interface IGlobalState {
    pieChartSettings: string,
    dispatch?: Function
}

const initialState: IGlobalState = {
    pieChartSettings: "precentage"
}

export const GlobalState = createContext<IGlobalState>(initialState)


function reducerFn(state: IGlobalState, action: { type: string, payload?: any }) {
    switch (action.type) {
        case "SET_PIECHART_SETTINGS": {
            console.log(action)
            return { ...state, pieChartSettings: action.payload }
        }
        default: {
            return state;
        }
    }
}

function SettingsProvider({ children }: { children: React.ReactElement }) {
    const [state, dispatch] = useReducer(reducerFn, initialState)

    const value = { state, dispatch }
    return <GlobalState.Provider value={{ ...state, dispatch }}>{children}</GlobalState.Provider>
}

function useCount() {
    const context = React.useContext(GlobalState)
    if (context === undefined) {
        throw new Error('useCount must be used within a SettingsProvider')
    }
    return context
}

export { SettingsProvider, useCount }
