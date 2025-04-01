import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
const AccountDetails = () => {


        const navigate=useNavigate()
    
    
          const rspObj = useSelector((state) => state.Acc.rspObj)
        
          const dispatch = useDispatch()


  return (
    <>
    
          <div className='userInfoAccDetailsOuterDiv' >

              <p className='crossBoxpara' onClick={() => { navigate('/userpage') }}     >X</p>

              <div className='userInfoInsideDiv' >

                  <div className='AcNoOuterDiv' >
                      <h3 className='AcNo' >Account Number:</h3>

                      <span>{rspObj.acno}</span>

                  </div>

                  <div className='AcIfsc' >


                      <h3 className='AcNo' >  Ifsc Code :  </h3>

                      <span>{rspObj.ifsc}</span>

                  </div>


                  <div className='AcBranch'>

                  
                  </div>



              </div>

          </div>
    
    </>
  )
}

export default AccountDetails