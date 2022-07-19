import React, { useEffect, useState } from "react"
import { HeaderApplication } from "../ui-components/header"
import axios from "axios"
import debounce from "lodash/debounce"
import CountryCard from "../ui-components/country"
import Button from '@material-ui/core/Button';
import { CountriesStatistics } from "./statistics"


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
    const countriesArray = Array.isArray(countries) && countries
    return <div>
        <div>
            <Button color="primary" onClick={() => {
                setCountries([...shuffle(countries)])
            }}> Shuffle </Button>
            <HeaderApplication text={"Countries Page"} />
            <input type="text" onChange={textChangeHandler} />
            <br />
        </div>
        <div>
            <CountriesStatistics countries={countriesArray} />
        </div>
        <div>
            {countriesArray.map((c: any) => {
                return <CountryCard key={c.name.common} region={c.region} countryName={c.name.common} flag={c.flags?.png} />
            })}
        </div>
    </div >
}

// only for React ***
function shuffle(array: Array<any>) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
