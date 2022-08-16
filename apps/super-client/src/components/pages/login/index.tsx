import React, { useCallback, useEffect, useRef, useState } from "react"
import axios from "axios"
import { Button, TextField } from "@material-ui/core"
import { axiosInstance } from "../../../services/axios.index"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { loginThunkAction } from "../../../store/reducers/loginReducers"
import { WithLoading } from "../../ui-components/withLoading"

export default function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useAppDispatch()
    const stateIsLogin = useAppSelector(state => state.login.isLoading)

    const userNameHandler = useCallback((e: any) => {
        setUserName(e.target.value)
    }, [userName])

    const passwordHandler = useCallback((e: any) => {
        setPassword(e.target.value)
    }, [password])



    return <div>
        <h1> Login </h1>
        <form noValidate autoComplete="off">
            <div>
                <TextField onChange={userNameHandler} name={"userName"} id="standard-basic" label="username" />
            </div>
            <div>
                <TextField onChange={passwordHandler} id="standard-basic" label="password" />
            </div>
            <WithLoading isLoading={stateIsLogin}>
                <div>
                    <Button onClick={() => {
                        dispatch(loginThunkAction({ userName, password }))
                        //loginAction({ userName, password })
                    }} > Submit </Button>
                </div>
            </WithLoading>
        </form >

    </div >
}