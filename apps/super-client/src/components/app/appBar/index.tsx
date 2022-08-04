import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import { IRoute, routes } from "../../../App";
import css from "./style.module.css"
import { Switch } from '@material-ui/core';
import { SettingsContext } from '../../providers/settingsProvider';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const context = useContext(SettingsContext)

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {routes.filter(r => r.isVisible).map((r: IRoute) => {
                            return <span key={r.path} className={css.linkButton}>
                                <Link to={r.path}> {r.text.toUpperCase()}</Link>
                            </span>
                        })}
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <Switch
                        checked={context.isUtc}
                        onChange={() => {
                            console.log("before dispatch")
                            // @ts-ignore
                            const { dispatch } = context;
                            console.log(context)
                            if (typeof dispatch !== "function") return
                            dispatch({ type: "SET_ISUTC" })
                        }}
                        name="is utc"
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}
