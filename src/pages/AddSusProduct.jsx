import React, { useState } from 'react'
import uploadArea from '../assets/upload_area.png'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'


const AddSusProduct = ({token}) => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name,setName] = useState("")
  const [description,setDescription] = useState("")
  const [price,setPrice] = useState("")
  const [category,setCategory] = useState("Smokable")
  const [featured, setFeatured] = useState(false)

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    try {
      const formData = new FormData()

      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("featured",featured)

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const response = await axios.post(backendUrl + "/api/susProduct/add", formData, {headers:{token}})

      if(response.data.success){

        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
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
          <label htmlFor="image2">
            <img className='w-20' src={!image2 ? uploadArea : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0]) } type="file" id='image2' hidden />
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={!image3 ? uploadArea : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0]) } type="file" id='image3' hidden />
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={!image4 ? uploadArea : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0]) } type="file" id='image4' hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product name</p>
        <input onChange={(e)=> setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product description</p>
        <textarea onChange={(e)=> setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product category</p>
          <select onChange={(e)=> setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Smokable">Smokable</option>
            <option value="Edible">Edible</option>
            <option value="Injections">Injections</option>
            <option value="Snorted">Snorted</option>
            <option value="Skin Absorbable">Skin Absorbable</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
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

      <div className='flex gap-2 mt-2'>
        <input onChange={()=> setFeatured(prev => !prev)} checked={featured} type="checkbox" id='featured' />
        <label className='cursor-pointer' htmlFor="featured">Add to featured</label>
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>

    </form>
  )
}

export default AddSusProduct