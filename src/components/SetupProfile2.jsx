import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import Card from './Card';
import { AuthContext } from '../context/authContext';

const SetupProfile2 = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const navigate = useNavigate();

    const auth = useContext(AuthContext);

    const toggleOption = (option) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((o) => o !== option));
        } else {
            setSelectedOptions([...selectedOptions, option]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(import.meta.env.VITE_REACT_APP_BACKEND_URL + `/interests/${auth.userID}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${auth.token}` },
                body: JSON.stringify({ selectedOptions }),
            });

            if (!response.ok) {
                throw new Error('Failed to update user profile');
            }

            console.log('User profile updated successfully');

            navigate('/verification/' + auth.userID); //
        } catch (err) {
            console.error('Error updating user profile:', err);
        }
    };

    return (
        <div className="flex gap-10 flex-col items-center justify-center min-h-screen bg-white relative">
            <div className="absolute top-0 left-0 m-4 flex gap-5 items-center justify-center">
                <img src="/images/dribble.png" alt="Dribbble Logo" width={80} height={50} />
                <div className='bg-gray-100 p-3 flex rounded-md items-center justify-center w-fit h-min cursor-pointer' onClick={() => navigate('/setupProfile1')}>
                    <img src="/images/left-arrow.png" alt="" width={15} height={15} />
                </div>
            </div>
            <div className="max-w-6xl w-full flex flex-col justify-center items-center p-8 mt-10 max-md:mt-20">
                <h2 className="text-4xl max-sm:text-2xl font-bold mb-6 text-gray-800">What brings you to Dribbble?</h2>
                <p className="text-gray-600 mb-4">
                    Select the options that best describe you. {"Don't worry"}, you can explore other options later.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mb-8 mt-16 max-lg:gap-y-12 max-sm:mt-8">
                    <Card
                        title="I'm a designer looking to share my work"
                        selectedText="With over 7 million shots from a vast community of designers, find designers with the same mind and collaborate with them on Dribble."
                        isSelected={selectedOptions.includes('designer')}
                        onClick={() => toggleOption('designer')}
                        imageURL='card-1.jpg'
                    />
                    <Card
                        title="I'm looking to hire a designer"
                        selectedText="With over 7 million shots from a vast community of designers, Dribbble is a place with skilled designers for your needs."
                        isSelected={selectedOptions.includes('hiring')}
                        onClick={() => toggleOption('hiring')}
                        imageURL='card-2.jpg'
                    />
                    <Card
                        title="I'm looking for design inspiration"
                        selectedText="With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration."
                        isSelected={selectedOptions.includes('inspiration')}
                        onClick={() => toggleOption('inspiration')}
                        imageURL='card-3.jpg'
                    />
                </div>
                <p className="text-gray-600 font-bold text-xl mb-6">Anything else? You can select multiple</p>
                <button className="bg-pink-500 hover:bg-pink-600 w-2/5 text-white font-bold py-2 px-4 rounded-md" onClick={handleSubmit}>
                    Finish
                </button>
                <a href='/setupProfile1'>
                    <p className="text-gray-600 mt-4">or Press RETURN</p>
                </a>
            </div>
        </div>
    );
};

export default SetupProfile2;