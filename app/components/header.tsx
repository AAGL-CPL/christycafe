import Link from "next/link"
import Image from "next/image"
import MobileNav from "./mobile-nav"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Christy's Cafe Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="ml-2 text-xl font-serif text-[#5c3a21]">Christy's Cafe</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <Link
              href="/"
              className="text-[#5c3a21] hover:text-[#4a2e1a] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="text-[#5c3a21] hover:text-[#4a2e1a] transition-colors"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="text-[#5c3a21] hover:text-[#4a2e1a] transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-[#5c3a21] hover:text-[#4a2e1a] transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  )
} 