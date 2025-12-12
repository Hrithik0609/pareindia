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

const stats = [
    {
        title: 'Pan-India Presence',
    },
    {
        title: 'Production Facility',
    },
    {
        title: 'Research & Development',
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

            <div className='flex lg:flex-row flex-col lg:p-16 p-6 w-full gap-6 bg-slate-100'>

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

            <div className='flex flex-col lg:p-16 p-6 w-full lg:gap-6 gap-4 bg-white items-center'>

                <h2 className='lg:text-6xl text-4xl font-bold text-[#121212] text-center'>PARE Roadmap</h2>

            </div>

            <div className='flex lg:flex-row flex-col lg:p-16 p-6 w-full lg:gap-6 gap-4 bg-[#c7200e]'>

                {
                    stats.map(item => (
                        <div className='flex flex-col lg:gap-6 gap-4 bg-white rounded-2xl lg:p-6 p-4 lg:w-1/3 w-full'>

                            <div className='flex items-center justify-between'>
                                <h2 className='lg:text-3xl text-xl lg:w-1/2 font-bold text-[#121212]'>{item?.title}</h2>
                                <img src="/placeholder.svg" alt="placeholder" className='lg:w-16 lg:h-16 w-12 h-12' />
                            </div>

                            <p className='lg:text-lg/loose text-base text-[#12121290] font-medium'>
                                Excepteur ut veniam nulla cillum eiusmod. Ullamco ullamco et laborum commodo. Qui aliquip fugiat laborum officia Lorem do anim laboris ea velit fugiat do irure.
                                Amet ullamco excepteur id esse non laboris excepteur deserunt occaecat qui quis ut. Minim veniam in velit laborum nulla cupidatat est elit nostrud nulla. Aliquip excepteur ipsum dolore dolore cillum velit occaecat amet excepteur magna consequat. Cillum reprehenderit sit laborum deserunt Lorem. Adipisicing laborum irure consectetur nulla nulla adipisicing Lorem ullamco velit et eu aliquip do.
                            </p>

                        </div>
                    ))
                }

            </div>

            <div className='flex lg:flex-row flex-col lg:p-16 p-6 w-full bg-slate-100 lg:gap-6 gap-4'>

                <div className='flex flex-col lg:w-4/12 w-full lg:gap-8 gap-6'>

                    <div className='flex flex-col lg:gap-4 gap-2'>
                        <h2 className='lg:text-4xl text-3xl font-medium text-[#121212]'>Our Top Clients</h2>
                        <h2 className='lg:text-4xl text-3xl font-bold text-[#121212]'>We Worked for</h2>
                    </div>

                    <p className='lg:text-lg text-base text-[#12121290]'>
                        Our commitment to quality has earned us the trust of top brands. We’re proud to support their success
                    </p>

                    <button className='lg:text-xl text-lg font-semibold border-b-2 pb-2 border-[#c7200e] w-fit'>
                        Checkout Our Work
                    </button>



                </div>

                <div className='flex flex-col lg:w-8/12 w-full'>

                    <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-4 w-full'>
                        {
                            [...Array(6)].map(item => (
                                <div className='bg-slate-200 p-2 w-full flex items-center justify-center'>
                                    <img src="/placeholder.svg" alt="placeholder" className='w-20 h-20 mx-auto' />
                                </div>
                            ))
                        }
                    </div>

                </div>


            </div>

            <Footer />
        </div>
    )
}

export default About