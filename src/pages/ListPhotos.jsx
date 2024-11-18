import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const ListPhotos = ({token}) => {
  const [list,setList] = useState([])

  const fetchList = async () => {
    try {

      const response = await axios.get(backendUrl + '/api/photo/list')
      if(response.data.success){
        setList(response.data.photos)
      } else {
        toast.error(response.data.message)
      }
      

    } catch(error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removePhoto = async (id)=> {

    try {

      const response = await axios.post(backendUrl + '/api/photo/remove', {id}, {headers:{token}})

      if (response.data.success){
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }

    } catch(error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  useEffect(()=>{
    fetchList()
  }, [])

  return (
    <>
      <p className='mb-2'>All Photos List</p>
      <div className='flex flex-col gap-2'>
        {/* List table title */}

        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Title</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* Product list */}

        {
          list.map((item,index)=> (
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm' key={index}>
              <img className='w-12' src={item.image[0]} alt="" />
              <p>{item.title}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={()=>removePhoto(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default ListPhotos