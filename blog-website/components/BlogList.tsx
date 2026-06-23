import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'


const BlogList = () => {
    let [menu,setMenu]=useState("All")
    let [blogs,setBlogs]=useState([]);
  
    
    let fetchBlogs=async()=>{
      let response = await axios.get('/api/blog')
      setBlogs(response.data.blogs)
      console.log(response.data.blogs)
    }
   
    useEffect(()=>{
     

      fetchBlogs();
    },[])
     
      // 🔥 merge data
  const allBlogs = [...blog_data, ...blogs];
  
  return (
    <div>
    <div className='flex justify-center gap-6 my-10'>
        <button onClick={()=> setMenu('All')} className={menu === "All" ? `px-4 bg-black text-white py-1 rounded-sm cursor-pointer` : ""}>All</button>
        <button onClick={()=>setMenu('Technology')} className={menu === "Technology" ? `px-4 bg-black text-white py-1 cursor-pointer rounded-sm` : ""}>Technology</button>
        <button onClick={()=>setMenu('Startup')} className={menu === "Startup" ? `px-4 bg-black text-white py-1 cursor-pointer rounded-sm` : ""}>Startup</button>
        <button onClick={()=>setMenu('Lifestyle')} className={menu === "Lifestyle" ? `px-4 bg-black text-white cursor-pointer py-1 rounded-sm` : ""}>Lifestyle</button>
    </div>
    <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx24'>
     {
        allBlogs.filter((item)=> menu==="All"? true:item.category===menu).map((item,index)=>{
            return <BlogItem key={index} id={item.id || item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
        })
     } 
    </div>
    </div>
  )
}

export default BlogList