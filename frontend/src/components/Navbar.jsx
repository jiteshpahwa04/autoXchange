import React from 'react'
import './styleNav.css'
function Navbar() {
  return (
    <div className='bg-slate-900 p-5 flex gap-5 items-center'>
        <img src='eDrive.png' width="100"></img>
        <p className='text-5xl text-white'>Edrive</p>
    </div>
  )
}

export default Navbar