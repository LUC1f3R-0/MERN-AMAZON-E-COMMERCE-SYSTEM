import React from 'react'
import axiosInstance from '../../../api/axiosInstance'

const AdminDashboard = () => {
    const fetch = async () => {
        const response = await axiosInstance('/admin')
        console.log(response)
    }
    React.useEffect(() => {
        fetch()
    }, [])
    return (
        <>
            <h1>Admin dashBoard</h1>
        </>
    )
}

export default AdminDashboard
