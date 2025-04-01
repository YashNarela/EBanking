import { configureStore } from '@reduxjs/toolkit'

import myReducer from "../redux/AccSlice"

export const store = configureStore({
    reducer: {


        Acc:myReducer

    },
})