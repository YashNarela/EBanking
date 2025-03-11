
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import { useNavigate } from "react-router"

import axios from "axios"
const Register = () => {



    const navigate = useNavigate()
    const [inp, setInp] = useState({})
    const [filectrl, setFilectrl] = useState([])


    const handleData = async (e) => {

        const { name, type, value } = e.target


        setInp((prev) => ({ ...prev, [name]: value }))

        console.log(inp);


    }

    const handleImage = async (e) => {

        let filedata = e.target.files;

        setFilectrl([...filectrl, ...filedata])

        console.log(filectrl);




    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let api = `http://localhost:8000/bank/register`


        try {


            let formdata = new FormData()
            for (let key in inp) {

                formdata.append(key, inp[key])
            }
            for (let i = 0; i < filectrl.length; i++) {
                formdata.append("image", filectrl[i])
            }


            let rspData = await axios.post(api, formdata)

            console.log(rspData.data.rsp);

            toast.success(rspData.data.success)

     








        } catch (error) {

            console.log(error);

        }

    }



    return (
        <>

            <div>
                <Form className='CardForm' onSubmit={handleSubmit} >



                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Profile Image</Form.Label>
                        <Form.Control type="file" name='images' onChange={handleImage} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name='frstname' placeholder="FirstName" onChange={handleData} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name='lastname' placeholder="Last Name" onChange={handleData} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" onChange={handleData} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>




                    <Form.Check

                        name='gender'
                        value="Male"
                        type="radio"
                        onChange={handleData}

                        label={` Male  `}

                    />
                    <Form.Check
                        name='gender'
                        value="Female"
                        type="radio"
                        onChange={handleData}
                        label={` Female `}

                    />



                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" onChange={handleData} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name='cnfpassword' placeholder="Password" onChange={handleData} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Dob</Form.Label>
                        <Form.Control type="date" name='date' placeholder="Date" onChange={handleData} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name='address' placeholder="Address" onChange={handleData} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Enter Gov Id</Form.Label>
                        <Form.Control type="text" name='govid' placeholder=" Eg Adhar Number , Pan Card Number" onChange={handleData} />
                    </Form.Group>

                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Adhar Card</Form.Label>
                        <Form.Control type="file" name='adharfile' onChange={handleImage} />
                    </Form.Group>


                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Signature</Form.Label>
                        <Form.Control type="file" name='signfile' onChange={handleImage} />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label=" Agree Terms & Condition" name='chk' onChange={handleData} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>

                <ToastContainer />
            </div>
        </>
    )
}

export default Register
