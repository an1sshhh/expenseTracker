import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ],
  totalIncome: 0,
  totalExpense: 0,
  balance: 0
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      calculateTotals(state);
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
      calculateTotals(state);
    }
  }
});

// const calculateTotals = (state) => {
//   state.totalIncome = state.transactions
//     .filter(transaction => transaction.amount > 0)
//     .reduce((acc, transaction) => acc + transaction.amount, 0);

//   state.totalExpense = state.transactions
//     .filter(transaction => transaction.amount < 0)
//     .reduce((acc, transaction) => acc + transaction.amount, 0) * -1;

//   state.balance = state.totalIncome - state.totalExpense;
// };

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;

export default transactionsSlice.reducer;
