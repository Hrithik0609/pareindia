import React from 'react';
import Link from 'next/link';
import PrimaryButton from './PrimaryButton';
import { headerLinks } from '@/utils/helpers';

const resourcesLinks = [
    {
        name: 'Careers',
        link: '/careers'
    },
    {
        name: 'Download Brochure',
        link: '/download-brochure'
    },
    {
        name: 'Experience Centre',
        link: '/experience-centre'
    },
    {
        name: 'Blogs',
        link: '/blogs'
    },
    {
        name: 'Media Coverage',
        link: '/media-coverage'
    },
    {
        name: 'FAQs',
        link: '/faqs'
    },
]

const Header = () => {
    return (
        <div className='flex items-center py-2 lg:px-16 px-4 w-full fixed bg-white z-10 shadow justify-between'>
            <img src="/logo.png" alt="logo" className='w-24 h-14 object-contain' />

            <div className='hidden lg:flex items-center gap-12'>
                {
                    headerLinks?.map(({ link, name }) => (
                        <div className='relative group'>
                            <Link href={link}>
                                <p className='text-base text-[#121212] lg:hover:text-[#c7200e]'>{name}</p>
                            </Link>

                            {
                                name === 'Resources' ?
                                    <div className='w-60 group-hover:opacity-100 opacity-0 p-4 flex flex-col gap-2 transition-all bg-[#f2f2f2] absolute top-14 left-0'>
                                        {
                                            resourcesLinks?.map(({ name, link }) => (
                                                <Link href={link}>
                                                    <p className='text-base text-[#121212] lg:hover:text-[#c7200e]'>{name}</p>
                                                </Link>
                                            ))
                                        }
                                    </div> : ''
                            }
                        </div>
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