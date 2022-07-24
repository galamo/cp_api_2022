import React from "react"
import { useParams } from "react-router-dom"


export default function CountryPage() {
    const params = useParams()
    return <div>
        <h1> Page: {params.name || "No country"} </h1>
    </div>
}