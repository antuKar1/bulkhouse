import React from 'react'
import NavBar from '../component/shared/NavBar'
import Footer from '../component/shared/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='px-20'>
      <NavBar></NavBar>
        <Outlet ></Outlet>
      <Footer ></Footer>
    </div>
  )
}

export default RootLayout
