import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar,Footer } from './components'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default Layout