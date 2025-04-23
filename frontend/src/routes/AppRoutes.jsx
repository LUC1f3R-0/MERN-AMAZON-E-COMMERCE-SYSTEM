import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminDashboard from '../pages/dashboard/admin/AdminDashboard'
import Home from '../pages/Home'
import AdminLogin from '../pages/auth/admin/AdminLogin'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path='/admin/login' element={<AdminLogin />} />
        </Routes>
    )
}

export default AppRoutes