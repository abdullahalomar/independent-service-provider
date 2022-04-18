import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialSignin from '../SocialSignin/SocialSignin';

const Register = () => {
  const [agree, setAgree] = useState(false);
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
      
       if (agree) {
        createUserWithEmailAndPassword(email, password)
       }
        
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
    <Form.Check onClick={()=>setAgree(!agree)} type="checkbox" className={agree ? 'text-primary' : 'text-danger'} label="Accept Fitness Heroes Terms And Conditions" />
  </Form.Group>
  <Button disabled={!agree} className='w-50 d-block mx-auto mb-2' variant="info" type="submit">
    Register
  </Button>
            </Form>
        <h6 className='mt-3'>New to Fitness Heroes?<Link to={'/login'} className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}> Please Login</Link></h6>
        <SocialSignin></SocialSignin>
        </div>
    );
};

export default Register;