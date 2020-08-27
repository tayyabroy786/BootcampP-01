import React from 'react';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExprenses } from './components/IncomeExprenses'
import { TransactionList } from './components/TransactionList'
import { AddTranssaction } from './components/AddTranssaction'

import { GlobalProvider } from './context/GlobalState'

import './App.css';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExprenses />
        <TransactionList />
        <AddTranssaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
