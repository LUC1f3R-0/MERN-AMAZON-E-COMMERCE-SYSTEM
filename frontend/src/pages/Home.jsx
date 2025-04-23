import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>HOME PAGE</h1>
            <button className='cursor-pointer' onClick={() => navigate('/admin')}>admin dash board</button>
        </>
    )
}

export default Home
