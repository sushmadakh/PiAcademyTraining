import React, { Component } from 'react'
import about from '../pages/about'
//import 404 from '../pages/404'

import Link from 'next/link'

export default class Navbar extends Component {
  render() {
    return (
      <>
      <nav>
        <ul>
            <li>
                <Link href='/'>
                    <button>Home</button>
                </Link>
            </li>
            <li>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href='/contact'>
                    <a>Contact</a>
                </Link>
            </li>
            <li>
                <Link href='/blog'>
                    <a>Blog</a>
                </Link>
            </li>
        </ul>
      </nav>
      </>
    )
  }
}

