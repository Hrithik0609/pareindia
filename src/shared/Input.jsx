import React from 'react'

const Input = ({ name,type="text", value, handleChange, label }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={label}
            className='py-3 px-5 border border-[#80808050] rounded-full lg:text-base text-sm'
        />
    )
}

export default Input