import React, { useState, useCallback, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { setTimeout } from 'timers/promises';


let c = 0; // DONT DO THIS
const message = "You are Clicking the button too much"
export default function Vacations() {
    const initialVacations: Array<string | undefined> = ["Ibiza", "Sayshel"]
    const [vacations, setVacations] = useState(initialVacations)
    const [currentVacation, setCurrentVacation] = useState("Hawai")
    const [counter, setCounter] = useState(0)
    const [showMessage, setShowMessage] = useState(false)
    const clickingRef = useRef(0)
    const [showInput, setShowInput] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const addVacationHandler = useCallback(() => {
        setVacations([...vacations, currentVacation])
    }, [currentVacation, vacations])

    const addVacationRefHandler = () => {
        const value: string | undefined = inputRef?.current?.value
        setVacations([...vacations, value])
    }

    useEffect(() => {
        if (inputRef && inputRef.current) {
            inputRef.current.value = "DefaultVacationValue!"
            // inputRef.current.style.visibility = "hidden"
        }
    }, [showInput])

    const setCounterHandler = useCallback(() => {
        setCounter(counter + 1)
    }, [counter])

    const showInputHandler = () => {
        setShowInput(!showInput)
    }

    const setCounterHandlerRef = () => {
        clickingRef.current++
        c++;
        if (clickingRef.current > 3) {
            clickingRef.current = 0
            setShowMessage(true)
            window.setTimeout(() => {
                setShowMessage(false)
            }, 2000)
        }
    }

    return (
        <div style={{ padding: "10px", width: "50%", margin: "auto auto", border: "1px solid black", borderRadius: 10 }}>
            <FormGroup row>
                <div>
                    <TextField value={currentVacation} onChange={(e: any) => {
                        setCurrentVacation(e?.target?.value)
                    }} id="standard-basic" label="Insert Vacation" />
                </div>
                <div>
                    WithRef:
                    {showInput && <input ref={inputRef} />}
                </div>
                <Button onClick={addVacationRefHandler} variant="contained" color="primary" disableElevation>
                    Add
                </Button>
                <Button onClick={setCounterHandlerRef} variant="contained" color="primary" disableElevation>
                    increase
                </Button>
                <Button onClick={showInputHandler} variant="contained" color="primary" disableElevation>
                    Show input
                </Button>
                {showMessage && message}
            </FormGroup>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h2" >
                        Vacations {counter}
                    </Typography>
                    <div>
                        <VacationsList />
                    </div>
                </Grid>

            </Grid>

        </div>
    );

    function VacationsList() {
        return <List >
            {vacations.map((v: any, index: number) => {
                return <ListItem key={v + index}>
                    <ListItemText
                        primary={v}
                    />
                </ListItem>
            })}
        </List>
    }
}
