import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/icons8-google.svg';
import github from '../../../images/icons8-github.svg';

const SocialSignin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error || error1) {
        errorElement = <div>
            <h5 className='text-danger'>Error: {error?.message} {error1?.message}</h5>
        </div>
        
    }
    
    if (user || user1) {
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
                <button onClick={()=>signInWithGithub()} className='btn btn-info w-100 my-3'><img src={github} width={34} alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialSignin;