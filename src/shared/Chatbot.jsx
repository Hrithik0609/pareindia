import React, { useContext } from 'react';
import { ColorContext } from '@/context/ColorContext';

const Chatbot = () => {

    const { color } = useContext(ColorContext)

    return (
        <div className='absolute bottom-0 right-0 h-20 w-20 flex items-center justify-center'>
            <button style={{ backgroundColor: color }} className='w-14 h-14 rounded-full flex items-center justify-center' >
                <img src="/chat.svg" alt="chat" className='w-6 h-6 invert' />
            </button>
        </div>
    )
}

export default Chatbot