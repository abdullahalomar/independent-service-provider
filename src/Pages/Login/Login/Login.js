import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialSignin from '../SocialSignin/SocialSignin';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    
    if (user) {
      navigate(from, { replace: true });
   }
  
  if (error) {
    errorElement = <div>
      <h5 className='text-danger'>Error: {error?.message}</h5>
    </div>
  }
    
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

       signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = event => {
        navigate('/register');
    }
    return (
        <div className='container w-50 my-4'>
            <h2 className='text-center text-info mb-4'>Please Login</h2>
           <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    {/* <Form.Label>Email address</Form.Label> */}
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    {/* <Form.Label>Password</Form.Label> */}
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
          </Form.Group>

          {errorElement}
  
          <Button className='w-50 d-block mx-auto mb-2' variant="info" type="submit">
    Login
  </Button>
        </Form>
        
        <p className='mt-3'>You have an account?<Link to={'/register'} className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}> Please Register</Link></p>
        <SocialSignin></SocialSignin>
        </div>
    );
};

export default Login;