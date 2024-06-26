import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header>
        <nav className='    navigation'>
          <label className='checkbtn'>
            <input type="" id="check" />
            <i id="check"> =</i>
          </label>
          <label className='logo'>Dekhne Pathology Lab</label>
          <ul>
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            
            <li>
              <Link href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link href="/aboutus">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contactus">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Navbar
