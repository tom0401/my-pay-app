import {configureStore} from '@reduxjs/toolkit'
import appSlice from './appSlice'

const rootStore = configureStore({
    reducer: {
        app: appSlice
    }
})
export default rootStore

