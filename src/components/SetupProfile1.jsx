import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const SetupProfile1 = () => {
    const [avatarImage, setAvatarImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [location, setLocation] = useState('');

    const navigate = useNavigate();

    const auth = useContext(AuthContext);

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setAvatarImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setAvatarImage(null);
        }
    };

    const handleChooseImage = () => {
        document.getElementById('avatarInput').click();
    };

    const handleChangeLocation = (e) => {
        setLocation(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = selectedFile ? new FormData() : null;

        if (formData) {
            formData.append('image', selectedFile);
            formData.append('location', location);

            try {
                const response = await fetch(import.meta.env.VITE_REACT_APP_BACKEND_URL + `/${auth.userID}`, {
                    method: 'PATCH',
                    body: formData,
                    headers: {
                        'Authorization': `Bearer ${auth.token}`
                    }
                });

                const data = await response.json();
                // console.log(data);
                if (!response.ok) {
                    throw new Error(data.msg || 'Failed to update user profile');
                }

                // console.log('User profile updated successfully:', data);

                navigate('/setupProfile2/' + auth.userID);
            } catch (err) {
                console.error('Error updating user profile:', err);
                // Handle errors (e.g., display error message to user)
            }
        } else {
            alert('Please select an image');
        }
    };


    return (
        <>
            <div className='w-full max-h-screen'>
                <div className='relative top-0 left-0 ml-4 mb-6'>
                    <img src='/images/dribble.png' alt="Dribbble Logo" width={80} height={50} />
                </div>
                <div className="flex flex-col items-center justify-center h-screen bg-white relative">
                    <div className="max-w-[650px] w-full max-md:p-5">
                        <h2 className="text-4xl font-bold mb-6 text-gray-800">Welcome! Lets create your profile</h2>
                        <p className="text-gray-500 font-semibold mb-8">Let others get to know you better! You can do these later</p>
                        <div className="mb-8 flex">
                            <div className="w-1/2">
                                <h3 className="text-lg font-bold mb-8 text-gray-700">Add an avatar</h3>
                                <div className="flex items-center justify-start">
                                    <div className="relative w-48 h-48 rounded-full border-4 border-dashed border-gray-300 bg-white flex items-center justify-center">
                                        {avatarImage ? (
                                            <img src={avatarImage} alt="Avatar" className="w-full h-full object-cover rounded-full" />
                                        ) : (
                                            <img src='/images/dslr-camera.png' alt="Camera Icon" className="w-12 h-12" />
                                        )}
                                        <input
                                            type="file"
                                            accept="image/*"
                                            id='avatarInput'
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            onChange={handleAvatarChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 flex flex-col justify-center items-start gap-4">
                                <button className='border font-semibold rounded-md border-gray-200 px-4 py-2' onClick={handleChooseImage}>Choose image</button>
                                <p className="text-sm text-gray-500"> <span>{'>'}</span> Or choose one of our defaults</p>
                            </div>
                        </div>
                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-2 text-gray-700">Add your location</h3>
                            <input
                                type="text"
                                placeholder="Enter a location"
                                value={location}
                                onChange={handleChangeLocation}
                                className="border-none shadow-md focus:outline-0 py-2 px-4 w-full"
                            />
                        </div>
                        <div className='flex flex-col w-full gap-2 max-md:justify-center max-md:items-center'>
                            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-md w-2/5" onClick={handleSubmit}>
                                Next
                            </button>
                            <div className='flex'>
                                <a href="/" className='text-gray-400 flex justify-center text-[16px]'>
                                    Or Press RETURN
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SetupProfile1;