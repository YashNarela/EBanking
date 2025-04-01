import React from 'react'

import axios from 'axios'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { setRspObj } from '../redux/AccSlice'

const AddMoeny = () => {





    const rspObj = useSelector((state) => state.Acc.rspObj)

    const dispatch = useDispatch()
    const [status, setStatus] = useState("credit")



    const [trfvalue, setTrfValue] = useState({})

    const navigate = useNavigate()


    async function TrfValueHandle(e) {


        const { name, value } = e.target;

        console.log(trfvalue);


        setTrfValue((prev) => ({ ...prev, [name]: value, status: status }))



    }



    async function PayHandle(e) {


        e.preventDefault();


        try {

            console.log(trfvalue);

            const baseUrl = import.meta.env.VITE_BASE_URL;

            let api = `${baseUrl}/bank/addmoney`

            let rsp = await axios.post(api, trfvalue);
            console.log(rsp.data);

            dispatch(setRspObj(rsp.data.objdata))


        } catch (error) {




        }
    }





    return (
        <>



            <div className="trfouterDiv">




                <p className='crossBoxpara' onClick={() => { navigate('/userpage') }}  > x  </p>


                <div className="trfInnerDiv">



                    <h3>Add Money</h3>

                    <label htmlFor="">Enter Account Number : </label>
                    <input type="text" placeholder='Enter Account Number' onChange={TrfValueHandle} name='myAc' />


                    <label htmlFor="">Enter Amount : </label>

                    <input type="text" placeholder='Enter Amount' name="myAmount" onChange={TrfValueHandle} />


                    <button onClick={PayHandle}  >Add Money</button>



                </div>

            </div>



        </>
    )
}

export default AddMoeny