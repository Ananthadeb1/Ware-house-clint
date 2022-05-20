import React from 'react';
import auth from '../../../firebase.init';
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import Spinner1 from '../../Shared/Spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation()
    const [sendEmailVerification] = useSendEmailVerification(auth)
    if (loading) {
        return <Spinner1></Spinner1>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
        return (
            <div>
                <h3>Your Email isn't verified </h3>

                <h5>Please verify your email </h5>
                <button
                    onClick={async () => {
                        await sendEmailVerification();
                        toast('Email sent.Please Verify..!!')

                    }}>Send Verification again </button>
                <ToastContainer></ToastContainer>
            </div>
        )
    }

    return children;
};

export default RequireAuth;