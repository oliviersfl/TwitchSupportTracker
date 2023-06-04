import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { DatePicker } from '@mui/lab'; // Assuming you want to use the DatePicker component from MUI

export default function AddTransaction() {
    const [streamer, setStreamer] = useState('');
    const [transactionType, setTransactionType] = useState('');
    const [amountSpent, setAmountSpent] = useState('');
    const [bits, setBits] = useState('');
    const [transactionDate, setTransactionDate] = useState(null);
    const [currency, setCurrency] = useState('');
    const [notes, setNotes] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        // You can access the form field values from the component state variables (streamer, transactionType, amountSpent, etc.)
    };

    return (
        <form onSubmit={handleFormSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <TextField
                label="Streamer"
                variant="outlined"
                fullWidth
                value={streamer}
                onChange={(e) => setStreamer(e.target.value)}
                margin="normal"
            />
            <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel id="transaction-type-label">Transaction Type</InputLabel>
                <Select
                    labelId="transaction-type-label"
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                    label="Transaction Type"
                >
                    <MenuItem value="Subscription">Subscription</MenuItem>
                    <MenuItem value="Gifted Sub">Gifted Sub</MenuItem>
                    <MenuItem value="Cheer">Cheer</MenuItem>
                    <MenuItem value="Tip">Tip</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Amount Spent"
                variant="outlined"
                fullWidth
                value={amountSpent}
                onChange={(e) => setAmountSpent(e.target.value)}
                margin="normal"
            />
            <TextField
                label="Bits"
                variant="outlined"
                fullWidth
                value={bits}
                onChange={(e) => setBits(e.target.value)}
                margin="normal"
            />
            <DatePicker
                label="Transaction Date"
                value={transactionDate}
                onChange={(date) => setTransactionDate(date)}
                renderInput={(params) => <TextField {...params} variant="outlined" />}
                fullWidth
                margin="normal"
            />
            <FormControl variant="outlined" fullWidth margin="normal">
                <InputLabel id="currency-label">Currency</InputLabel>
                <Select
                    labelId="currency-label"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    label="Currency"
                >
                    <MenuItem value="USD">USD</MenuItem>
                    <MenuItem value="EUR">EUR</MenuItem>
                    <MenuItem value="MUR">MUR</MenuItem>
                </Select>
            </FormControl>
            <TextField
                label="Notes"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                margin="normal"
            />
            <Button variant="contained" color="primary" type="submit">
                Submit
            </Button>
        </form>
    );
}
