import React, { useCallback, useEffect, useRef, useState } from "react"
import { Button, TextField } from "@material-ui/core"
import { axiosInstance } from "../../../services/axios.index"
import { WithLoading } from "../../ui-components/withLoading"

export default function SecurePage() {
    const [checkpointMessage, setCheckpointMessage] = useState("")

    useEffect(() => {
        async function onLoad() {
            try {
                const { data } = await axiosInstance.get("/secure")
                const { secureMessage } = data
                setCheckpointMessage(secureMessage)
            } catch (ex) {
                console.log("error from component")
                // Define error response
            }
        }
        onLoad()
    }, [])

    return <div>

        <WithLoading isLoading={Boolean(checkpointMessage)}>
            <span>{checkpointMessage}</span>
        </WithLoading>

    </div >
}