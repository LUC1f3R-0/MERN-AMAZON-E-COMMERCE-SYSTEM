import React from 'react'
import axiosInstance from '../../../api/axiosInstance'

const AdminLogin = () => {

    const fetch = async () => {
        const response = axiosInstance('/admin/admin-login')
        console.log(response)
    }
    React.useEffect(() => {
        fetch()
    }, [])
    return (
        <div>
            <h1>admin login</h1>
        </div>
    )
}

export default AdminLogin
