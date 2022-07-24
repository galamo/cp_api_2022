import React from "react"
import { Link, useNavigate } from "react-router-dom"
import ImageCp from "../imageCp"
import css from "./style.module.css"

interface IProps {
    countryName: string,
    flag: string,
    region: string
}

export default function CountryCard(props: IProps) {
    const { countryName, flag, region } = props

    return <div className={css.card} style={{ display: "inline-block", margin: "10px" }}>
        <ImageCp imageUrl={flag} />
        <div className={css.card}>
            <h4><Link to={`/country-page/${countryName}`}>{countryName}</Link></h4>
            <p>{region}</p>
        </div >
    </div >




}