import './App.css'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Aboutus from './componets/Aboutus'
import Body from './componets/Body'
import Header from './componets/Navbar'
import Hero from './componets/Hero'

function App() {

  return (
    <>
    <BrowserRouter>
    <div className="bg-black text-white">
      <Header/>
      <Hero/>
      <Body/>
      <Aboutus/>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
