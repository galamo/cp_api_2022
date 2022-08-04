import React, { useContext } from "react"
import { SettingsContext } from "../../providers/settingsProvider"
import moment from "moment"

export default function AppDate(props: { currentDate: string }) {
    const context = useContext(SettingsContext)
    const date = context.isUtc ? moment(props.currentDate).utc() : moment(props.currentDate)
    return <span> {date.format("DD/MMM/YYYY HH:mm:ss").toString()}</span>
}