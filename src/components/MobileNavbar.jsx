import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/authContext';

const MobileNavbar = ({ isOpen, onClose }) => {
    const auth = useContext(AuthContext);
    const [currentUser, setCurrentUser] = useState(null);
    const handleClose = () => {
        onClose();
    };

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

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50">
                    <div className="fixed inset-0 transition-opacity" onClick={handleClose}>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </div>
                    <div className="fixed inset-y-0 left-0 flex justify-end">
                        <div className="relative w-64 h-full bg-white shadow-lg transform transition-transform ease-in-out duration-1000">
                            <div className="py-2 px-4">
                                {/* Navbar items */}
                                <div className='flex justify-between items-center'>
                                    <img src="/images/dribble.png" alt="Dribble Logo" width={80} height={30} />
                                    <img src={import.meta.env.VITE_REACT_APP_ASSET_URL + `/${currentUser?.image}`} alt="Avatar" className="object-cover rounded-full h-8 w-8" />
                                </div>
                                <div className='bg-gray-100 p-3 flex items-center gap-2'>
                                    <img src="/images/search-icon.png" alt="Search Icon" width={15} height={15} />
                                    <input className='border-none outline-none bg-gray-100 w-full' placeholder="Search"></input>
                                </div>
                                <div className='flex flex-col items-start gap-6 mt-10'>
                                    <span className='text-gray-500 font-semibold cursor-pointer'>Inspiration</span>
                                    <span className='text-gray-500 font-semibold cursor-pointer'>Find Work</span>
                                    <span className='text-gray-500 font-semibold cursor-pointer'>Learn Design</span>
                                    <span className='text-gray-500 font-semibold cursor-pointer'>Go Pro</span>
                                    <span className='text-gray-500 font-semibold cursor-pointer'>Hire Designers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileNavbar;
