import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/authContext';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {

    const auth = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null);
    const [isMobileNavbarOpen, setIsMobileNavbarOpen] = useState(false);
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

    const handleMobileNavbarToggle = () => {
        setIsMobileNavbarOpen(!isMobileNavbarOpen);
    };

    return (
        <div className="flex sticky top-0 bg-white shadow-sm px-4">
            <div className="flex items-center justify-start ml-4 mr-5 bg-white max-lg:justify-between max-lg:w-full">
                <img src="/images/dribble.png" alt="Dribble Logo" width={80} height={30} />
                <img src="/images/hamburger.png" alt="" className='lg:hidden cursor-pointer' width={30} height={30} onClick={handleMobileNavbarToggle} />
            </div>
            {/* Navitems */}
            <div className='flex justify-between items-center flex-1 max-lg:hidden'>
                <div className='flex justify-evenly items-center gap-5 cursor-pointer'>
                    <span className='text-gray-500 font-semibold'>Inspiration</span>
                    <span className='text-gray-500 font-semibold'>Find Work</span>
                    <span className='text-gray-500 font-semibold'>Learn Design</span>
                    <span className='text-gray-500 font-semibold'>Go Pro</span>
                    <span className='text-gray-500 font-semibold'>Hire Designers</span>
                </div>

                {/* Right Side */}
                <div className="flex justify-evenly items-center gap-3">
                    <div className='bg-gray-100 p-3 flex items-center gap-2'>
                        <img src="/images/search-icon.png" alt="Search Icon" width={20} height={20} />
                        <input className='border-none outline-none bg-gray-100 w-24' placeholder="Search"></input>
                    </div>
                    <img src="/images/nav-icon.jpg" alt="" width={30} height={30} />
                    <img src={import.meta.env.VITE_REACT_APP_ASSET_URL + `/${currentUser?.image}`} alt="Avatar" className="object-cover rounded-full h-8 w-8" />
                    <button className='bg-pink-500 font-semibold text-white px-4 py-2 rounded-md text-[14px]'>Upload</button>
                </div>
            </div>

            <MobileNavbar isOpen={isMobileNavbarOpen} onClose={() => setIsMobileNavbarOpen(false)} />
        </div>
    )
}

export default Navbar
