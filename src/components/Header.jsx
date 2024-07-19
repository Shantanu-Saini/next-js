import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div>
      <header className='grid place-content-center bg-orange-300 py-6'>
        <h1 className='text-4xl font-bold'>My Header</h1>
        <div className='flex items-center justify-center'>
          <Link href='/' className="text-2xl mx-4">Home</Link>
          <Link href='/about' className="text-2xl mx-4">About</Link>
          <Link href='/profile' className="text-2xl mx-4">Profile</Link>
          <Link href='/products' className="text-2xl mx-4">Products</Link>
        </div>
      </header>
    </div>
  )
}

export default Header