import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className=' flex justify-between bg-green-200 p-4'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/basket">basket 0</NavLink>
    </header>
  )
}
