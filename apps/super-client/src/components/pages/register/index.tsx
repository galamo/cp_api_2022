import React, { useEffect, useRef, useState } from "react"
import axios, { AxiosResponse } from "axios"
import { Button, TextField } from "@material-ui/core"
import { useNavigate } from "react-router-dom"
import { WithLoading } from "../../ui-components/withLoading"


export default function Register() {
    const userNameRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const register = () => {
        registerUserApi()
    }
    async function registerUserApi() {
        setIsLoading(true)
        try {
            const result: AxiosResponse = await axios.post("http://localhost:2200/auth/register", {
                userName: userNameRef?.current?.value,
                password: passwordRef?.current?.value
            })
            const { data, statusText } = result;
            setIsLoading(false)
            if (data.message && statusText.toLowerCase() === "ok") {
                navigate("/login")
            }
        } catch (ex: any) {
            alert(ex.message)
        } finally {

        }
    }

    useEffect(() => {
        return () => {
        }
    }, [])

    return <div>
        <h1> Register </h1>
        <WithLoading isLoading={isLoading}>
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
        </WithLoading>


    </div>
}