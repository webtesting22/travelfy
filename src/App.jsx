import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeRoutes from './Components/HomeRoutes'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
