import React from 'react'
import Navb from '../Nav/Navb'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div>
      <Navb/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
