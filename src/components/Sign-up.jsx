import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/authContext";

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const auth = useContext(AuthContext);

    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!name || !username || !email || !password || !termsAccepted) {
            alert('Please fill all values and accept terms and conditions.');
            return;
        }

        try {
            setIsLoading(true);
            const response = await fetch(import.meta.env.VITE_REACT_APP_BACKEND_URL + '/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, username, email, password }),
            });
            const responseData = await response.json();

            if (!response.ok) {
                setIsLoading(false);
                throw new Error(responseData.msg);
            }

            auth.register(responseData.user.userID, responseData.token);
            console.log('Registration successful:', responseData);

            setError(null);
            setIsLoading(false);
            navigate('/setupProfile1/' + responseData.user.userID)
        } catch (err) {
            // console.error('Error registering user:', err);
            setError(err.message)
            setIsLoading(false);
        }
    };
    return (
        <>
            <div className='flex justify-center h-screen relative max-sm:overflow-auto overflow-y-hidden max-md:flex-col'>
                <div className="md:w-1/3 min-h-screen max-md:hidden">
                    <img src="/images/hero.jpg" alt="Hero Image" className="md:h-screen md:w-full max-md:hidden" />
                </div>
                <div className="w-2/3 max-md:w-full relative xl:py-16 xl:px-52 max-xl:py-12 max-xl:px-36 max-lg:py-12 max-lg:px-24 max-h-screen">
                    <p className='top-3 right-5 absolute'>Already a member? <span className='text-purple-600 cursor-pointer'>Sign In</span></p>
                    <img src="/images/dribble.png" alt="Dribble Logo" width={60} height={20} className="top-0 left-3 absolute md:hidden" />

                    <div className=' h-screen'>
                        <h1 className='font-bold text-4xl max-md:mt-8 max-sm:text-3xl'>Sign up to Dribble</h1>
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                        {isLoading && <img src="/images/loading-circle.svg" alt="Loading" width={40} height={40} className="mt-4" />}
                        <div className="flex mb-4 mt-12">
                            <div className="w-1/2 mr-2">
                                <label htmlFor="name" className="block text-black font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="appearance-none border-none rounded w-full py-2 px-3 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="w-1/2 ml-2">
                                <div className='flex items-center gap-[2px]'>
                                    {error && error.match('Username') && <img src="/images/warning.png" alt="" width={20} height={10} />}
                                    <label htmlFor="username" className="block text-black font-bold mb-2">
                                        Username
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={e => { setUsername(e.target.value); setError(null) }}
                                    className={`border-none rounded w-full py-2 px-3 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline ${error && error.match('Username') && 'bg-red-100'}`}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className='flex items-center gap-[2px]'>
                                {error && error.match('Email') && <img src="/images/warning.png" alt="" width={20} height={10} />}
                                <label htmlFor="email" className="block text-black font-bold mb-2">
                                    Email
                                </label>
                            </div>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={e => { setEmail(e.target.value); setError(null) }}
                                className={`border-none rounded w-full py-2 px-3 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline ${error && error.match('Email') && 'bg-red-100'}`}
                            />
                        </div>
                        <div className="mb-6">
                            <div className="flex items-center gap-[2px]">
                                {error && error.match('Password') && <img src="/images/warning.png" alt="" width={20} height={10} />}
                                <label htmlFor="password" className="block text-black font-bold mb-2">
                                    Password
                                </label>
                            </div>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="6+ characters"
                                className={`appearance-none border-none rounded w-full py-2 px-3 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline ${error && error.match('Password') && 'bg-red-100'} `}
                            />
                        </div>
                        <div className="mb-6">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={termsAccepted}
                                        onChange={() => setTermsAccepted(!termsAccepted)}
                                        className="focus:outline-none h-4 w-4 border border-gray-300 rounded-sm transition duration-200"
                                    />
                                </div>
                                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                                    Creating an account means youre okay with our <span className="text-purple-600">Terms of Service, Privacy Policy,</span> and our default <span className='text-purple-600'>Notification Settings.</span>
                                </label>
                            </div>
                        </div>
                        <button className="w-1/3 max-xl:w-2/3 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline max-sm:w-full" onClick={handleSubmit}>
                            Create Account
                        </button>
                        <p className="text-sm text-gray-600 mt-4 w-2/3 max-lg:w-full">
                            This site is protected by reCAPTCHA and the Google <span className='text-purple-600'>Privacy Policy</span> and <span className='text-purple-600'>Terms of Service</span> apply.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SignUpForm;