import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function LoginGuard() {
    let userInfo = localStorage.getItem('USER_INFO_KEY')
    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo) {
            navigate('/dashboard')
        }
    }, [])

    return <Outlet />
}
