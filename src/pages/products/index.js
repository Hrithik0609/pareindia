import React, { useState } from 'react';
import Input from '@/shared/Input';
import Footer from '@/shared/Footer';
import Header from '@/shared/Header';
import PrimaryButton from '@/shared/PrimaryButton';

const initialParams = {
    name: '',
    email: '',
    phone: '',
    country: '',
    requirementType: '',
    city: '',
}

const Products = () => {

    const [params, setParams] = useState(initialParams)

    const handleChange = (e) => {
        let { name, value } = e.target
        setParams({
            ...params,
            [name]: value
        })
    }

    return (
        <div className='flex flex-col w-full min-h-screen'>
            <Header />

            <div className='flex lg:flex-row flex-col mt-16 w-full lg:p-16 p-6 lg:gap-8 gap-6'>

                <div className='flex flex-col lg:w-4/12'>

                    <span className='p-3 bg-[#c7200e] w-fit rounded-2xl text-white lg:text-2xl text-xl'>Curate Your Spaces with</span>

                    <h2 className='lg:text-6xl/normal text-4xl/normal font-extrabold text-[#121212]'>
                        Our Stunning <br className='lg:block hidden' />
                        Collection <br className='lg:block hidden' />
                        of Products.<br className='lg:block hidden' />
                    </h2>

                </div>

                <div className='flex flex-col lg:w-8/12'>

                    <div className='flex flex-col w-full lg:h-[450px] h-96 bg-slate-200 rounded-3xl'>

                    </div>

                </div>

            </div>

            <div className='grid lg:grid-cols-2 lg:gap-8 gap-6 w-full lg:px-16 px-6'>

                {
                    [...Array(10)].map(item => (
                        <div className='flex flex-col rounded-3xl border border-[#80808020]'>

                            <div className='h-96 w-full rounded-t-3xl bg-slate-100'>

                            </div>

                            <div className='flex flex-col lg:p-6 p-4 w-full lg:gap-6 gap-4'>

                                <h3 className='pb-3 border-b border-[#80808020] lg:text-base text-sm text-[#121212] font-medium'>Realistic Wooden Ceiling System</h3>

                                <div className='flex items-center justify-between w-full'>

                                    <img src="/placeholder.svg" alt="placeholder" className='w-16 h-16' />

                                    <PrimaryButton width="w-fit" label="Explore Range" />

                                </div>

                            </div>

                        </div>
                    ))
                }


            </div>

            <div className='flex flex-col lg:p-16 p-6 w-full'>

                <h2 className='lg:text-7xl/tight text-6xl/lg:text-7xl/tight font-extrabold text-[#121212]'>
                    Our Curated Collection, <br />
                    Your Elevated Lifestyle.
                </h2>

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

            <div className='flex flex-col w-full'>

                <div className='flex lg:flex-row flex-col items-center w-full'>

                    <div className='flex flex-col lg:gap-6 gap-4 lg:w-6/12 w-full lg:px-16 px-6'>

                        <h2 className='flex flex-col text-center pb-4 border-b border-[#80808050] w-full lg:text-3xl text-2xl font-bold text-[#c7200e]'>
                            Let's Get In Touch
                        </h2>

                        <div className='grid lg:grid-cols-2 lg:gap-6 gap-4 lg:w-8/12 mx-auto'>
                            <Input
                                name="name"
                                value={params?.name}
                                label="Name"
                                handleChange={handleChange}
                            />
                            <Input
                                name="email"
                                value={params?.email}
                                label="Email"
                                handleChange={handleChange}
                            />
                            <Input
                                name="phone"
                                value={params?.phone}
                                label="Phone"
                                handleChange={handleChange}
                            />
                            <Input
                                name="country"
                                value={params?.country}
                                label="Country"
                                handleChange={handleChange}
                            />

                            <Input
                                name="requirementType"
                                value={params?.requirementType}
                                label="Requirement Type"
                                handleChange={handleChange}
                            />

                            <Input
                                name="city"
                                value={params?.city}
                                label="City"
                                handleChange={handleChange}
                            />
                        </div>

                        <PrimaryButton rounded="rounded-full" width="lg:w-8/12 w-full mx-auto" label="Submit" />

                    </div>

                    <div className='flex flex-col lg:w-6/12 w-full lg:h-[450px] h-96 items-center justify-center lg:gap-8 gap-6 bg-[#c7200e]'>

                        <h2 className='lg:text-5xl/tight text-3xl/tight text-center text-white'>
                            <span className='font-medium lg:text-4xl text-2xl'>Get your free </span><br />
                            <span className='font-bold'>consultation</span>
                        </h2>

                        <button className='p-4 bg-white rounded-2xl flex items-center gap-4'>
                            <img src="/placeholder.svg" alt="placeholder" className='w-12 h-12'/>

                            <div className='flex flex-col text-start'>
                                <h2 className='lg:text-lg text-base font-medium text-[#121212]'>Call us anytime</h2>
                                <p className='lg:text-2xl text-xl text-[#c7200e] font-bold'>+91 9123456789</p>
                            </div>
                            
                        </button>

                        <p className='lg:text-lg text-base text-white font-medium'>We are happy to hear from you!</p>

                    </div>

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Products