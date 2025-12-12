import React, { useState } from 'react';
import Footer from '@/shared/Footer';
import Header from '@/shared/Header';
import RenderTile from './(components)/RenderTile';

const categories = [
    {
        name: 'All'
    },
    {
        name: 'Work'
    },
    {
        name: 'Ceiling'
    },
    {
        name: 'Flooring'
    },
    {
        name: 'Facade'
    },
]

const Gallery = () => {

    // All, Work, Ceiling, Flooring, Facade
    const [activeCat, setActiveCat] = useState('All')

    return (
        <div className='flex flex-col min-h-screen w-full'>

            <Header />

            <div className='flex flex-col lg:gap-6 gap-4 w-full lg:p-16 p-6 items-center mt-12'>

                <h2 className='lg:text-6xl text-5xl font-bold text-center text-[#121212]'>
                    Design Stories <br className='lg:block hidden' />
                    Built with PARÉ
                </h2>

                <p className='lg:text-lg text-base text-[#12121290] font-medium lg:w-7/12 text-center w-fit'>
                    Every panel, every project tells a story. Explore our curated gallery to see how architects, designers, and homeowners bring their vision to life with PARÉ’s innovative wall, ceiling, Flooring and facade solutions.
                </p>

            </div>

            <div className='flex flex-col lg:gap-6 gap-5 items-center lg:p-16 p-6'>
                <h2 className='lg:text-3xl text-2xl font-medium text-[#121212]'>Explore Our <span className='font-semibold'>Portfolio</span></h2>

                <div className='flex items-center justify-center flex-wrap lg:gap-6 gap-4'>
                    {
                        categories?.map(item => (
                            <button onClick={() => setActiveCat(item?.name)} className={`py-2 px-4 rounded-xl lg:text-lg text-base font-semibold ${item?.name === activeCat ? ' bg-[#c7200e] text-white' : 'text-[#121212]'}`}>
                                {item?.name}
                            </button>
                        ))
                    }
                </div>

                <div className='grid lg:grid-cols-3 lg:gap-6 gap-4 w-full'>
                    {
                        [...Array(30)].map((item, index) => (
                            <div key={index + 'render-tile'} className='flex flex-col lg:gap-6 gap-4'>
                                <div className='flex flex-col w-full h-72 rounded-3xl bg-slate-200'>
                                </div>

                                <div className='flex flex-col w-full'>
                                    <h2 className='lg:text-xl text-lg font-semibold text-[#121212]'>Something</h2>
                                    <p className='lg:text-base text-sm text-[#12121290]'>Something</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>


            <div className='flex flex-col lg:p-16 p-6 w-full text-center'>
                <h2 className='lg:text-8xl text-6xl font-bold text-[#121212]'>Thanks for Watching</h2>
            </div>

            <Footer />
        </div>

    )
}

export default Gallery