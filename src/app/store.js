import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from '../features/counterSlice';

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

export default store;
