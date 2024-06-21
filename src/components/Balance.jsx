import React from 'react';
import { useSelector } from 'react-redux';

export default function Balance() {
  const transactions = useSelector(state => state.transactions.transactions);

  const balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <>
      <h4>Your Balance</h4>
      <h4>₹{balance.toFixed(2)}</h4>
    </>
  );
}
