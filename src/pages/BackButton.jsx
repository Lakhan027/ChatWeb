import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); 
    };

    return (
        <button onClick={handleBackClick} className='border-2 px-4 py-2 mb-4 rounded-md bg-black text-rose-300 font-semibold border-rose-300'>Back</button>
    );
};

export default BackButton;
