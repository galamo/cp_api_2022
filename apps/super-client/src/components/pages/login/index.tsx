import React, { useEffect, useRef } from "react"
import axios from "axios"
import { Button, TextField } from "@material-ui/core"


export default function Login() {
    const userNameRef = useRef<HTMLInputElement>()
    const passwordRef = useRef<HTMLInputElement>()

    return <div>
        <h1> Login </h1>
        <form noValidate autoComplete="off">
            <div>
                <TextField inputRef={userNameRef} id="standard-basic" label="username" />
            </div>
            <div>
                <TextField inputRef={passwordRef} id="standard-basic" label="password" />
            </div>
            <div>
                <Button onClick={() => {
                    // TODO: Login
                }} > Submit </Button>
            </div>
        </form>

    </div>
}