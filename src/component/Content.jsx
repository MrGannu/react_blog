import React from 'react'
import Topbar from './Topbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import "../style/component.css"

const Content = () => {
  return (
    <div className='content_div'>
      <Topbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Content