import getProductsApi from "../../services/countries"
import { store } from "../../store"
import { setCountries, setIsLoading } from "../reducers/countriesReducers"

const dispatchFn = store.dispatch

export default async function getProductsAction() {
    try {
        dispatchFn(setIsLoading(true))
        const response = await getProductsApi()
        dispatchFn(setCountries(response))
    } catch (ex) {
        console.log("something went wrong")
        // dispatch modal error
    } finally {
        dispatchFn(setIsLoading(false))
    }
}