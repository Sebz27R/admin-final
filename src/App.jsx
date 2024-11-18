import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddEvent from './pages/AddEvent'
import AddMembership from './pages/AddMembership'
import AddModel from './pages/AddModel'
import AddPhoto from './pages/AddPhoto'
import AddSusProduct from './pages/AddSusProduct'
import ListEvents from './pages/ListEvents'
import ListMemberships from './pages/ListMemberships'
import ListModels from './pages/ListModels'
import ListPhotos from './pages/ListPhotos'
import ListSusProducts from './pages/ListSusProducts'


export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '$'

const App = () => {

  const [token,setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {token === "" 
      ? <Login setToken={setToken}/>
      : <>
          <Navbar setToken={setToken}/>
          <hr/>
          <div className='flex w-full'>
            <Sidebar/>
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/add' element={<Add token={token}/>}/>
                <Route path='/addEvent' element={<AddEvent token={token}/>}/>
                <Route path='/addMembership' element={<AddMembership token={token}/>}/>
                <Route path='/addModel' element={<AddModel token={token}/>}/>
                <Route path='/addPhoto' element={<AddPhoto token={token}/>}/>
                <Route path='/addSusProduct' element={<AddSusProduct token={token}/>}/>
                <Route path='/list' element={<List token={token}/>}/>
                <Route path='/listEvents' element={<ListEvents token={token}/>}/>
                <Route path='/listMemberships' element={<ListMemberships token={token}/>}/>
                <Route path='/listModels' element={<ListModels token={token}/>}/>
                <Route path='/listPhotos' element={<ListPhotos token={token}/>}/>
                <Route path='/listSusProducts' element={<ListSusProducts token={token}/>}/>
                <Route path='/orders' element={<Orders token={token}/>}/>
              </Routes> 
            </div>
          </div>
        </>
    }
    </div>
  )
}

export default App