import Input from '@/shared/Input';
import Footer from '@/shared/Footer';
import Header from '@/shared/Header';
import React, { useState } from 'react';
import PrimaryButton from '@/shared/PrimaryButton';

const initialParams = {
    name: '',
    email: '',
    phone: '',
    country: '',
    requirementType: '',
    city: '',
}

const Contact = () => {

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
            <div className='flex flex-col lg:p-16 p-6 w-full mt-16 lg:gap-10 bg-slate-100'>

                <h2 className='lg:text-4xl text-3xl font-bold text-[#c7200e]'>Let's Talk</h2>

                <p className='lg:text-lg text-base text-[#12121290]'>
                    We are here to help any questions you might have. <br className='lg:block hidden' />
                    Feel free to reach out - we would love to hear from you!
                </p>

            </div>

            <div className='flex flex-col lg:p-16 p-6 w-full'>

                <div className='flex lg:flex-row flex-col items-center w-full lg:gap-8 gap-6'>

                    <div className='flex flex-col lg:gap-6 gap-4 lg:w-5/12 w-full'>

                        <h2 className='flex flex-col text-center pb-4 border-b border-[#80808050] w-full lg:text-3xl text-2xl font-bold text-[#c7200e]'>
                            Let's Get In Touch
                        </h2>

                        <div className='grid lg:grid-cols-2 lg:gap-6 gap-4'>
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

                        <PrimaryButton rounded="rounded-full" width="w-full" label="Submit" />

                    </div>

                    <div className='grid lg:grid-cols-2 lg:gap-6 gap-4 lg:w-7/12 w-full'>

                        <div className='flex flex-col gap-4'>

                            <img src="/placeholder.svg" alt="placeholder" className='w-12 h-12' />

                            <div className='flex flex-col gap-2'>

                                <p className='lg:text-base text-sm text-[#12121290]'>Phone Number</p>
                                <p className='lg:text-lg text-base text-[#12121290] font-medium'>+91 8356954856</p>

                            </div>

                        </div>

                        <div className='flex flex-col gap-4'>

                            <img src="/placeholder.svg" alt="placeholder" className='w-12 h-12' />

                            <div className='flex flex-col gap-2'>

                                <p className='lg:text-base text-sm text-[#12121290]'>Email Address</p>
                                <p className='lg:text-lg text-base text-[#12121290] font-medium'>hello@pareindia.com</p>

                            </div>

                        </div>

                        <div className='flex flex-col gap-4'>

                            <img src="/placeholder.svg" alt="placeholder" className='w-12 h-12' />

                            <div className='flex flex-col gap-2'>

                                <p className='lg:text-base text-sm text-[#12121290]'>Corporate Office Address</p>
                                <p className='lg:text-lg text-base text-[#12121290] font-medium'>
                                    101 to 103, Jai Commercial Complex, <br className='lg:block hidden' />
                                    Khopat Road, Cadbury Junction, Thane, <br className='lg:block hidden' />
                                    West Mumbai 400601, Maharashtra, India
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
            <Footer />
        </div>
    )
}

export default Contact