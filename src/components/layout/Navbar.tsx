import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, GraduationCap, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'MBBS in China', href: '/programs' },
      { label: 'BDS in China', href: '/programs' },
      { label: 'Clinical Medicine', href: '/programs' },
      { label: 'BS Nursing', href: '/programs' },
      { label: 'Engineering', href: '/programs' },
      { label: 'Chinese Language Course', href: '/programs' },
    ],
  },
  { label: 'Universities', href: '/universities' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const location = useLocation()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location])

  // Close dropdown on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpenDropdown(null)
      setMobileOpen(false)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="NRZ International — Home">
            <div className="w-9 h-9 rounded-lg bg-blue-700 flex items-center justify-center shadow-md group-hover:bg-blue-800 transition-colors">
              <GraduationCap className="w-5 h-5 text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={cn('font-bold text-base tracking-tight transition-colors', isScrolled ? 'text-slate-900' : 'text-white')}>
                NRZ International
              </span>
              <span className={cn('text-[10px] font-medium tracking-wide transition-colors', isScrolled ? 'text-blue-700' : 'text-blue-200')}>
                EST. 2008 · RAWALPINDI
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    aria-haspopup="true"
                    aria-expanded={openDropdown === link.label}
                    aria-controls={`dropdown-${link.label}`}
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={cn(
                      'flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-blue-500',
                      isScrolled
                        ? 'text-slate-700 hover:text-blue-700 hover:bg-blue-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn('w-3.5 h-3.5 transition-transform', openDropdown === link.label && 'rotate-180')}
                      aria-hidden="true"
                    />
                  </button>
                  <AnimatePresence>
                    {openDropdown === link.label && (
                      <motion.div
                        id={`dropdown-${link.label}`}
                        role="menu"
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                        className="absolute top-full left-0 mt-1.5 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            role="menuitem"
                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-colors font-medium focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:bg-blue-50"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={cn(
                    'px-3.5 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-blue-500',
                    isScrolled
                      ? 'text-slate-700 hover:text-blue-700 hover:bg-blue-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/login"
              className={cn(
                'px-4 py-2 text-sm font-semibold rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-blue-500',
                isScrolled
                  ? 'text-blue-700 hover:bg-blue-50'
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              )}
            >
              Sign In
            </Link>
            <Link
              to="/apply"
              className="px-5 py-2 bg-amber-400 hover:bg-amber-500 text-slate-900 text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus-visible:outline-2 focus-visible:outline-amber-600"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-500',
              isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            )}
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                        aria-expanded={mobileExpanded === link.label}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          className={cn('w-4 h-4 transition-transform', mobileExpanded === link.label && 'rotate-180')}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.15 }}
                            className="ml-4 mt-1 space-y-1 overflow-hidden"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="block px-3 py-2 text-sm text-slate-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-1 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  to="/login"
                  className="w-full text-center px-4 py-2.5 text-sm font-semibold text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/apply"
                  className="w-full text-center px-4 py-2.5 text-sm font-bold bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-lg transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
