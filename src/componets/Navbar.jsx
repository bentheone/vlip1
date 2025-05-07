import React from 'react'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import logo from '../assets/react.svg'

const Navbar = () => {
  return (
    <div>
        <nav className="flex items-center justify-between bg-black text-white px-[10%] py-1">
          <div className="w-16 h-16 object-center py-4">
            <img src={logo} alt="" />
          </div>
          <div className="links">
            <ul className="flex list-none space-x-4">
              <Link to='/'className='px-4 py-2 font-bold'>Home</Link>
              <Link to='/movies' className='px-4 py-2'>Explore</Link>
              <Link to='/link3' className='px-4 py-2'>Genre</Link>
              <Link to='/link5' className='px-4 py-2'>News</Link>
              <Link to='/link5' className='px-4 py-2'>Movies</Link>
              <Link to='/link5' className='px-4 py-2'>TV Shows</Link>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Navbar