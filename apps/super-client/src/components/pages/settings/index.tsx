import { Button, Switch } from "@material-ui/core";
import React, { useContext } from "react";
import { SettingsContext } from "../../providers/settingsProvider";






export default function Settings() {
    const { dispatch, pieChartSettings, isUtc } = useContext(SettingsContext)
    const dispatchFn = dispatch as Function;
    return <div>
        <h1> Pie chart settings </h1>
        <h4> {pieChartSettings} </h4>
        <Button onClick={() => { dispatchFn({ type: "SET_PIECHART_SETTINGS", payload: "precentage" }) }} > Precentage </Button>
        <Button onClick={() => { dispatchFn({ type: "SET_PIECHART_SETTINGS", payload: "numbers" }) }} > Numbers </Button>
        <Switch
            checked={isUtc}
            onChange={() => {
                dispatchFn({ type: "SET_ISUTC" })
            }}
            name="is utc"
        />
    </div>
}