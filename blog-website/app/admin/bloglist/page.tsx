'use client'
import BlogTableItem from '@/components/AdminComponents/BlogTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function page() {
let [blogs,setBlogs]=useState([]);
console.log(blogs)

let fetchBlogs=async()=>{
  try{
  let response=await axios.get('/api/blog')
  setBlogs(response.data.blogs)
  }catch (error) {
      console.log(error);
    }
}
let deleteBlogs=async(id)=>{
let response=await axios.delete("/api/blog",{
  params:{
    id:id
  }
})
 if (response.data.success) {
      toast.success(response.data.message || "Deleted successfully");
      fetchBlogs();
    } else {
      toast.error(response.data.message || "Delete failed");
    }

  }

useEffect(()=>{
  fetchBlogs()
},[])

  return (
    <div className='flex-1 mt-3 px-6 sm:pt-10 sm:pl-16'>
      <h1>All Blogs</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-700 '>
          <thead className='text-sm font-semibold text-black text-left uppercase bg-gray-200'>
            <tr>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                Author Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Blog Title
              </th>
              <th scope='col' className=' px-6 py-3'>
                Date
              </th>
              <th scope='col' className=' px-6 py-3'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {
              blogs.map((item,index)=>{
                return <BlogTableItem  key={ index}  id={item._id}  title={item.title} author={item.author}  Date={item.Date}  deleteBlogs={deleteBlogs}
                      />
              })
            }
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page