import React, { useEffect, useRef } from "react"
import axios, { AxiosResponse } from "axios"
import { Button, TextField } from "@material-ui/core"
import { useNavigate } from "react-router-dom"


export default function Register() {
    const userNameRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()
    const navigate = useNavigate()
    const register = () => {
        registerUserApi()
    }
    async function registerUserApi() {
        try {
            const result: AxiosResponse = await axios.post("http://localhost:2200/auth/register", {
                userName: userNameRef?.current?.value,
                password: passwordRef?.current?.value
            })
            const { data, statusText } = result;
            if (data.message && statusText.toLowerCase() === "ok") {
                console.log("navigatge to login...")
                navigate("/login")
            }
        } catch (ex: any) {
            alert(ex.message)
        }
    }

    useEffect(() => {
        return () => {
            console.log("Cleanup")
        }
    }, [])

    return <div>
        <h1> Register </h1>
        <form noValidate autoComplete="off">
            <div>
                <TextField inputRef={userNameRef} id="standard-basic" label="username" />
            </div>
            <div>
                <TextField inputRef={passwordRef} id="standard-basic" label="password" />
            </div>
            <div>
                <Button onClick={register} > Submit </Button>
            </div>
        </form>

    </div>
}