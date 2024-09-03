// import { createStore, combineReducers, applyMiddleware } from 'redux';
import accountReducer from './accounts/accountSlice';
import customerReducer from './customers/customerSlice';
// import { thunk } from 'redux-thunk';
// import { composeWithDevTools } from '@redux-devtools/extension';
// import {configure}
import { configureStore } from '@reduxjs/toolkit';
// const rootReducer = combineReducers({ account: accountReducer, customer: customerReducer })
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer
  }
})
// store.dispatch({ type: 'account/deposit', payload: 500 })
// store.dispatch({ type: 'account/withdraw', payload: 200 })
// store.dispatch({ type: 'account/requestLoan', payload: { amount: 20, purpose: 'Buy Candy' } });

export default store;
// store.dispatch(deposit(500));
// console.log(store.getState());
// store.dispatch(withdraw(300));
// console.log(store.getState());
// store.dispatch(requestLoan(50, 'Buy a car'));
// console.log(store.getState());
// store.dispatch(createCustomer('Van Huy', '222'));
// console.log(store.getState());