import React, { useCallback, useEffect, useRef, useState } from "react"
import { Button, TextField } from "@material-ui/core"
import { axiosInstance } from "../../../services/axios.index"
import { WithLoading } from "../../ui-components/withLoading"

export default function SecurePage() {
    const [checkpointMessage, setCheckpointMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function onLoad() {
            try {
                setIsLoading(true)
                const { data } = await axiosInstance.get("/secure")
                const { secureMessage } = data
                setCheckpointMessage(secureMessage)
            } catch (ex) {
                // Define error response
            }finally{
                setIsLoading(false)
            }
        }
        onLoad()
    }, [])

    return <div>

        <WithLoading isLoading={isLoading}>
            <h1>{checkpointMessage}</h1>
        </WithLoading>

    </div >
}