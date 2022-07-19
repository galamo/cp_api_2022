import React, { useEffect, useState } from "react"
import { HeaderApplication } from "../ui-components/header"
import axios from "axios"
import debounce from "lodash/debounce"
import CountryCard from "../ui-components/country"

export function CountriesPage() {
    const initialCountry: string = ""
    const countriesInitialState: Array<any> = []
    const [countryName, setCountryName] = useState(initialCountry)
    const [countries, setCountries] = useState(countriesInitialState)

    const cancelToken = axios.CancelToken;
    const source = cancelToken.source()


    useEffect(() => {
        console.log("React Countries component useEffect")
        async function getCountries() {
            try {
                const { data } = await axios.get(`http://localhost:2200/countries-delay/name/${countryName}`, {
                    cancelToken: source.token
                })
                console.log(data.data)
                setCountries(data.data)
            } catch (ex) {
                if (axios.isCancel(ex)) {
                    console.log("successfully aborted")
                } else {
                    console.log("handle a real error!")
                }
                console.log(ex)
            }
        }
        if (countryName) getCountries()
        return () => {
            console.log("React Countries component cleanup...")
            source.cancel()
        }

    }, [countryName])
    const handleChange = (e: any) => {
        const { value } = e.target
        if (!value) return
        setCountryName(value)
    }
    const textChangeHandler = debounce(handleChange, 400)

    return <div>
        <div>
            <HeaderApplication text={"Countries Page"} />
            <input type="text" onChange={textChangeHandler} />
            <br />
        </div>
        <div>
            {Array.isArray(countries) && countries.map((c: any) => {
                return <CountryCard region={c.region} countryName={c.name.common} flag={c.flags?.png} />
            })}
        </div>
    </div>
}

