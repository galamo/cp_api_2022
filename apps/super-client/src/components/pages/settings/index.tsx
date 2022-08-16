import { Button, Switch } from "@material-ui/core";
import React, { useContext, useRef } from "react";
import { useAppDispatch } from "../../../store/hooks";
import { setUserName } from "../../../store/reducers/settingsReducers";
import { SettingsContext } from "../../providers/settingsProvider";






export default function Settings() {
    const { dispatch, pieChartSettings, isUtc } = useContext(SettingsContext)
    const dispatchFn = dispatch as Function;
    const inputUserNameRef = useRef<HTMLInputElement>(null)
    const appDispatch = useAppDispatch()

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
        <div>
            <h1> Redux state</h1>
            <Button onClick={() => {
                appDispatch(setUserName(inputUserNameRef?.current?.value as string))
            }} > Set User Name </Button>
            <input ref={inputUserNameRef} />
        </div>
    </div>
}