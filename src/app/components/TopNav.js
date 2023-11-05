import Link from 'next/link';
import React from 'react';;
import { usePathname } from 'next/navigation';


const TopNav = () => {
  const path = usePathname();
  return (
    <div>
        <ul className='top-nav'>
            <li>
              <Link prefetch={true} className={path==='/'?'active-link' : 'not-active-link'} href='/' replace >Home</Link>
            </li> 
            <li>
              <Link prefetch={true} className={path==='/contact'?'active-link' : 'not-active-link'} href='/contact' replace >Contact</Link></li>
            <li>
              <Link 
                prefetch={true} className={path==='/product'?'active-link' : 'not-active-link'} 
                href={{pathname:"/product", query:{name: 'TestName', price: '200Tk'}}}
                 replace >
                  Product
              </Link>
            </li>
            <li><Link prefetch={true} className={path==='/blog'?'active-link' : 'not-active-link'} href='/blog'>Blog</Link></li>
            <li><Link prefetch={true} className={path==='/login'?'active-link' : 'not-active-link'} href='/login'>Login</Link></li>
            <li><Link prefetch={true} className={path==='/register'?'active-link' : 'not-active-link'} href='/register'>Register</Link></li>
            <li><Link prefetch={true} className={path==='/register'?'active-link' : 'not-active-link'} href='/register'>Register</Link></li>
        </ul>
    </div>
  )
}

export default TopNav
