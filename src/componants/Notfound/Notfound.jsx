import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div>
      <h1 className=''>this page is not found </h1>
      <Link to={'/'} >home page</Link>
    </div>
  )
}
