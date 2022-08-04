import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { GlobalState } from "../../../providers";






export default function Settings() {

    const { dispatch, pieChartSettings } = useContext(GlobalState)
    console.log("Update from Settings", dispatch)
    const dispatchFn = dispatch as Function;

    return <div>
        <h1> Pie chart settings </h1>
        <h4> {pieChartSettings} </h4>
        <Button onClick={() => { dispatchFn({ type: "SET_PIECHART_SETTINGS", payload: "precentage" }) }} > Precentage </Button>
        <Button onClick={() => { dispatchFn({ type: "SET_PIECHART_SETTINGS", payload: "numbers" }) }} > Numbers </Button>
    </div>
}