"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#" },
  
  { name: "Features", href: "#" },
  { name: "Menu", href: "#" },
  { name: "Combos", href: "#" },
  { name: "Contact", href: "#" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#f8f5f0] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.svg?height=80&width=80" alt="Café Logo" width={80} height={80} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#5c3a21] hover:text-[#8b5a2b] px-3 py-2 text-sm font-medium"
                onClick={(e) => {
                  if (link.href === "#") {
                    e.preventDefault()
                    const sectionId = link.name.toLowerCase()
                    const section = document.getElementById(sectionId)
                    if (section) {
                      const navbarHeight = 64 // This is h-16 in pixels
                      const sectionTop = section.offsetTop - navbarHeight
                      window.scrollTo({
                        top: sectionTop,
                        behavior: "smooth"
                      })
                    }
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-[#5c3a21] hover:text-[#8b5a2b]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#f8f5f0]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#5c3a21] hover:text-[#8b5a2b] border-b border-[#5c3a21]/30 block px-3 py-2 text-base font-medium"
                onClick={(e) => {
                  setIsMenuOpen(false)
                  if (link.href === "#") {
                    e.preventDefault()
                    const sectionId = link.name.toLowerCase()
                    const section = document.getElementById(sectionId)
                    if (section) {
                      const navbarHeight = 240; // This is h-16 in pixels
                      const sectionTop = section.offsetTop - navbarHeight
                      window.scrollTo({
                        top: sectionTop,
                        behavior: "smooth"
                      })
                    }
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
