import React from 'react'
import { Link } from 'react-router-dom'

export default function NavHeader() {
  return (
    <div>
        <Link to='/'>HOME</Link>
        <Link to='/boardlist'>BoardList</Link>
    </div>
  )
}
