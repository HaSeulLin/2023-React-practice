import React from 'react'
import { Link } from 'react-router-dom'

export default function NavHeader() {
  return (
    <div className='nav'>
        <Link to='/'>HOME</Link>
        <Link to='/boardlist'>BOARD</Link>
        <Link to='/boardwriteform'>WRITE</Link>
    </div>
  )
}
