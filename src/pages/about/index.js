import React from 'react';
import Footer from '@/shared/Footer';
import Header from '@/shared/Header';

const pageStats = [
    {
        value: '22+',
        name: 'Quality Products'
    },
    {
        value: '55+',
        name: 'Shades to Choose'
    },
    {
        value: '500+',
        name: 'Cities Served'
    },
    {
        value: '5000K+',
        name: 'Architectural Projects'
    },
]

const About = () => {
    return (
        <div className='flex flex-col min-h-screen w-full'>
            <Header />

            <div className='flex lg:flex-row flex-col-reverse w-full lg:p-16 p-6 mt-16 lg:mt-12 lg:gap-6 gap-4'>

                <div className='flex flex-col lg:w-7/12 w-full lg:gap-6 gap-4'>

                    <h2 className='lg:text-6xl text-4xl font-bold text-[#121212]'>Our Story</h2>

                    <p className='lg:text-lg/loose text-base/loose text-[#1212190] lg:w-10/12'>
                        Welcome to PARÉ, where craftsmanship and innovation come together to redefine architectural excellence. As a leading name in the building materials industry, we specialize in high-quality surfaces for Walls, Ceiling, Floorings and facades. Driven by a deep-rooted culture of innovation, we operate from our headquarters in Mumbai and a cutting-edge manufacturing facility near Vapi, Gujarat, constantly introducing breakthrough designs that set new industry benchmarks. Founded by industry visionaries, PARÉ Is committed to shaping the future of architecture through thoughtful design and technological advancement.
                    </p>
                </div>

                <div className='flex flex-col lg:w-5/12 w-full'>
                    <div className='lg:w-full lg:h-[450px] h-72 bg-slate-200 rounded-2xl'>

                    </div>
                </div>

            </div>

            <div className='flex lg:flex-row flex-col lg:p-16 p-6 w-full lg:gap-6 gap-4 bg-slate-100'>

                <div className='flex flex-col lg:w-6/12 w-full'>
                    <h2 className='lg:text-6xl text-4xl font-bold text-[#121212]'>Crafting Your Vision with our Quality Solutions</h2>
                </div>

                <div className='grid lg:grid-cols-2 lg:w-6/12 w-full'>
                    {
                        pageStats.map(({ name, value }) => (
                            <div className='flex flex-col gap-2 h-32'>
                                <h3 className='lg:text-6xl text-4xl font-bold text-[#c7200e]'>{value}</h3>
                                <p className='lg:text-base text-sm text-[#12121290] lg:w-5/12'>
                                    {name}
                                </p>
                            </div>
                        ))
                    }
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default About