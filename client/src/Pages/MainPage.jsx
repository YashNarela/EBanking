import React, { useState } from 'react'

import "../css/PageAfterLogin.css"

import chip from "../assets/chip.png"

import axios from 'axios'

import balance from "../assets/balance.jpg"
import Table from 'react-bootstrap/Table';
import { MdAccountBalance } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { TbTransfer } from "react-icons/tb";
import { FaMoneyCheck } from "react-icons/fa";


const PageAfterLogin = () => {

  const [accountblc, setAccountblc] = useState(false)

  const [pinScreen, setPinScreen] = useState(false)

  const [pinhandle, setPinhandle] = useState("")


  const [userDetails, setUserDetails] = useState(false)


  const [trans, setTrans] = useState(false)

  const [trf, setTrf] = useState(false)

  const [trfvalue, setTrfValue] = useState({})




  async function TrfValueHandle(e) {


    const { name, value } = e.target;

    console.log(trfvalue);



    setTrfValue((prev) => ({ ...prev, [name]: value }))



  }

  async function PayHandle(e) {


    e.preventDefault();

    try {

    console.log(trfvalue);
    

    } catch (error) {




    }
  }



  async function UserAccountInfo() {


    try {



    } catch (error) {



    }


  }




  async function BalanceChck() {

    setAccountblc(prev => !prev)

  }


  async function SubmitHandler(e) {


    e.preventDefault()

    console.log(pinhandle);


    setAccountblc((prev) => !prev)

    setPinScreen((prev) => !prev)

    try {



    } catch (error) {

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

            <h3 className='number' >012130401</h3>

            <h3 className='valid' > valid <br />

              thru <span>
                10/28
              </span>
            </h3>

            <h5 className='cardholder' >
              yash Bro
            </h5>

          </div>


          <div className="face back">


            <div className="blackbar"></div>

            <div className="cvvtext">

              <h5>Authorized Signature not valid unless  signed</h5>

              <div className="whitebar"></div>
              <div className="cvv">123</div>

            </div>

            <p className='text' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, totam?</p>


          </div>


        </div>


      </header>




      <div className='iconsbox' >

        <div className='iconFlexCol' >
          <div className='iconFullBox' >
            <MdAccountBalance onClick={BalanceChck} className=' iconboxSIzeIcon' />
            <h4 className='iconBoxH4' >Check Bank Balance</h4>
          </div>


          <div className='iconFullBox'  >
            <FaMoneyCheck onClick={() => { setUserDetails(prev => !prev) }} className=' iconboxSIzeIcon' />
            <h4 className='iconBoxH4' >Account Details</h4>
          </div>


        </div>

        <div className='iconFlexCol' >

          <div className='iconFullBox' >
            <FaRupeeSign onClick={() => {

              setTrans(prev => !prev)
            }} className=' iconboxSIzeIcon' />
            <h4 className='iconBoxH4' > Transcition History</h4>

          </div>
          <div className='iconFullBox' >
            <TbTransfer onClick={() => { setTrf(prev => !prev) }} className=' iconboxSIzeIcon' />
            <h4 className='iconBoxH4' > transfer Money </h4>

          </div>


        </div>



      </div>


      <div className='AcctBalance' >


        {

          accountblc ? (<>

            <div className='AcctBalanceCard' >


              <div className='AcctBalanceWindow' >


                <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }} >
                  <p>Enter 4 digit pin</p>

                  <div className='crossBox' onClick={() => { setAccountblc((prev) => !prev) }} >
                    X
                  </div>
                </div>

                <input type="text" placeholder='Enter Pin' onChange={(e) => { setPinhandle(e.target.value) }} />
                <br />

                <p style={{ cursor: "pointer" }} >Reset Pin ?</p>

                <button id='AcctBalanceWindowBtn' onClick={SubmitHandler} >Submit</button>



              </div>

            </div>



          </>) : (<>



            {

              !accountblc && pinScreen ? (
                <>


                  <div className='accountBalaanceCard' >


                    <p className='crossBoxpara' onClick={() => { setPinScreen(prev => !prev) }}  > x  </p>

                    <div className='accountBalaanceCardOuter'>


                      <img src={balance} width="90px" style={{ borderRadius: "50%" }} alt="" />

                      <br />


                      <div className='accountBalaanceBalanceShow' >

                      </div>


                    </div>



                  </div>



                </>


              ) : (
                <>

                </>
              )

            }



          </>)

        }


      </div>







      {


        userDetails ? (

          <>
            <div className='userInfoAccDetailsOuterDiv' >

              <p className='crossBoxpara' onClick={() => { setUserDetails(prev => !prev) }}     >X</p>

              <div className='userInfoInsideDiv' >

                <div className='AcNoOuterDiv' >
                  <h3 className='AcNo' >Account Number:</h3>

                </div>

                <div className='AcIfsc' >


                  <h3 className='AcNo' >  Ifsc Code :  </h3>

                </div>


                <div className='AcBranch'>

                  <h3 className='AcNo'   > Branch : </h3>
                </div>



              </div>

            </div>


          </>
        ) : (
          <>



          </>
        )

      }





      {


        trans ? (
          <>

            <div className='trnsOuter'>


              <div className='trnsInner' >

                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Tr Id</th>
                      <th>Amount</th>
                      <th>Credit</th>
                      <th>Debit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>


              </div>



            </div>

          </>
        )
          : (

            <>




            </>
          )


      }



      {



        trf ? (<>



          <div className="trfouterDiv">




            <p className='crossBoxpara' onClick={() => { setTrf(prev => !prev) }}  > x  </p>


            <div className="trfInnerDiv">



              <h3>Transfer Money</h3>

              <label htmlFor="">Enter Account Number : </label>
              <input type="text" placeholder='Enter Account Number' onChange={TrfValueHandle} name='AcNo' />


              <label htmlFor="">Enter Amount : </label>

              <input type="text" placeholder='Enter Amount' name="Amount" onChange={TrfValueHandle} />


              <button onClick={PayHandle}    >Pay</button>



            </div>

          </div>


        </>) : (

          <>


          </>
        )




      }






    </div>





  )
}

export default PageAfterLogin 