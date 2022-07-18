import React, { useEffect, useState } from "react"
import TextField from '@material-ui/core/TextField';

import { HeaderApplication } from "../ui-components/header"
import axios from "axios"
import ImageCP from "../ui-components/image";

export function CountriesPage() {
    const [countries, setCountries] = useState([])

    const cancelToken = axios.CancelToken
    const source = cancelToken.source()



    useEffect(() => {
        async function getCountries() {
            try {
                const result = await axios.get("http://localhost:2200/countries-delay", { cancelToken: source.token })
                setCountries(result.data)
            } catch (ex) {
                if (axios.isCancel(ex)) {
                    console.log("successfully aborted")
                } else {
                    console.log("handle a real error!")
                }
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
        <div>
            <ImageCP imageUrl="https://www.checkpoint.com/wp-content/uploads/checkpoint-logo-stacked-large.png" />
            <TextField id="standard-basic" label="Standard" />
        </div>
    </div>
}

