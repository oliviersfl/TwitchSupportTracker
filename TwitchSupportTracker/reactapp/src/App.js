import React, { Component } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navigation from './Components/Navigation';

const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: theme.spacing(3),
    },
    header: {
        backgroundColor: '#BA68C8',  // light purple
        color: 'white',
        fontWeight: 'bold',  // makes the text bold
        fontSize: '1.2rem',  // makes the text larger
    },
}));

const TableComponent = ({ transactions }) => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
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
        </div>
    );
};

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { transactions: [], loading: true };
    }

    componentDidMount() {
        this.populateTransactionData();
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : <TableComponent transactions={this.state.transactions} />;

        return (
            <div className="App">
                <Navigation />
                {contents}
            </div>
        );
    }

    async populateTransactionData() {
        const response = await fetch('api/Transaction');
        const data = await response.json();
        this.setState({ transactions: data, loading: false });
    }
}
