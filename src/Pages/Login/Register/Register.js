import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }
    return (
        <div className='container w-50 my-5'>
            <h2 className='text-center text-info'>Please Register</h2>
            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Label>Your name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
            </Form>
            <p>New to Fitness Heroes?<Link to={'/login'} className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}> Please Login</Link></p>
        </div>
    );
};

export default Register;