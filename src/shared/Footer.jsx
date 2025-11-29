import React from 'react';
import Link from 'next/link';
import { footerLinks } from '@/utils/helpers';

const Footer = () => {
  return (
    <div className='flex flex-col bg-black lg:p-16 p-6 w-full lg:gap-16 gap-4'>

      <div className='flex lg:flex-row flex-col items-center justify-between w-full lg:gap-0 gap-4'>

        <div className='flex flex-col lg:w-5/12 w-full lg:gap-6 gap-4'>

          <img src="/logo.png" alt="logo" className='w-52 h-12 object-contain object-bottom-left' />

          <p className='lg:text-base/loose text-sm/loose text-white font-medium'>
            Transform your living spaces with PARÉ’s innovative, durable, and high-performance products. Let’s work together to create a space that reflects your unique style and brings lasting comfort.
          </p>

          <div className='flex items-center gap-4'>
            {
              [1, 2, 3, 4].map(item => (
                <img src="/placeholder.svg" alt="placeholder" className='w-10 h-10 invert' />
              ))
            }
          </div>

        </div>

        <div className='flex flex-col lg:w-5/12 w-full'>

          <div className='grid lg:grid-cols-3 grid-cols-2 lg:gap-6 gap-4'>

            {
              footerLinks?.map(({ name, link }) => (
                <Link href={link}>
                  <p className={`lg:text-base text-sm text-white font-medium hover:text-[#c7200e]`}>{name}</p>
                </Link>
              ))
            }

          </div>


        </div>

      </div>

      <div className='flex items-center justify-between w-full relative h-52'>

        <p className='lg:text-base text-sm text-white'>&copy; PARE Innovative Limited {new Date().getFullYear()}</p>

        <img src="/logo.png" alt="logo" className='w-5/12 grayscale object-contain object-bottom-right absolute lg:-bottom-16 -bottom-6 -right-6 lg:-right-15' />

      </div>

    </div>
  )
}

export default Footer