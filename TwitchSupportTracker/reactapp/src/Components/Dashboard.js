import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: theme.spacing(3),
    },
    header: {
        background: blue[700],
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.2rem',
    },
}));

const Dashboard = () => {
    const classes = useStyles();
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        populateTransactionData();
    }, []);

    const populateTransactionData = async () => {
        const response = await fetch('api/Transaction');
        const data = await response.json();
        setTransactions(data);
        setLoading(false);
    };

    return (
        <div className={classes.content}>
            {loading ? (
                <p>
                    <em>
                        Loading...
                    </em>
                </p>
            ) : (
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.header}>Transaction Type</TableCell>
                                <TableCell className={classes.header}>Amount Spent</TableCell>
                                <TableCell className={classes.header}>Bits</TableCell>
                                <TableCell className={classes.header}>Transaction Date</TableCell>
                                <TableCell className={classes.header}>Currency</TableCell>
                                <TableCell className={classes.header}>Notes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {transactions.map((transaction) => (
                                <TableRow key={transaction.id}>
                                    <TableCell>{transaction.transactionType}</TableCell>
                                    <TableCell>{transaction.amountSpent}</TableCell>
                                    <TableCell>{transaction.bits}</TableCell>
                                    <TableCell>{transaction.transactionDate}</TableCell>
                                    <TableCell>{transaction.currency}</TableCell>
                                    <TableCell>{transaction.notes}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};

export default Dashboard;
