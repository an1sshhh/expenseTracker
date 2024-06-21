import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTransaction, deleteTransaction } from '../features/counterSlice';

function TransactionList() {
  const transactions = useSelector(state => state.transactions.transactions);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (
          <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{transaction.amount < 0 ? '-' : '+'}₹{Math.abs(transaction.amount)}</span>
            <button onClick={() => dispatch(deleteTransaction(transaction.id))} className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
