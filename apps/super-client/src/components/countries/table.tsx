import React, { useEffect, useState, useCallback } from "react";
import TextField from '@material-ui/core/TextField';
import debounce from "lodash/debounce";
import axios from "axios"



export function CountriesTable() {
    const cancelToken = axios.CancelToken
    const source = cancelToken.source()

    const [countryName, setCountryName] = useState("");
    const [countries, setCountries] = useState([]);


    function changeHandler(e: any) {
        if (!e.target.value) return;
        setCountryName(e.target.value);
    }
    useEffect(() => {
        console.log("Starting useEffect")
        async function getCountries() {
            try {
                const result = await axios.get(`http://localhost:2200/countries-delay/name/${countryName}`, { cancelToken: source.token })
                setCountries(result.data.data)
            } catch (ex) {
                if (axios.isCancel(ex)) {
                    console.log("successfully aborted")
                } else {
                    console.log("handle a real error!")
                }
                console.log(ex)
                setCountries([])
            }
        }
        if (countryName) getCountries()
        return () => {
            console.log("CountriesTable Unmount")
            source.cancel();
        }

    }, [countryName])

    const categoryTextChangeHandler = debounce(changeHandler, 350);

    return (
        <div style={{ width: "50%", margin: "auto auto" }}>
            <h1> Countries </h1>

            {/* TODO move to another component - Crete goggle component */}

            <div style={{ marginBottom: "10px" }}>
                <TextField
                    id="outlined-basic"
                    label="Category"
                    variant="outlined"
                    onChange={categoryTextChangeHandler}
                />
            </div>
            <div>
                {Array.isArray(countries) && countries.map(c => <h2>{(c as any).name.common}</h2>)}
            </div>
        </div>
    );
}