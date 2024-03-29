import React, { useMemo } from "react"
import Chip from '@material-ui/core/Chip';

interface IProps {
    countries: Array<any>
}

export function CountriesStatistics(props: IProps) {
    const { countries } = props
    const result = useMemo(() => {
        return calcTotalPopulation(countries)
    }, [JSON.stringify(props.countries)])

    return <div style={{ padding: "10px" }}>
        Total Population:
        <Chip label={result} />
    </div>
}

export function calcTotalPopulation(countries: Array<any>): number | undefined {
    if (!Array.isArray(countries)) return;
    return countries.reduce((total, currentCountry: any) => {
        if (!currentCountry.population) return total;
        return total + Number(currentCountry.population || 0)
    }, 0)
}