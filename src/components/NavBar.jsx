import React from 'react'
import { navLinks } from '../constants/index.js'

const NavBar = () => {
  return (
    <header>
        <nav>
            <ul>
                <img src='/logo.svg' alt='Logo' />

                 {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
            </ul>
                <div className='flex-center-right gap-3'>
                    <button>
                        <img src='/search.svg' alt='Search' />
                    </button>
                    <button>
                        <img src='/cart.svg' alt='Bag' />
                    </button>
                </div>
        </nav>
    </header>
  )
}

export default NavBar


