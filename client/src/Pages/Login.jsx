import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
const Login = () => {

  const [inp, setInp] = useState({})



  const handleInput = (e) => {

    let { name, value } = e.target;

    setInp((prev) => ({ ...prev, [name]: value }))


  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    console.log(inp);


    let api =`http://localhost:8000/bank/`

    try {
      

    } catch (error) {
      
    }
  






  }

  return (
    <>

      <Form className='loginForm'  onSubmit={handleSubmit} >
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
