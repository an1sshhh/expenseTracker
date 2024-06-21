import React from 'react';
import { useSelector } from 'react-redux';

export default function IncomeExpenses() {
  const transactions = useSelector(state => state.transactions.transactions);

  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, amount) => acc + amount, 0)
    .toFixed(2);

  const expense = amounts
    .filter(amount => amount < 0)
    .reduce((acc, amount) => acc + amount, 0) * -1
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+₹{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-₹{expense}</p>
      </div>
    </div>
  );
}
