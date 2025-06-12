import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeRoutes from './Components/HomeRoutes'
import Footer from './Components/HomePage/Footer/Footer'
import NavigationBar from './Components/HomePage/NavigationBar/NavigationBar'
function App() {

  return (
    <>
      <BrowserRouter>
      <NavigationBar/>
        <Routes>
          <Route path='/' element={<HomeRoutes />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
