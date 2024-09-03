import { type } from "@testing-library/user-event/dist/type";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
}
export default function accountReducer(state = initialState, action) {
  switch (action.type) {
    case 'account/deposit':
      // console.log(action.payload.amount);

      return { ...state, balance: action.payload + state.balance, isLoading: false }
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload }
    case 'account/requestLoan':
      if (state.loan > 0) return state; return { ...state, loan: action.payload.amount, loanPurpose: action.payload.purpose }
    case 'account/payLoan':
      return { ...state, loan: 0, loanPurpose: '' }
    case 'account/converting':
      return { ...state, isLoading: true }
    default:
      return state
  }
}

export function deposit(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount }
  return async function (dispatch, getState) {
    dispatch({ type: 'account/converting' })
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`)
    const data = await res.json();
    console.log(data)
    const converted = data.rates.USD
    dispatch({ type: 'account/deposit', payload: converted })

  }
}
export function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount }
}
export function requestLoan(amount, purpose) {
  return { type: 'account/requestLoan', payload: { amount, purpose } }
}
export function payLoan() {
  return { type: 'account/payLoan' }
}