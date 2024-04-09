import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/authContext';

import Navbar from "./Navbar"
import Footer from "./Footer"


const VerificationPage = () => {
    const auth = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null);

    // console.log(auth.userID);

    // console.log(import.meta.env.VITE_REACT_APP_BACKEND_URL + `/${auth.userID}`)

    // Fetch user
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_REACT_APP_BACKEND_URL + `/${auth.userID}`, {
                    method: 'GET',
                });
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.msg || 'Failed to fetch user');
                }
                // console.log(data)
                setCurrentUser(data.user);
            } catch (err) {
                console.error('Error fetching user:', err);
            }
        };
        fetchUser();
    }, [auth.userID]);

    useEffect(() => {
        if (currentUser) { // Send email only once and if user data is available
            const sendEmail = async () => {
                try {
                    const response = await fetch(import.meta.env.VITE_REACT_APP_BACKEND_URL + '/verify-email', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ email: currentUser.email }), // Send user's email
                    });

                    if (!response.ok) {
                        throw new Error(await response.text()); // Handle potential errors from the backend
                    }

                    console.log('Confirmation email sent successfully!');
                } catch (err) {
                    console.error('Error sending confirmation email:', err);
                }
            };
            sendEmail();
        }
    }, [currentUser]);

    const handleResendEmail = async () => {
        const sendEmail = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_REACT_APP_BACKEND_URL + '/verify-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: currentUser.email }), // Send user's email
                });

                if (!response.ok) {
                    throw new Error(await response.text()); // Handle potential errors from the backend
                }

                console.log('Confirmation email sent successfully!');
            } catch (err) {
                console.error('Error sending confirmation email:', err);
            }
        };
        sendEmail();
    };

    return (
        <div className='w-full min-h-screen flex flex-col'>
            <Navbar />

            <div className='w-full flex flex-col gap-3 justify-center items-center text-center py-10 lg:px-60 max-lg:px-32 max-md:px-16'>
                <h1 className='text-4xl font-bold'>Please verify your email...</h1>
                <img src="/images/sent-mail.png" alt="" width={150} height={150} />
                <p className='text-lg text-gray-600'>Please verify your email address. {"We've"} sent a confirmation email to:</p>
                <span className='font-bold text-lg'>{currentUser?.email}</span>
                <p className='text-lg text-gray-600'>Click the confirmation link in that email to start using Dribble.</p>
                <p className='text-lg text-gray-600'>{"Didn't"} receive the email? Check your spam folder, it may have been caught by a filter. If you still {"don't"} see it, you can <span className='text-pink-500 font-bold cursor-pointer' onClick={handleResendEmail}>resend the confirmation email</span>.</p>
                <p className='text-lg text-gray-600'>Wrong email address? <span className='text-pink-500 font-bold cursor-pointer'>Change it.</span></p>
            </div>

            <Footer />
        </div>
    )
}

export default VerificationPage