

import "../css/UserInfo.css"

import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';

import { useSelector, useDispatch } from 'react-redux'

import { setRspObj } from '../redux/AccSlice'

import axios from "axios"
const UserInfoPage = () => {




    const navigate = useNavigate();


    const rspObj = useSelector((state) => state.Acc.rspObj)

    const dispatch = useDispatch()

    const [tabledata, setTabledata] = useState([])


    useEffect(() => {

        HandleData()

    }, [])


    async function HandleData() {





        const baseUrl = import.meta.env.VITE_BASE_URL;

        let api = `${baseUrl}/bank/getdata`

        let rsp = await axios.get(api);

        console.log(rsp.data.rsp);

        dispatch(setRspObj(rsp.data.rsp))



        setTabledata(rsp.data.rsp.trans)








    }










    return (
        <>


            <div className="UserOuterDiv">




                <div className="username flexi ">


                    <h5>Name:</h5>

                    <h5>{rspObj.frstname + rspObj.lastname}</h5>

                </div>

            

                <div className="useremail   flexi">

                    <h5>
                        Email:
                    </h5>

                    <h5>
                        {rspObj.email}
                    </h5>

                </div>



                <div className="useradress flexi">

                 <h5>
                    Adress:
                 </h5>

                    <h5>
                        {rspObj.address}
                    </h5>
                </div>
                <div className="usergovid  flexi">

                        <h5>
                            GovId:
                        </h5>

                        <h5>
                            {
                            rspObj.govid
                            }
                        </h5>
                </div>



            </div>







        </>
    )
}

export default UserInfoPage