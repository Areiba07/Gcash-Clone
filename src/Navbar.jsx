'use client';
import React from 'react';
import { Navbar } from 'flowbite-react';
import "./assets/nav.css"

export default function App() {
  return (
    <div>
    <Navbar
      fluid
      className="bg-blue-700"
    >
      <Navbar.Brand
        href="https://www.gcash.com/"
      >
        <img
          alt="gcashlogo"
          className="mr-7 h-6 sm:h-10"
          src="https://www.gcash.com/wp-content/uploads/2019/07/gcash-logo.png"
        />

      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
      <div className="flex items-center mr-16">
          <Navbar.Link href="#" className="text-white mr-4">
            Customer
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white mr-4">
            Business
          </Navbar.Link>
        </div>

        <div className="flex items-center justify-center flex-grow">
          <Navbar.Link href="#" className="text-white mr-4">
            Home
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white mr-4">
            Getting Started
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white mr-4">
            Profile
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white mr-4">
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white mr-4">
            Partners
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white mr-4">
            Blogs
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white mr-4">
            Promos
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white mr-4">
            Help Center
          </Navbar.Link>
          <Navbar.Link href="#" className="text-white mr-4">
            Pricing
          </Navbar.Link>
        </div>
        <div>
          <Navbar.Link href="#">
            <button className="button">Register</button>
          </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}