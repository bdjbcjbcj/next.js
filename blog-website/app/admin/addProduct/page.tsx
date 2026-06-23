'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Page = () => {

  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Zoni",
    authorImg: "/author_img.png",
  })

  const onChangeHandle = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    if (!image) {
      return toast.error("Please upload image")
    }

    try {
      setLoading(true)

      const formData = new FormData()
      formData.append("title", data.title)
      formData.append("description", data.description)
      formData.append("category", data.category)
      formData.append("author", data.author)
      formData.append("authorImg", data.authorImg)
      formData.append("image", image)

      const response = await axios.post('/api/blog', formData)

      if (response.data.success) {
        toast.success(response.data.msg)

        // ✅ Reset form
        setData({
          title: "",
          description: "",
          category: "Startup",
          author: "Zoni",
          authorImg: "/author_img.png",
        })
        setImage(null)

      } else {
        toast.error(response.data.error || "Something went wrong")
      }

    } catch (error) {
      console.error(error)
      toast.error("Server Error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='pt-2 px-5 sm:pt-5 sm:pl-16'>

      <p className='text-xl'>Upload thumbnail</p>

      <label htmlFor="image">
        <Image 
         className='mt-3  object-cover border cursor-pointer'
          src={!image ? assets.upload_area : URL.createObjectURL(image)}
          alt="" 
          width={140}
          height={70}
        />
      </label>

      <input
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
        id='image'
        hidden
        required
      />

      <p className='text-xl mt-3'>Blog Title</p>
      <input
        className='w-full sm:w-sm mt-4 py-1.5 px-2 border border-black'
        name='title'
        onChange={onChangeHandle}
        value={data.title}
        type="text"
        placeholder='Type here'
        required
      />

      <p className='text-xl mt-3'>Blog Description</p>
      <textarea
        name='description'
        onChange={onChangeHandle}
        value={data.description}
        className='w-full sm:w-sm mt-4 py-1.5 px-2 border'
        placeholder='Write content here'
        rows={3}
        required
      />

      <p className='text-xl mt-3'>Blog category</p>
      <select
        name="category"
        onChange={onChangeHandle}
        value={data.category}
        className='w-40 px-4 py-3 mt-2 border text-gray-500'
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>

      <button
        disabled={loading}
        className='bg-black text-white ml-2 px-8 w-40 border py-2.5 cursor-pointer mt-4'
      >
        {loading ? "Uploading..." : "ADD"}
      </button>

    </form>
  )
}

export default Page