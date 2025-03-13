import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Login = () => {

  const [inp, setInp] = useState({})



  const handleInput=(e)=>{

    let { name, value } = e.target;

    


  }

  const handleSubmit=(e)=>{

    const {name,value}=e.target;

  }

  return (
    <>

      <Form className='loginForm' >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter UserName"  name='email'  onChange={handleInput} />
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
          <Form.Text className="text-muted">
            New Users ?
          </Form.Text>
        </div>

      </Form>

    </>
  )
}

export default Login
