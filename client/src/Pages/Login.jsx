import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Login = () => {
  return (
    <>

      <Form className='loginForm' >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter UserName" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
