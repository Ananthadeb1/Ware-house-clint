import React, { useRef, useState } from 'react';
import '../Login/login.css'
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import Spinner1 from '../Spinner/Spinner';


const Login = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const [agree, setAgree] = useState(false)

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let errorMessage;


    const handleSubmit = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
        console.log(email, password);
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')
    }

    if (loading || updating) {
        return <Spinner1></Spinner1>
    }
    if (error || updateError) {
        errorMessage = <p>Error: {error?.message} {updateError?.message} </p>
    }

    if (user) {
        console.log(user)

    }

    const navigateToLogin = () => {
        navigate('/login')
    }


    return (
        <div className='form-container mx-auto text-start px-3 '>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input ref={nameRef} type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <p>Already have an account ??? <Link to={'/login'} onClick={navigateToLogin} className='link-text'>Please Login</Link></p>
                <div className='mb-2'>
                    <input onClick={() => setAgree(!agree)} className='me-2' type="checkbox" name="checkbox" id="" />
                    <label className={agree ? 'text-dark' : 'text-danger'} htmlFor="checkbox">Agree to Terms and Conditions</label>
                </div>
                {errorMessage}
                <div className='d-flex justify-content-center mt-5'>
                    <button disabled={!agree} type="submit" className="btn w-50">Submit</button>
                </div>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;