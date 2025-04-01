import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router';

import { useSelector, useDispatch } from 'react-redux'

import { setRspObj } from '../redux/AccSlice'

import axios from "axios"

const Transcition = () => {


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



    let ans = tabledata.map((ele) => (


        <>

            <tr>


                <td>

                    {ele.acno}
                </td>


                <td>
                    {
                        ele.amount
                    }
                </td>

                <td>
                    {ele.status === "credit" ? ele.status : "Na"}
                </td>

                <td>
                    {ele.status === "debit" ? ele.status : "Na"}
                </td>

            </tr>


        </>


    ))









    return (
        <>

            <div className='trnsOuter'>


                <p className='crossBoxpara' style={{ position: "absolute", top: "-40px" }} onClick={() => { navigate('/userpage') }}     >X</p>
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

                            {ans}
                        </tbody>
                    </Table>


                </div>



            </div>


        </>
    )
}

export default Transcition