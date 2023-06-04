import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

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
    appBar: {
        background: purple[700],
    }
}));

export default function Navigation() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Twitch Support Tracker
                    </Typography>
                    <Button color="inherit" href="/">Home</Button>
                    <Button color="inherit" href="/streamers">Streamer Details</Button>
                    <Button color="inherit" href="/transactions">Transactions</Button>
                    <Button color="inherit" href="/add-transaction">Add Transaction</Button>
                    <Button color="inherit" href="/analytics">Analytics</Button>
                    <Button color="inherit" href="/settings">Settings</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
