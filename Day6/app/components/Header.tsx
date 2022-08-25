import React, { Component } from 'react'
import Link from 'next/link'
import Navbar from './Navbar'

export default class Header extends Component {
  render() {
    return (
      <>
      <header>
        <Link href='/navbar'>
        <a >
          <Navbar></Navbar>
        </a>
        </Link>
        </header>
      </>
    )
  }
}
