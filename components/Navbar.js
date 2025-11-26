'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Check login status when navbar loads  
  useEffect(() => {
    const token = localStorage.getItem("rentup_token")
    setIsLoggedIn(!!token)
  }, [])

  // Logout handler  
  const handleLogout = () => {
    localStorage.removeItem("rentup_token")
    alert("Logged out!")
    window.location.href = "/login"
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">♻️</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Rent<span className="text-primary">Up</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition">
              Home
            </Link>

            <Link href="/explore" className="text-gray-700 hover:text-primary font-medium transition">
              Browse
            </Link>

            <Link href="/post" className="text-gray-700 hover:text-primary font-medium transition">
              Post Ad
            </Link>

            {/* 🔥 LOGIN / LOGOUT BUTTON */}
            {!isLoggedIn ? (
              <Link
                href="/login"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition font-medium"
              >
                <div className='flex gap-2'>
                  <span className="text-sm">👤</span>
                  <span className='text-sm'>Login</span>
                </div>
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition font-medium"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/explore" className="block py-2 text-gray-700 hover:text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
              Browse
            </Link>
            <Link href="/post" className="block py-2 text-orange-500 hover:text-orange-600 font-medium" onClick={() => setIsMenuOpen(false)}>
              Post Ad
            </Link>

            {/* 🔥 MOBILE LOGIN / LOGOUT */}
            {!isLoggedIn ? (
              <Link
                href="/login"
                className="block py-2 text-gray-700 hover:text-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            ) : (
              <button
                onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                className="block py-2 text-red-500 hover:text-red-600 font-medium w-full text-left"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
