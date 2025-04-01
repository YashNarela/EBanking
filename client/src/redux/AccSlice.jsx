import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    rspObj: {}
}


const AccSLice = createSlice(
    {

        name: 'Acc',

        initialState,

        reducers: {


            setRspObj: (state, action) => {

                console.log(action.payload);
                

                state.rspObj = action.payload

            }

        }


    }
)


export const { setRspObj } = AccSLice.actions

export default AccSLice.reducer