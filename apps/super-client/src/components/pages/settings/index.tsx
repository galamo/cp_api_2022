import { Button, Switch } from "@material-ui/core";
import React, { useContext, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { RESOLUTION, setReportResolution, setUserName } from "../../../store/reducers/settingsReducers";
import { SettingsContext } from "../../providers/settingsProvider";






export default function Settings() {
    const { dispatch, pieChartSettings, isUtc } = useContext(SettingsContext)
    const dispatchFn = dispatch as Function;
    const inputUserNameRef = useRef<HTMLInputElement>(null)
    const appDispatch = useAppDispatch()
    const { token, resolution } = useAppSelector(state => state.settings)

    return <div>
        <h1> Pie chart settings </h1>
        <h4> {resolution} </h4>
        <Button onClick={() => { appDispatch(setReportResolution(RESOLUTION.PRECENTAGE)) }}> Precentage </Button>
        <Button onClick={() => { appDispatch(setReportResolution(RESOLUTION.NUMBER)) }}> Numbers </Button>
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
        <div>
            <h1> Token: </h1>
            <span> {token?.slice(0, 10)} </span>
        </div>
    </div>
}