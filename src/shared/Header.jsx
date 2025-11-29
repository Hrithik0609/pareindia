import React from 'react';
import Link from 'next/link';
import PrimaryButton from './PrimaryButton';
import { headerLinks } from '@/utils/helpers';

const Header = () => {
    return (
        <div className='flex items-center py-2 lg:px-16 px-4 w-full fixed bg-white z-10 shadow justify-between'>
            <img src="/logo.png" alt="logo" className='w-24 h-14 object-contain' />

            <div className='hidden lg:flex items-center gap-12'>
                {
                    headerLinks?.map(({ link, name }) => (
                        <Link href={link}>
                            <p className='text-base text-[#121212] lg:hover:text-[#c7200e]'>{name}</p>
                        </Link>
                    ))
                }
            </div>

            <div className='flex items-center gap-4'>
                <PrimaryButton label="Get In Touch" width="w-fit" />

                <button className='lg:hidden block'>
                    <img src="/burger.svg" alt="burger" className='w-7 h-7' />
                </button>
            </div>

        </div>
    )
}

export default Header