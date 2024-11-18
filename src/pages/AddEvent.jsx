import React, { useState } from 'react'
import uploadArea from '../assets/upload_area.png'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

const AddEvent = ({token}) => {
  const [image1, setImage1] = useState(false)

  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [date, setDate] = useState("")
  const [participating_models, setParticipating_models] = useState("")
  const [products_showcased, setProducts_showcased] = useState("")

  const onSubmitHandler = async (e) => {
    e.preventDefault()

    const models = participating_models.split(',').map(model => model.trim()).filter(Boolean);
    const products = products_showcased.split(',').map(product => product.trim()).filter(Boolean);

    // Convertir la fecha a timestamp en milisegundos
    const eventDateTimestamp = new Date(date).getTime();

    try {
      const formData = new FormData()

      formData.append("name", name)
      formData.append("location", location)
      formData.append("date", eventDateTimestamp) // Se envía la fecha como timestamp
      formData.append("participating_models", JSON.stringify(models))
      formData.append("products_showcased", JSON.stringify(products))

      image1 && formData.append("image1", image1)

      const response = await axios.post(backendUrl + "/api/event/add", formData, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setLocation('')
        setDate('')
        setImage1(false)
        setParticipating_models('')
        setProducts_showcased('')
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
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
            <input onChange={(e) => setImage1(e.target.files[0])} type="file" id='image1' hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Event Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Event Location</p>
        <textarea onChange={(e) => setLocation(e.target.value)} value={location} className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Event Date</p>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className='w-full max-w-[500px] px-3 py-2'
          required
        />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Participating Models</p>
        <input
          type="text"
          value={participating_models}
          onChange={(e) => setParticipating_models(e.target.value)}
          placeholder="Enter models id's separated by commas"
          className='w-full max-w-[500px] px-3 py-2'
        />
      </div>

      <div className='w-full'>
        <p className='mb-2'>Products Showcased</p>
        <input
          type="text"
          value={products_showcased}
          onChange={(e) => setProducts_showcased(e.target.value)}
          placeholder="Enter product ids separated by commas"
          className='w-full max-w-[500px] px-3 py-2'
        />
      </div>

      <button type='submit' className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>
    </form>
  )
}

export default AddEvent
