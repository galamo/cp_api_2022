import React from "react"
import css from "./style.module.css"

interface IProps {
    countryName: string,
    flag: string,
    region: string
}

export default function CountryCard(props: IProps) {
    const { countryName, flag, region } = props

    return <div className={css.card} style={{ display: "inline-block", margin: "10px" }}>
        <img src={flag} alt="Avatar" />
        <div className={css.card}>
            <h4>{countryName}</h4>
            <p>{region}</p>
        </div>
    </div>




}