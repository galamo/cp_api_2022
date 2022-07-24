import React from "react"
import { useParams } from "react-router-dom"

export default function CountryPage() {
    const params = useParams()
    return <div>
        <h1> Country: {params.name} </h1>
    </div>
}