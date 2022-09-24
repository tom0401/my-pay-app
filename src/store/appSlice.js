import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    inPay: false,
    payNumber: 0
}
export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        storeInPay: (state, action) => {
            state.inPay = action.payload
        },
        storePayNumber: (state, action) => {
            state.payNumber = action.payload
        }
    }
})

export const {
    storeInPay,
    storePayNumber
} = appSlice.actions

export default appSlice.reducer
