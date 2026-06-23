'use client'
import SubsTableItem from '@/components/AdminComponents/SubsTableItem'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


  const Page = () => {

  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {

    try {

      const res = await axios.get("/api/email");

      if (res.data.success) {
        setEmails(res.data.subscribers);
      }

    } catch (error) {
      console.log(error);
    }
  };

  // DELETE EMAIL
  const deleteEmail = async (id) => {

    try {

      const res = await axios.delete(`/api/email?id=${id}`);

      if (res.data.success) {

        toast.success(res.data.message);

        // refresh list
        fetchEmails();

      } else {
        toast.error(res.data.message);
      }

    } catch (error) {

      console.log(error);

      toast.error("Delete failed");
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);
  return (
     <div className='flex-1 mt-3 px-6 sm:pt-10 sm:pl-16'>
      <h1>All Subscriptions</h1>
      <div className='relative h-[80vh] max-w-[600px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-700 '>
          <thead className='text-sm font-semibold text-black text-left uppercase bg-gray-200'>
            <tr>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                Email Subscription
              </th>
             
              <th scope='col' className=' px-8 py-3'>
                Date
              </th>
              <th scope='col' className=' px-6 py-3'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>

            {
              emails.map((item,index)=>{
                return <SubsTableItem key={index} id={item._id} email={item.email} Date={item.Date} deleteEmail={deleteEmail}/>
              })
            }
           
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Page