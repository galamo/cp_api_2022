import React, { useState, useCallback } from 'react';
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




export default function Vacations() {
    const initialVacations: Array<string> = ["Ibiza", "Sayshel"]
    const [vacations, setVacations] = useState(initialVacations)
    const [currentVacation, setCurrentVacation] = useState("Hawai")
    const [counter, setCounter] = useState(0)


    const addVacationHandler = useCallback(() => {
        setVacations([...vacations, currentVacation])
    }, [currentVacation, vacations])

    const setCounterHandler = useCallback(() => {
        setCounter(counter + 1)
    }, [counter])

    return (
        <div style={{ padding: "10px", width: "50%", margin: "auto auto", border: "1px solid black", borderRadius: 10 }}>
            <FormGroup row>
                <TextField value={currentVacation} onChange={(e: any) => {
                    setCurrentVacation(e?.target?.value)
                }} id="standard-basic" label="Insert Vacation" />
                <Button onClick={addVacationHandler} variant="contained" color="primary" disableElevation>
                    Add
                </Button>
                <Button onClick={setCounterHandler} variant="contained" color="primary" disableElevation>
                    increase
                </Button>
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
            {vacations.map((v: string) => {
                return <ListItem>
                    <ListItemText
                        primary={v}
                    />
                </ListItem>
            })}
        </List>
    }
}
