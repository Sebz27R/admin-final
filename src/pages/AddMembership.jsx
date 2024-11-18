import React, { useState } from 'react'
import uploadArea from '../assets/upload_area.png'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const AddMembership = ({token}) => {
  const [image1, setImage1] = useState(false)

  const [name,setName] = useState("")
  const [duration,setDuration] = useState("")
  const [price,setPrice] = useState("")

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()

      formData.append("name",name)
      formData.append("duration",duration)
      formData.append("price",price)
      // formData.append("format",JSON.stringify(format))

      image1 && formData.append("image1",image1)

      const response = await axios.post(backendUrl + "/api/membership/add", formData, {headers:{token}})

      if(response.data.success){

        toast.success(response.data.message)
        setName('')
        setDuration('')
        setImage1(false)
        setPrice('')
      } else {
        toast.error(response.data.message)
      }

    } catch(error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1 ? uploadArea : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0]) } type="file" id='image1' hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Membership name</p>
        <input onChange={(e)=> setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Membership duration</p>
        <textarea onChange={(e)=> setDuration(e.target.value)} value={duration} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='1 Month' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

        <div>
          <p className='mb-2'>Membership Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="Number" placeholder='25' />
        </div>
      </div>

      {/* <div>
        <p className='mb-2'>Photo format</p>
        <div className='flex gap-3'>

          <div onClick={()=>setFormat(prev => prev.includes("Digital") ? prev.filter(item=> item !== "Digital") : [...prev, "Digital"])}>
            <p className={`${format.includes("Digital") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Digital</p>
          </div>

          <div onClick={()=>setFormat(prev => prev.includes("Physical") ? prev.filter(item=> item !== "Physical") : [...prev, "Physical"])}>
            <p className={`${format.includes("Physical") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>Physical</p>
          </div>

        </div>
      </div> */}

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>

    </form>
  )
}

export default AddMembership