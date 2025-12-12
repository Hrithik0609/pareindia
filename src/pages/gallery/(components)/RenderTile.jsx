import React, { useId } from 'react'

const RenderTile = () => {
    return (
        <div className='flex flex-col lg:gap-6 gap-4'>

            <div className='flex flex-col h-72 rounded-3xl bg-slate-200'>
            </div>

            <div className='flex flex-col w-full'>
                <h2 className='lg:text-xl text-lg font-semibold text-[#121212]'>Something</h2>
                <p className='lg:text-base text-sm text-[#12121290]'>Something</p>
            </div>

        </div>
    )
}

export default RenderTile