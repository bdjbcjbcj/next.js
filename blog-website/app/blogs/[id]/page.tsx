"use client";
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/components/Footer";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { use } from "react";


const Page = () => {

  const params = useParams();
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {

    // ✅ First check local blogs
    const localBlog = blog_data.find(
      (item) => item.id.toString() === params.id
    );

    // ✅ If old static blog found
    if (localBlog) {
      setData(localBlog);
      return;
    }

    // ✅ Otherwise fetch MongoDB blog
    try {

      const response = await axios.get('/api/blog', {
        params: {
          id: params.id
        }
      });

      setData(response.data);

    } catch (error) {

      console.log(error);

    }

  };



  useEffect(() => {

    if (params?.id) {
      fetchBlogData();
    }

  }, [params?.id]);



  return (
    <div>
    <div className="bg-gray-200 px-5 py-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Link href='/'>
        <Image src={assets.logo} alt="" width={180} className="w-36" />
        </Link>

        <button className="flex border border-black gap-2 items-center font-medium py-1 px-3 sm:py-3 sm:px-6 shadow-[-7px_7px_0_black]">
          Get Started <Image src={assets.arrow} alt="" />
        </button>
      </div>

      {/* ✅ SAFE RENDERING */}
      {data ? (
        <div className="text-center my-24">
          <h1 className=" text-2xl sm:text-4xl  max-w-2xl mx-auto font-semibold">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.author_img || "/authorImg.png"}
            alt=""
            width={60}
            height={60}
          />
          <p className="mt-1 text-lg max-w-2xl mx-auto pb-2">{data.author}</p>
          <div className="mx-5 max-w-3xl md:mx-auto mt-10 mb-10 text-start">
            <Image
              className="border-4 border-white"
              src={data.image}
              alt=""
              width={1000}
              height={620}
            />
            <h1 className="my-8 text-2xl font-semibold ">Introduction:</h1>
            <p className="">{data.description}</p>
            <h3 className="my-5 text-xl font-semibold">
              Step 1: Self Reflection and Goal Setting
            </h3>
            <p className="my-3">
              Before You manage your lifstyles,you must have a clear voice of
              their blogs and long term operations.blogs and long term
              operations term operations.
            </p>
            <p className="my-3">
              Before You manage your lifstyles,you must have a clear voice of
              their blogs and long term operations.blogs and long term
              operations term operations.
            </p>
            <h3 className="my-5 text-xl font-semibold">
              Step 2: Self Reflection and Goal Setting
            </h3>
            <p className="my-3">
              Before You manage your lifstyles,you must have a clear voice of
              their blogs and long term operations.blogs and long term
              operations term operations.
            </p>
            <p className="my-3">
              Before You manage your lifstyles,you must have a clear voice of
              their blogs and long term operations.blogs and long term
              operations term operations.
            </p>
            <h3 className="my-5 text-xl font-semibold">
              Step 3: Self Reflection and Goal Setting.
            </h3>
            <p className="my-3">
              Before You manage your lifstyles,you must have a clear voice of
              their blogs and long term operations.blogs and long term
              operations term operations.
            </p>
            <p className="my-3">
              Before You manage your lifstyles,you must have a clear voice of
              their blogs and long term operations.blogs and long term
              operations term operations.
            </p>
            <h3 className="my-5 text-xl font-semibold">Conclusion:</h3>
            <p className="my-3">
                  Before You manage your lifstyles,you must have a clear voice of
              their blogs and long term operations.blogs and long term
              operations term operations.Before You manage your lifstyles,you must have a clear voice of
              their blogs and long term operations.blogs and long term
              operations term operations.Before You manage your lifstyles,you must have a clear voice of
              their blogs and long term operations.blogs and long term
              operations term operations.
            </p>
            <div className="my-24">
                <h1 className="text-xl font-semibold">SHARE THIS ARTICLE ON SOCIAL MEDIA</h1>
                <div className="flex my-5">
                <Image src={assets.facebook_icon} alt=""/>
                <Image src={assets.twitter_icon} alt=""/>
                <Image src={assets.googleplus_icon} alt=""/>
                </div>
            </div>
          </div>
        </div>
        
      ) : (
        <div>Loading...</div>
      )}
      
    </div>
    <Footer/>
    </div>
  );
};

export default Page;
