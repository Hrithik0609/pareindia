import React from 'react';
import { useTheme } from '@/store/useTheme';
import { useParams } from '@/store/useParams';
import PrimaryButton from '@/shared/PrimaryButton';

const Test = () => {

    const { theme, toggleLight, toggleDark } = useTheme()

    const { params, handleChange } = useParams()

    console.log(params, 'params')

    return (
        <div className='flex flex-col items-center justify-center w-full h-screen gap-4 p-4'>

            <h2 className='text-xl font-semibold'>{theme}</h2>
            <PrimaryButton onClick={toggleLight} width="lg:w-60 w-full" label="Light" />
            <PrimaryButton onClick={toggleDark} width="lg:w-60 w-full" label="Dark" />

            <input
                name="name"
                value={params?.name}
                onChange={handleChange}
                placeholder="Name"
                className='p-3 outline-none border border-[#808080] w-full lg:w-60'
            />

            <input
                name="age"
                value={params?.age}
                onChange={handleChange}
                placeholder="Age"
                className='p-3 outline-none border border-[#808080] w-full lg:w-60'
            />


            <input
                name="phone"
                value={params?.Phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className='p-3 outline-none border border-[#808080] w-full lg:w-60'
            />


        </div>
    )
}

export default Test