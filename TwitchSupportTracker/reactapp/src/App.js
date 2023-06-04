import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Dashboard from './Components/Dashboard';
import AddTransaction from './Components/AddTransaction';

export default function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/streamers" element={<StreamersPage />} />
                    <Route path="/transactions" element={<TransactionsPage />} />
                    <Route path="/add-transaction" element={<AddTransactionPage />} />
                    <Route path="/analytics" element={<AnalyticsPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

function HomePage() {
    return (
        <div>
            <Dashboard />
        </div>
    );
}

function StreamersPage() {
    return <h1>Streamers Page</h1>;
}

function TransactionsPage() {
    return <h1>Transactions Page</h1>;
}

function AddTransactionPage() {
    return (
        <div>
            <AddTransaction />
        </div>
    );
}

function AnalyticsPage() {
    return <h1>Analytics Page</h1>;
}

function SettingsPage() {
    return <h1>Settings Page</h1>;
}
