import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <main className='font-montserrat bg-orange-50'>
        <Header />
        <Outlet />
        <Footer />

    </main>
  )
}

export default Layout