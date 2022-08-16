import React, { useCallback, useEffect, useRef, useState } from "react"
import axios from "axios"
import { Button, TextField } from "@material-ui/core"
import { axiosInstance } from "../../../services/axios.index"
import { loginApi } from "../../../store/reducers/loginReducers"
import { useAppDispatch, useAppSelector } from "../../../store/hooks"

export default function Login() {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useAppDispatch()
    const isLoadingLogin = useAppSelector(state => state.login.isLoading)

    const userNameHandler = useCallback((e: any) => {
        setUserName(e.target.value)
    }, [userName])

    const passwordHandler = useCallback((e: any) => {
        setPassword(e.target.value)
    }, [password])

    async function loginAction({ userName, password }: { userName: string, password: string }) {
        try {
            const { data } = await axiosInstance.post("/auth/login", {
                userName, password
            })
            const { token } = data;
            window.localStorage.setItem("token", token)
        } catch (ex) {
            console.log("error", ex)
        }
    }
    return <div>
        <h1> Login </h1>
        <form noValidate autoComplete="off">
            <div>
                <TextField onChange={userNameHandler} name={"userName"} id="standard-basic" label="username" />
            </div>
            <div>
                <TextField onChange={passwordHandler} id="standard-basic" label="password" />
            </div>
            <div>
                <Button onClick={() => {
                    dispatch(loginApi({ userName, password }));
                    // loginAction({ userName, password })
                }} > Submit </Button>
            </div>
        </form >

    </div >
}