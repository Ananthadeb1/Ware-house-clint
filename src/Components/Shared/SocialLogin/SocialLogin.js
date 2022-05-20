import React from 'react';
import google from './google1.png'
import facebook from './Facebook.png'
import github from './github.png'
import auth from '../../../firebase.init';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner1 from '../Spinner/Spinner';
import './socialLogin.css'


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    const location = useLocation()
    let errorMessage;
    let from = location.state?.from?.pathname || "/";


    if (loading || loading1) {
        return <Spinner1></Spinner1>

    }
    if (error || error1) {
        errorMessage = <p className='text-center text-danger'>Error: {error?.message}{error1?.message}</p>
    }
    if (user || user1) {
        navigate(from, { replace: true })
    }

    return (
        <div>
            {errorMessage}
            <div>
                <div className='d-flex align-items-center'>
                    <div className='w-50'> <hr /></div>
                    <p className='mt-3 mx-2'>or</p>
                    <div className='w-50'> <hr /></div>
                </div>
                <div className=' social-login-container'>
                    <div onClick={() => signInWithGoogle()} className=' d-flex justify-content-center align-items-center mx-2'>
                        <img style={{ height: '20px' }} src={google} alt="" />
                        <p className='mt-3 mx-2'>Sign-in with Google</p>
                    </div>
                    <div onClick={() => signInWithGithub()} className=' mt-2 d-flex justify-content-center align-items-center mx-2'>
                        <img style={{ height: '20px' }} src={github} alt="" />
                        <p className='mt-3 mx-2'>Sign-in with GitHub</p>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default SocialLogin;