import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col sm:flex-row gap-2 sm:gap-0 bg-black items-center py-5'>
        <Image src={assets.logo_light} alt='' width={120}/>
        <p className='text-white text-sm'>All Right are reserved. Copyright @blogger</p>
        <div className='flex'>
            <Image src={assets.facebook_icon} alt='' width={40}/>
            <Image src={assets.twitter_icon} alt='' width={40}/>
            <Image src={assets.googleplus_icon} alt='' width={40}/>
        </div>
    </div>
  )
}

export default Footer