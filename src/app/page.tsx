import React from 'react'
import Image from 'next/image'
import Header from './components/Header'
const page = () => {
  return (
    <div className='h-screen'>
    <Header/>
      <div className='flex h-[80%]'>
        <div className='w-1/2 flex flex-col justify-center item-start m-12'>

        <h1 className='text-4xl'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>

        <Image className='py-6'
        src={"/images/figmaimage1.svg"}
        alt="hero image"
        width={902}
        height={147}
        />

        <button className='bg-[#A29875] text-white top-[680px] rounded-[6px] text-[30px] p-[10px]
         font-medium font-[Libre-Bodoni] w-[288px] '>Explore Now</button>
        </div>

        <div className='w-1/2  flex justify-around '>
        <Image
        src={"/images/rs-group-wrap.svg"}
        alt="hero image"
        width={462}
        height={647}
        />
        </div>
      </div>

      </div>
  )
}

export default page