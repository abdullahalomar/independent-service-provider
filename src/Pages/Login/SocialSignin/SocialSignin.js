import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/icons8-google.svg';

const SocialSignin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
        errorElement = <div>
            <h5 className='text-danger'>Error: {error.message}</h5>
          </div>
        
    }
    
    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
            <div style={{height: '1px'}} className='bg-secondary w-50'></div>
            <p className='mt-2 px-3'>or</p>
            <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={()=>signInWithGoogle()} className='btn btn-info w-100'><img src={google} width={34} alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialSignin;