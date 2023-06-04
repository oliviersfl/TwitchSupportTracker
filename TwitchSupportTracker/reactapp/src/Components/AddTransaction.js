import React, { useState } from 'react';
import { TextField, Button, Grid, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function TransactionForm() {
    const classes = useStyles();
    const [streamer, setStreamer] = useState("");
    const [type, setType] = useState("");
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("");
    const [notes, setNotes] = useState("");

    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Streamer"
                        variant="outlined"
                        fullWidth
                        value={streamer}
                        onChange={(e) => setStreamer(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel id="type-label">Type</InputLabel>
                        <Select
                            labelId="type-label"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            label="Type"
                        >
                            <MenuItem value={"Subscription"}>Subscription</MenuItem>
                            <MenuItem value={"Gift"}>Gift</MenuItem>
                            <MenuItem value={"Cheers"}>Cheers</MenuItem>
                            <MenuItem value={"Donation"}>Donation</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        label="Amount"
                        variant="outlined"
                        fullWidth
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel id="currency-label">Currency</InputLabel>
                        <Select
                            labelId="currency-label"
                            value={currency}
                            onChange={(e) => setCurrency(e.target.value)}
                            label="Currency"
                        >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"EUR"}>EUR</MenuItem>
                            <MenuItem value={"MUR"}>MUR</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Notes"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}
