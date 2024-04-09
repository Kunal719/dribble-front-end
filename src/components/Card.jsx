const Card = ({ title, selectedText, isSelected, imageURL, onClick }) => {
    return (
        <div
            className={`p-8 rounded-lg w-[300px] shadow-md text-center flex flex-col items-center justify-center cursor-pointer border-4 ${isSelected
                ? 'border-pink-500'
                : 'border-transparent hover:border-pink-500'
                }`
            }
            onClick={onClick}
        >
            <div className="flex flex-col items-center">
                <img
                    src={`/images/${imageURL}`}
                    alt={title}
                    className={`w-60 h-36 object-cover ${isSelected ? 'lg:-mt-28 md:-mt-16' : ''} `}
                />
                <div className="mt-4 font-bold text-lg">{title}</div>
                {isSelected && (
                    <div className="mt-4 text-sm text-gray-600">{selectedText}</div>
                )}
            </div>
            <div
                className={`w-6 h-6 mt-4 rounded-full flex items-center justify-center ${isSelected ? 'bg-pink-500' : 'border-2 border-gray-300 bg-white '}`}
            >
                {isSelected && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </div>
        </div>
    );
};

export default Card;