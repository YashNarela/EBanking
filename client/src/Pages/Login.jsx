import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import { useNavigate } from 'react-router';
const Login = () => {

  const navigate = useNavigate()

  const [inp, setInp] = useState({})



  const handleInput = (e) => {

    let { name, value } = e.target;

    setInp((prev) => ({ ...prev, [name]: value }))

    console.log(inp);



  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    console.log(inp);



    const baseUrl = import.meta.env.VITE_BASE_URL;

    let api = `${baseUrl}/bank/login`



    try {



      let dataRsp = await axios.post(api, inp);


      localStorage.setItem("token", JSON.stringify(dataRsp.data.token))


      navigate("/userpage")



    } catch (error) {

      console.log(error);

    }







  }

  return (
    <>

      <Form className='loginForm' onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter UserName" name='email' onChange={handleInput} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password" name='password' onChange={handleInput} />
        </Form.Group>

        <div className='btnBox' >

          <button className='loginBtn' type="submit">
            Login
          </button>
          <Form.Text className="text-muted" >
            New Users ?
          </Form.Text>
        </div>

      </Form>

    </>
  )
}

export default Login
