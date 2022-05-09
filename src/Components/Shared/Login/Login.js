import React, { useRef } from 'react';
import './login.css'
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import Spinner1 from '../Spinner/Spinner';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    let errorMessage;


    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }

    if (loading || sending) {
        return <Spinner1></Spinner1>
    }
    if (error || error1) {
        errorMessage = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>

    }
    if (user) {
        navigate(from, { replace: true });
    }
    const navigateToRegister = () => {
        navigate('/register')
    }
    const resetPassword = async () => {

        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Password reset email sent')

        }
        else {
            console.log('clicked')
            toast('Please enter a valid email')
        }
    }
    return (
        <div className='form-container mx-auto text-start px-3 '>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" placeholder='Your Email' id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" placeholder='Password' id="exampleInputPassword1" required />
                </div>
                <p>Don't have an account ??? <Link to={'/register'} onClick={navigateToRegister} className='link-text'>Please Register</Link></p>
                <p>Forget password?? <span onClick={() => { resetPassword() }} className='text-danger'>Reset Password</span></p>
                {errorMessage}
                <div className='d-flex justify-content-center mt-5'>
                    <button type="submit" className="btn w-50">Submit</button>
                </div>
                <ToastContainer />
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;