import React from 'react';
import Header from '@/shared/Header';
import PrimaryButton from '@/shared/PrimaryButton';
import Footer from '@/shared/Footer';

const whyChoose = [
  {
    name: 'Quality Products',
    value: '22+'
  },
  {
    name: 'Shades to Choose',
    value: '55+'
  },
  {
    name: 'Cities Served',
    value: '500+'
  },
  {
    name: 'Architectural Projects',
    value: '50000+'
  },
]

const innovativeRanges = [
  {
    name: 'Innov+',
    description: 'Realistic Wooden Ceiling System',
    perks: [
      {
        name: 'Real Wood Look'
      },
      {
        name: 'Easy to Install'
      },
    ]
  },
  {
    name: 'Innov2+',
    description: 'Never Seen Before Ceiling & Wall Panels',
    perks: [
      {
        name: 'First Time in the World'
      },
      {
        name: 'Fire Retardant'
      },
    ]
  },
  {
    name: 'Easy+',
    description: 'Easy to Install System',
    perks: [
      {
        name: 'No Ply Required'
      },
      {
        name: 'Reduce Cost of Labour & Save Time'
      },
    ]
  },
  {
    name: 'Dura+',
    description: 'Exterior Facade System',
    perks: [
      {
        name: 'UV Protected'
      },
      {
        name: 'Real Wood'
      },
      {
        name: 'Waterproof'
      },
    ]
  },
  {
    name: 'Baffle',
    description: 'New Age Ceiling System',
    perks: [
      {
        name: 'Customizable Shades'
      },
      {
        name: 'Customizable Length'
      },
    ]
  },
  {
    name: 'Acoustic',
    description: 'Accoustic Comfort with a Stylish Touch',
    perks: [
      {
        name: 'Sound Absorbent'
      },
      {
        name: 'NRC Rating'
      },
    ]
  },

  {
    name: 'Pare Luxe',
    description: 'Luxury Wall & Ceiling Panels for Modern Interiors',
    perks: [
      {
        name: 'Dead Matt Look'
      },
      {
        name: 'Anti Bacterial'
      },
      {
        name: 'Waterproof'
      },
    ]
  },

  {
    name: 'Xteria Slim',
    description: 'Engineered ExteriorGrade Wall Panels',
    perks: [
      {
        name: 'Easy-to-Install'
      },
      {
        name: 'Fire Retardant'
      },
      {
        name: '10-Year Warranty'
      },
    ]
  },
]

const Home = () => {
  return (
    <div className='flex flex-col w-full min-h-screen bg-white'>
      <Header />

      {/* <div className='flex flex-col w-full min-h-screen items-center justify-center'>
        <p className='text-base'>Video</p>
      </div> */}

      <div className='flex flex-col w-full lg:min-h-screen items-center lg:p-16 p-6 lg:gap-7 gap-5'>
        <h2 className='lg:text-5xl text-3xl font-medium text-[#121212]'>Explore our <span className='font-semibold'>Range by places</span></h2>

        <div className='grid lg:grid-cols-2 lg:gap-7 gap-5 w-full lg:h-[600px]'>

          <div className='bg-slate-200 rounded-2xl lg:h-full h-60 relative'>

            <div className='flex items-center justify-between w-full lg:p-8 p-4 absolute bottom-0 left-0'>

              <h2 className='lg:text-2xl text-lg font-bold text-[#121212]'>Walls</h2>

              <PrimaryButton label="Explore" width="w-fit" />

            </div>

          </div>

          <div className='flex flex-col lg:gap-7 gap-5 w-full h-full'>
            <div className='bg-slate-200 rounded-2xl lg:h-1/3 h-60 relative'>
              <div className='flex items-center justify-between w-full lg:p-8 p-4 absolute bottom-0 left-0'>

                <h2 className='lg:text-2xl text-lg font-bold text-[#121212]'>Ceiling</h2>

                <PrimaryButton label="Explore" width="w-fit" />

              </div>
            </div>

            <div className='bg-slate-200 rounded-2xl lg:h-1/3 h-60 relative'>
              <div className='flex items-center justify-between w-full lg:p-8 p-4 absolute bottom-0 left-0'>

                <h2 className='lg:text-2xl text-lg font-bold text-[#121212]'>Exterior</h2>

                <PrimaryButton label="Explore" width="w-fit" />

              </div>
            </div>

            <div className='bg-slate-200 rounded-2xl lg:h-1/3 h-60 relative'>
              <div className='flex items-center justify-between w-full lg:p-8 p-4 absolute bottom-0 left-0'>

                <h2 className='lg:text-2xl text-lg font-bold text-[#121212]'>Flooring</h2>

                <PrimaryButton label="Explore" width="w-fit" />

              </div>
            </div>
          </div>

        </div>


      </div>

      <div className='flex lg:flex-row flex-col lg:items-center lg:p-16 p-6 lg:justify-between bg-[#c7200e] lg:gap-0 gap-4'>

        <h2 className='lg:text-5xl text-3xl font-medium text-white'>Why Choose <span className='font-semibold'>PARE?</span></h2>


        <div className='bg-white rounded-2xl flex lg:flex-row flex-col lg:items-center py-4 lg:px-0 px-4 lg:divide-y-0 divide-y lg:divide-x-2 divide-[#12121250]'>
          {
            whyChoose?.map(({ name, value }) => (
              <div className='flex flex-col lg:w-46 h-32 px-7 items-start justify-center'>
                <p className='lg:text-3xl text-xl font-bold text-[#c7200e] text-start'>{value}</p>
                <p className='lg:text-base text-sm text-[#12121290] font-medium w-10/12'>{name}</p>
              </div>
            ))
          }
        </div>


      </div>

      <div className='flex flex-col w-full lg:min-h-screen items-center lg:p-16 p-6 lg:gap-7 gap-5'>
        <h2 className='lg:text-5xl text-3xl font-medium text-[#121212]'>Checkout our <span className='font-semibold'>Innovative Range</span></h2>

        <div className='flex flex-col lg:gap-12 gap-6 w-full'>
          {
            innovativeRanges?.map(({ name, description, perks }, index) => (
              <div className={`flex  ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col items-start w-full lg:h-[500px] lg:gap-7 gap-5`}>

                <div className='bg-slate-400 rounded-2xl lg:h-full h-60 lg:w-5/12 w-full'>

                </div>

                <div className='lg:w-7/12 w-full flex flex-col lg:gap-8 gap-5 lg:p-10'>

                  <div className='flex flex-col lg:gap-4 gap-2'>
                    <h2 className='lg:text-5xl text-3xl font-semibold text-[#121212] uppercase'>{name}</h2>

                    <h3 className='lg:text-5xl text-2xl text-[#12121290] font-thin lg:w-8/12'>
                      {description}
                    </h3>
                  </div>

                  <div className='flex items-center flex-wrap lg:gap-7 gap-5 lg:pt-8 pt-5 border-t-2 border-[#80808040]'>
                    {
                      perks?.map(({ name }) => (
                        <div className='flex items-center gap-2'>

                          <div className='w-14 h-14 bg-slate-300 rounded-full flex items-center justify-center'>
                            <img src="/placeholder.svg" alt="placeholder" className='w-5 h-5' />
                          </div>
                          <p className='lg:text-base text-sm text-[#121212] font-semibold'>{name}</p>
                        </div>
                      ))
                    }

                  </div>

                  <PrimaryButton label="Explore Range" width="w-fit" />

                </div>

              </div>
            ))
          }
        </div>

      </div>

      <div className='flex flex-col w-full bg-slate-600 items-center lg:p-16 p-6 lg:gap-7 gap-5'>

        <h2 className='lg:text-5xl text-3xl font-medium text-white'>Our <span className='font-semibold'>Brand Story</span></h2>
        <h3 className='lg:text-2xl text-xl font-medium text-white'>Innovating design for every space</h3>

        <p className='lg:text-lg text-base text-white lg:w-10/12 text-center'>Labore ex culpa dolor ea laboris ipsum ex id amet sunt. Excepteur consectetur dolore dolore ipsum duis sunt ex magna. Adipisicing deserunt minim adipisicing eu cillum pariatur officia magna elit ipsum. Magna proident reprehenderit aliqua sunt. Voluptate nostrud elit adipisicing ex eiusmod laborum commodo quis. Consectetur velit irure esse labore duis dolore id pariatur ea labore. Do minim nostrud deserunt ullamco eiusmod magna sint.</p>

        <PrimaryButton label="About Us" width="w-fit mx-auto" />

      </div>

      <Footer />
    </div>
  )
}

export default Home