 import React from 'react'
 
 const SubsTableItem = ({email,id,deleteEmail}) => {
    
    let date = new Date().toLocaleDateString('en-US');
   return (
    <tr className='bg-white border-b text-left'>
        <th className='px-5 py-3 text-gray-900 font-medium whitespace-nowrap'>
            {email?email:"No Emails"}
        </th>
        <td className='px-6 py-4 hidden sm:block'>{date}</td>
        <td onClick={() =>deleteEmail(id)} className='px-6 py-4 cursor-pointer'>❌</td>
    </tr>
   )
 }
 
 export default SubsTableItem