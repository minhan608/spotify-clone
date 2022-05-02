import React from 'react'

export default function DetailSongs() {
  return (
    <div className='col-span-1 p-3'>
        <h2 className='text-cyan-500 font-bold'>Now playing</h2>
        <div className='w-[240px] m-auto mt-10'>
                <img className='w-full' src= 'https://cdnmedia.thethaovanhoa.vn/Upload/O5NP4aFt6GVwE7JTFAOaA/files/2022/04/son-tung-ra-mv-01.jpg' alt='avatar' />
        </div>
        <div className='flex justify-evenly items-center mt-10'>
        <img className='w-[70px] rounded-full' src= 'https://cdnmedia.thethaovanhoa.vn/Upload/O5NP4aFt6GVwE7JTFAOaA/files/2022/04/son-tung-ra-mv-01.jpg' alt='avatar' />
        <span className='text-xl text-white'>son tung mtp</span>
        </div>
    </div>
    
  )
}
