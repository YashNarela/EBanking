import React, { useEffect, useState } from 'react'

import "../css/PageAfterLogin.css"

import chip from "../assets/chip.png"

import axios from 'axios'

import { FaUserCircle } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { SiMoneygram } from "react-icons/si";
import { FaRupeeSign } from "react-icons/fa";
import { TbTransfer } from "react-icons/tb";
import { FaMoneyCheck } from "react-icons/fa";
import { Outlet, useNavigate } from 'react-router'

import { useSelector, useDispatch } from 'react-redux'

import { setRspObj } from '../redux/AccSlice'


const PageAfterLogin = () => {

  const navigate = useNavigate()



  const rspObj = useSelector((state) => state.Acc.rspObj)

  const dispatch = useDispatch()


  useEffect(() => {


    UserAuth()



  }, [])


  async function UserAuth() {


    try {

      let token = JSON.parse(localStorage.getItem("token"))

      if (!token) {


        navigate("/login")

      }

      console.log(token);




      const baseUrl = import.meta.env.VITE_BASE_URL;

      let api = `${baseUrl}/bank/auth/?token=${token}`

      let rspdata = await axios.post(api, null, { headers: { "token": token } })


      console.log(rspdata.data.rsp);

      dispatch(setRspObj(rspdata.data.rsp))





    } catch (error) {


      console.log(error);

    }

  }




  return (
    <div className='MainDivAccountSc' >





      <header>

        <div className="card">



          <div className="face front">


            <h3 className="debit">


              Debit Card
            </h3>


            <h3 className='bank' >
              Liberty Bank
            </h3>

            <img src={chip} alt="" className='chip' />

            <h3 className='number' >{rspObj.accno}</h3>

            <h3 className='valid' > valid <br />

              thru <span>
                10/28
              </span>
            </h3>

            <h5 className='cardholder' >
          
              {rspObj.frstname + rspObj.lastname}
            </h5>

          </div>


          <div className="face back">


            <div className="blackbar"></div>

            <div className="cvvtext">

              <h5>Authorized Signature not valid unless  signed</h5>

              <div className="whitebar"></div>
              <div className="cvv">{rspObj.pin}</div>

            </div>

            <p className='text' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, totam?</p>


          </div>


        </div>


      </header>




      <div className='iconsbox' >

        <div className='iconFlexCol' >
          <div className='iconFullBox' >
            <MdAccountBalance onClick={() => navigate("/userpage/balance")} className=' iconboxSIzeIcon' />
            <h4 className='iconBoxH4' >Check Bank Balance</h4>
          </div>


          <div className='iconFullBox'  >
            <FaMoneyCheck onClick={() => { navigate("/userpage/account") }} className=' iconboxSIzeIcon' />
            <h4 className='iconBoxH4' >Account Details</h4>
          </div>

          <div className='iconFullBox' >
            <FaRupeeSign onClick={() => {

              navigate('/userpage/trans')
            }} className=' iconboxSIzeIcon' />
            <h4 className='iconBoxH4' >  transaction History</h4>

          </div>


        </div>

        <div className='iconFlexCol' >

 
          <div className='iconFullBox' >
            <TbTransfer onClick={() => { navigate('/userpage/transfer') }} className=' iconboxSIzeIcon' />
            <h4 className='iconBoxH4' > transfer Money </h4>

          </div>
          <div className='iconFullBox' >
            <SiMoneygram onClick={() => { navigate('/userpage/addmoney') }} className=' iconboxSIzeIcon' />
            <h4 className='iconBoxH4' > Add Money </h4>

          </div>
          <div className='iconFullBox' >
            <FaUserCircle onClick={() => { navigate('/userpage/userinfo') }} className=' iconboxSIzeIcon' />
            <h4 className='iconBoxH4' > User Info </h4>

          </div>


        </div>



      </div>


      <Outlet />






    </div>





  )
}

export default PageAfterLogin 