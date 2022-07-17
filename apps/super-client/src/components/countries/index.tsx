import React, { useEffect } from "react"
import { HeaderApplication } from "../ui-components/header"
import axios from "axios"

export function CountriesPage() {
    const cancelToken = axios.CancelToken
    const source = cancelToken.source()
    useEffect(() => {
        async function getCountries() {
            try {
                const result = await axios.get("https://restcountries.com/v3.1/all", { cancelToken: source.token })
            } catch (ex) {
                if (axios.isCancel(ex)) {
                    console.log("successfully aborted")
                } else {
                    console.log("handle a real error!")
                }
                console.log(ex)
            }
        }
        getCountries()
        return () => {
            console.log("unmounting..")
            source.cancel();
        }

    }, [])


    return <div>
        <HeaderApplication text={"Countries Page"} />
        Countreis Data!!!
    </div>
}

