import React from 'react'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Aboutus from '../componets/Aboutus'
import Body from '../componets/Body'
import Header from '../componets/Navbar'
import Hero from '../componets/Hero'

const Home = () => {
  return (
    <div className='bg-black'>
        <Header/>
        <Hero />
        <Body />
        <Aboutus />
    </div>
  )
}

export default Home