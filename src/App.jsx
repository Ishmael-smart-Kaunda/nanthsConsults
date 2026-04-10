import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/home'
import Services from './pages/services'
import About from './pages/about'
import Contact from './pages/contact'
import Blog from './pages/blog'

const ScrollTop=()=>{
      const pathname=useLocation()
      useEffect(()=>{
           window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
           })
      },[pathname])
      return null
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <AnimatePresence>
          <ScrollTop/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='services' element={<Services/>}/>
              <Route path='about' element={<About/>}/>
              <Route path='contact' element={<Contact/>}/>
              <Route path='blog' element={<Blog/>}/>
          </Routes>
         </AnimatePresence>
      </BrowserRouter>
      
    </>
  )
}

export default App
