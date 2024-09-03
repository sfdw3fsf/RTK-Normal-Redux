import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  fullName: '',
  nationalID: '',
  createAt: ''
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    create: {
      prepare(fullName, nationalID, createAt) {
        return { payload: { fullName, nationalID, createAt } }
      },
      reducer(state, action) {

        state.fullName = action.payload.fullName;
        state.nationalID = action.payload.nationalID;
        // state.createAt = action.payload.createAt

      }
    },
    updateCustomer(state, action) {
      state.fullName = action.payload
    }
  }
})
export default customerSlice.reducer;
export const { create, updateCustomer } = customerSlice.actions
// export default function customerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case 'customer/create':
//       return { ...state, fullName: action.payload.fullName, nationalID: action.payload.nationalID, createAt: action.payload.createAt }
//     case 'customer/update':
//       return { ...state, fullName: action.payload }
//     default: return state
//   }
// }
// export function createCustomer(fullName, nationalID) {
//   return { type: 'customer/create', payload: { fullName, nationalID, createAt: new Date().toISOString() } }
// }
// export function updateCustomer(fullName) {
//   return {
//     type: 'customer/update', payload: fullName
//   }
// }