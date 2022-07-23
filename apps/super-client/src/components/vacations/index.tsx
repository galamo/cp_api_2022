import React, { useState, useCallback, useRef } from 'react';
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


const m = "You are clicking too much!"
export default function Vacations() {
    const initialVacations: Array<string> = ["Ibiza", "Sayshel"]
    const [vacations, setVacations] = useState(initialVacations)
    const [currentVacation, setCurrentVacation] = useState("Hawai")
    const [counter, setCounter] = useState(0)
    const [showMessage, setShowMessage] = useState(false)
    const refVacations = useRef(0)
    console.log("render please!")
    const addVacationHandler = useCallback(() => {
        setVacations([...vacations, currentVacation])
    }, [currentVacation, vacations])


    // const setCounterHandler = useCallback(() => {
    //     refVacations.current++;
    //     console.log("Counter clicked " + refVacations.current)
    //     setCounter(counter + 1)
    // }, [counter])

    const setCounterHandler = () => {
        refVacations.current++;
        console.log("Counter clicked ", refVacations.current)
        if (refVacations.current >= 10) {
            refVacations.current = 0;
            setShowMessage(true);
            window.setTimeout(() => {
                setShowMessage(false)
            }, 2000);
        }
        // setCounter(counter + 1)
    }

    return (
        <div style={{ padding: "10px", width: "50%", margin: "auto auto", border: "1px solid black", borderRadius: 10 }}>
            {JSON.stringify(refVacations.current)}
            <FormGroup row>
                <TextField value={currentVacation} onChange={(e: any) => {
                    setCurrentVacation(e?.target?.value)
                }} id="standard-basic" label="Insert Vacation" />
                <Button onClick={() => {
                    // addVacationHandlerRef()
                    addVacationHandler()
                }} variant="contained" color="primary" disableElevation>
                    Add
                </Button>
                <Button onClick={setCounterHandler} variant="contained" color="primary" disableElevation>
                    increase
                </Button>
                {showMessage && m}
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
            {vacations.map((v: string, index: number) => {
                return <ListItem key={v + index}>
                    <ListItemText
                        primary={v}
                    />
                </ListItem>
            })}
        </List>
    }
}
