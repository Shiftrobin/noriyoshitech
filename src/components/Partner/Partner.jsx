import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Partner() {
  return (
    <div className='cta-block relative lg:h-[120px] h-[180px]'>
        <div className='bg-cta w-full h-full absolute top-0 left-0 z-[-1]'>
            <Image width={5000} height={5000} className='w-full h-full object-cover' src={'/images/cta/bg-cta1.png'} alt='cta' />
        </div>   
        <div className='container flex items-center justify-between max-lg:flex-col max-lg:justify-center gap-6 h-full'>
            <div className='heading5 max-lg:text-center text-white'>
                    Looking for A first-class business consultant?
            </div>
            <Link className='button-main rounded-full hover:bg-black hover:text-white bg-white text-button px-9 py-3' href={'/'}>Get A Contact</Link>
        </div>     
    </div>
  )
}

export default Partner