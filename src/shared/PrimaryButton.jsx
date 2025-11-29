import React, { useContext } from 'react';
import { ColorContext } from '@/context/ColorContext';

const PrimaryButton = ({ label, onClick, type = "button", width }) => {

    const { color } = useContext(ColorContext)

    return (
        <button
            onClick={onClick}
            type={type}
            style={{ backgroundColor: color }}
            className={`${width || 'w-full'} py-2.5 px-4 rounded-lg text-white text-sm lg:text-base font-semibold`}
        >
            {label}
        </button>
    )
}

export default PrimaryButton