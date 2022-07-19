import React, { useMemo } from "react"
import Chip from '@material-ui/core/Chip';

interface IProps {
    countries: Array<any>
}

export function CountriesStatistics(props: IProps) {
    const { countries } = props
    const shortCalculation = countries.map((c: any) => c.name.common).join("")
    const result = useMemo(() => {
        return calcTotalPopulation(countries)
    }, [shortCalculation])

    return <div style={{ padding: "10px" }}>
        Total Population:
        <Chip label={result} />
    </div>
}

function calcTotalPopulation(countries: Array<any>): number {
    console.log("Long Calculation executed")
    return countries.reduce((total, currentCountry: any) => {
        if (!currentCountry.population) return total;
        return total + Number(currentCountry.population || 0)
    }, 0)
}