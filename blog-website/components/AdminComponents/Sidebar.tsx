import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    
    
    <div className='flex flex-col bg-slate-100'>
        <div className='px-2 sm:pl-14 py-3 border border-black'>
            <Image src={assets.logo} alt='' width={120}/>
        </div>
        <div className='w-28 h-dvh sm:w-80 relative py-12 border border-black '>
         <div className='w-1/2 sm:w-4/5 absolute right-0'>
           <Link href='/admin/addProduct' className='flex items-center border gap-3 border-black py-2 px-3 bg-white shadow-[-5px_5px_0px_black] font-medium'>
            <Image src={assets.add_icon} alt='' width={28}/><p>Add Blogs</p>
          </Link>
           <Link href='/admin/bloglist' className='flex items-center border mt-5 gap-3 border-black py-2 px-3 bg-white shadow-[-5px_5px_0px_black] font-medium'>
            <Image src={assets.blog_icon} alt='' width={28}/><p>Blog List</p>
          </Link>
           <Link href='/admin/subscription' className='flex items-center border mt-5 gap-3 border-black py-2 px-3 bg-white shadow-[-5px_5px_0px_black] font-medium'>
            <Image src={assets.email_icon} alt='' width={28}/><p>Subscription</p>
          </Link>
         </div>
        </div>
        
    </div>
  )
}

export default Sidebar