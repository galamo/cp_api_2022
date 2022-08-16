import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//  part of state

interface ICountriesState {
    countries: Array<any>,
    isLoading: boolean
}

const initialState: ICountriesState = {
    countries: [],
    isLoading: false
}



export const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        setCountries: (state, action: PayloadAction<Array<any>>) => {
            state.countries = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
    }
})

export const { setCountries, setIsLoading } = countriesSlice.actions
export default countriesSlice.reducer