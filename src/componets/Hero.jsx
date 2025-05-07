import React from 'react'
import {FaPlay, FaPlayCircle, FaRegPlayCircle} from 'react-icons/fa'
import amateur from '../assets/amateur.jpg'
import cabnw from '../assets/captain_america_brave_new_world_ver3.jpg'

const Hero = () => {
  return (
    <div className='flex items-center justify-between bg-black text-white px-[10%] py-1 pb-10'>
        <div className="hero-text w-100">
            <h2 className="h2 font-bold text-3xl tracking-tighter">FIND MOVIES</h2>
            <h1 className="font-bold text-5xl text-transparent bg-gradient-to-l from-blue-700 to-red-500 bg-clip-text">
                TV SHOWS AND MORE
            </h1>
            <p className='tracking-tighter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum in quam incidunt vero cum labore, corporis autem excepturi impedit.</p>
            <button className="flex justify-between gap-3 my-4 px-4 py-2 rounded bg-none text-white outline-2 outline-white font-bold cursor-pointer"><FaPlay className='my-[3px]'/> Watch Tutorial</button>
        </div>
        <div className="hero-image relative w-[400px] h-[300px]">
          <img src={cabnw} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
          <img src={amateur} alt="" className="absolute top-[10%] right-[50%] w-full h-full object-cover " />
          <FaRegPlayCircle className='absolute top-[50%] shadow-black shadow-2xl text-5xl cursor-pointer'/>
        </div>

    </div>
  )
}

export default Hero