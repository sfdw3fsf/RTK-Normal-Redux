
const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createAt: ''
}
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/create':
      return { ...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createAt: action.payload.createAt }
    case 'customer/update':
      return { ...state, fullName: action.payload }
    default: return state
  }
}
export function createCustomer(fullName, nationalID) {
  return { type: 'customer/create', payload: { fullName, nationalID, createAt: new Date().toISOString() } }
}
export function updateCustomer(fullName) {
  return {
    type: 'customer/update', payload: fullName
  }
}