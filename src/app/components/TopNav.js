import Link from 'next/link'
import React from 'react'

const TopNav = () => {
  return (
    <div>
        <ul className='top-nav'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
            <li><Link href='/blog'>Blog</Link></li>
            <li><Link href='/login'>Login</Link></li>
            <li><Link href='/register'>Register</Link></li>
        </ul>
    </div>
  )
}

export default TopNav
