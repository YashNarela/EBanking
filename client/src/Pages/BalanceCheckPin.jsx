import React from 'react'
import "../css/PageAfterLogin.css"
import axios from 'axios'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'


import { useSelector, useDispatch } from 'react-redux'

import { setRspObj } from '../redux/AccSlice'


const BalanceCheckPin = () => {


  const [pinhandle, setPinhandle] = useState("")

  const navigate = useNavigate()
  const rspObj = useSelector((state) => state.Acc.rspObj)

  const dispatch = useDispatch()



  async function SubmitHandler(e) {


    e.preventDefault()

    console.log(pinhandle);



    try {


      if (pinhandle !== rspObj.pin) {

        alert("Pin Is Not Valid")

      }

      else {

        navigate('/userpage/pin')
      }





    } catch (error) {

      console.log(error);

    }
  }


  return (
    <div>




      <div className='AcctBalance' >




        <div className='AcctBalanceCard' >


          <div className='AcctBalanceWindow' >


            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }} >
              <p>Enter 4 digit pin</p>

              <div className='crossBox' onClick={() => { navigate('/userpage') }}   >
                X
              </div>
            </div>

            <input type="text" placeholder='Enter Pin' onChange={(e) => { setPinhandle(e.target.value) }} />
            <br />

            <p style={{ cursor: "pointer" }} >Reset Pin ?</p>

            <button id='AcctBalanceWindowBtn' onClick={SubmitHandler}  >Submit</button>



          </div>

        </div>



      </div>
    </div>
  )
}

export default BalanceCheckPin