import React from 'react';
import google from '../../../images/icons8-google.svg';

const SocialSignin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
            <div style={{height: '1px'}} className='bg-secondary w-50'></div>
            <p className='mt-2 px-3'>or</p>
            <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <div>
                <button className='btn btn-info w-100'><img src={google} width={34} alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialSignin;