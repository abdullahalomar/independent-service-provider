import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialSignin from '../SocialSignin/SocialSignin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

   if (user) {
       navigate('/home')
   }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='container w-50 my-4'>
            <h2 className='text-center text-info mb-4'>Please Register</h2>
            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-4" controlId="formBasicName">
    {/* <Form.Label>Your name</Form.Label> */}
    <Form.Control type="text" name='text' placeholder="Enter your name" required/>
  </Form.Group>
  <Form.Group className="mb-4" controlId="formBasicEmail">
    {/* <Form.Label>Email address</Form.Label> */}
    <Form.Control type="email" name='email' placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    {/* <Form.Label>Password</Form.Label> */}
    <Form.Control type="password" name='password' placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
    Register
  </Button>
            </Form>
        <p className='mt-3'>New to Fitness Heroes?<Link to={'/login'} className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}> Please Login</Link></p>
        <SocialSignin></SocialSignin>
        </div>
    );
};

export default Register;