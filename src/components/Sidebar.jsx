import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'} to={"/add"}>
                <img className='w-5 h-5' src="https://static.vecteezy.com/system/resources/thumbnails/035/197/725/small_2x/cosmetics-products-transparent-background-fashion-outfit-profucts-png.png" alt="" />
                <p className='hidden md:block'>Add Products</p>
            </NavLink>
            <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'} to={"/list"}>
                <img className='w-5 h-5' src="https://icons.veryicon.com/png/o/miscellaneous/utility/dash-3.png" alt="" />
                <p className='hidden md:block'>List Products</p>
            </NavLink>
            <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'} to={"/addSusProduct"}>
                <img className='w-5 h-5' src="https://npr.brightspotcdn.com/dims4/default/ba2e9fa/2147483647/strip/true/crop/901x790+0+0/resize/880x772!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fketr%2Ffiles%2F201805%2Fdrug_abuse_logo_-_wikimedia_commons.png" alt="" />
                <p className='hidden md:block'>Add Sus</p>
            </NavLink>
            <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'} to={"/listSusProducts"}>
                <img className='w-5 h-5' src="https://icons.veryicon.com/png/o/miscellaneous/utility/dash-3.png" alt="" />
                <p className='hidden md:block'>List Sus</p>
            </NavLink>
            <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'} to={"/addEvent"}>
                <img className='w-5 h-5' src="https://cdn-icons-png.flaticon.com/512/1055/1055650.png" alt="" />
                <p className='hidden md:block'>Add Events</p>
            </NavLink>
            <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'} to={"/listEvents"}>
                <img className='w-5 h-5' src="https://icons.veryicon.com/png/o/miscellaneous/utility/dash-3.png" alt="" />
                <p className='hidden md:block'>List Events</p>
            </NavLink>
            <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'} to={"/addModel"}>
                <img className='w-5 h-5' src="https://icon2.cleanpng.com/20240315/sz/transparent-beautiful-woman-beautiful-woman-blonde-hair-red-li-serious-blonde-woman-in-black-1710835820777.webp" alt="" />
                <p className='hidden md:block'>Add Models</p>
            </NavLink>
            <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'} to={"/listModels"}>
                <img className='w-5 h-5' src="https://icons.veryicon.com/png/o/miscellaneous/utility/dash-3.png" alt="" />
                <p className='hidden md:block'>List Models</p>
            </NavLink>
            <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'} to={"/addPhoto"}>
                <img className='w-5 h-5' src="https://pngimg.com/d/photo_camera_PNG101644.png" alt="" />
                <p className='hidden md:block'>Add Photos</p>
            </NavLink>
            <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'} to={"/listPhotos"}>
                <img className='w-5 h-5' src="https://icons.veryicon.com/png/o/miscellaneous/utility/dash-3.png" alt="" />
                <p className='hidden md:block'>List Photos</p>
            </NavLink>
            <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'} to={"/addMembership"}>
                <img className='w-5 h-5' src="https://png.pngtree.com/png-clipart/20230428/original/pngtree-silver-tier-membership-png-image_9118213.png" alt="" />
                <p className='hidden md:block'>Add Memberships</p>
            </NavLink>
            <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'} to={"/listMemberships"}>
                <img className='w-5 h-5' src="https://icons.veryicon.com/png/o/miscellaneous/utility/dash-3.png" alt="" />
                <p className='hidden md:block'>List Memberships</p>
            </NavLink>
            <NavLink className={'flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l'} to={"/orders"}>
                <img className='w-5 h-5' src="https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/order-placed-purchased-icon.svg" alt="" />
                <p className='hidden md:block'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar