import React from 'react'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function MainLayout() {
    return (
        <>
            <Navbar Outlet={<Outlet />} />
        </>
    )
}

export default MainLayout