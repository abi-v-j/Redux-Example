import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import Product from './pages/product/Product'
import Profile from './pages/profile/Profile'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<HomePage/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='profile' element={<Profile/>}/>
    </Routes>
  )
}

export default MainRoutes