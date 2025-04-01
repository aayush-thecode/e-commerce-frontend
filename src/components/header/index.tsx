import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div>
            <p>Logo</p>
        </div>
        <div>
            <Link href= {'/'}>
            <p>Home</p>
            </Link>
        </div>
        <Link href= {'/contact-us'}>
            <p>contact us</p>
            </Link>
        <div>
        <Link href= {'/'}>
            <p>About us</p>
            </Link>
        </div>
    </div>
  )
}

export default Header