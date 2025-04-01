import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import balance from "../assets/balance.jpg"
import { useSelector, useDispatch } from 'react-redux'

import { setRspObj } from '../redux/AccSlice'


const BalanceCard = () => {

    const navigate = useNavigate()


    const rspObj = useSelector((state) => state.Acc.rspObj)

    const [bal,setBal]=useState(0)

    const [populateData,setPopulateData]=useState([])

    const dispatch = useDispatch()

    useEffect(() => {


        updateRsp()

    }, [])

    async function updateRsp() {


        try {

            const baseUrl = import.meta.env.VITE_BASE_URL;

            let api = `${baseUrl}/bank/getdata`

            let rsp = await axios.get(api);

            console.log(rsp.data.rsp);

            dispatch(setRspObj(rsp.data.rsp))



            setPopulateData(rsp.data.rsp.trans)








        } catch (error) {

            console.log(error);

        }
    }


    let balance=0
    let ans=populateData.map((ele)=>(


        (ele.status === "credit") ? balance += ele.amount : balance += ele.amount

    ))




    return (
        <div>




            <div className='accountBalaanceCard' >


                <p className='crossBoxpara' onClick={() => { navigate('/userpage') }}  > x  </p>

                <div className='accountBalaanceCardOuter'>


                    <img src={balance} width="90px" style={{ borderRadius: "50%" }} alt="" />

                    <br />

                    <h3>Bank Balance</h3>


                    <div className='accountBalaanceBalanceShow' >

                        {balance}

                    </div>


                </div>



            </div>




        </div>
    )
}

export default BalanceCard